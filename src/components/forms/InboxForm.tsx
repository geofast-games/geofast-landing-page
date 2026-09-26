import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, ImagePlus, Loader2, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { QuietSelect } from "@/components/ui/quiet-select";
import { ATTACHMENT_MAX_BYTES, ATTACHMENT_TYPES, commonFields, forms, type FormField, type FormKind } from "@/content/forms";
import { submitToInbox } from "@/lib/inbox";

const CONTACT_EMAIL = "contact@geofastgames.com";

// One component renders all four forms from src/content/forms.ts. The browser
// posts straight to the inbox service; nothing here is stored in the page.
// Prerendered pages show the empty form, so the markup has to be plain HTML
// that works before hydration too (native inputs, a real <form>).
export const InboxForm = ({ kind }: { kind: FormKind }) => {
  const spec = forms[kind];
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [selects, setSelects] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [state, setState] = useState<
    | { phase: "editing" }
    | { phase: "sending" }
    | { phase: "sent"; reference: string }
    | { phase: "failed"; message: string; errors?: string[] }
  >({ phase: "editing" });

  const fieldId = (name: string) => `${uid}-${name}`;

  // The file input is only a picker: `files` state is what gets sent, so
  // images can be added in several picks and removed one by one. The input is
  // cleared after each pick so the same file can be chosen again later.
  const onFiles = (list: FileList | null) => {
    const chosen = Array.from(list ?? []);
    if (fileInputRef.current) fileInputRef.current.value = "";
    const bad = chosen.find((f) => !ATTACHMENT_TYPES.includes(f.type) || f.size > ATTACHMENT_MAX_BYTES);
    if (bad) {
      setFileError(`${bad.name}: PNG, JPEG, GIF or WebP up to 5 MB.`);
      return;
    }
    const merged = [...files];
    for (const f of chosen) {
      if (!merged.some((m) => m.name === f.name && m.size === f.size && m.lastModified === f.lastModified)) merged.push(f);
    }
    if (merged.length > spec.maxAttachments) {
      setFileError(`At most ${spec.maxAttachments} image${spec.maxAttachments === 1 ? "" : "s"}.`);
      return;
    }
    setFileError(null);
    setFiles(merged);
  };

  // A refused pick (wrong type, too big, over the limit) never changes the
  // list, so the message is a notice only; Send stays available.
  const removeFile = (index: number) => {
    setFiles((current) => current.filter((_, i) => i !== index));
    setFileError(null);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.phase === "sending") return;
    const form = new FormData(event.currentTarget);
    // Radix Select is not a native control; its values are added here.
    for (const [name, value] of Object.entries(selects)) form.set(name, value);
    form.delete("attachments");
    for (const f of files) form.append("attachments", f);

    setState({ phase: "sending" });
    const result = await submitToInbox(kind, form);
    if (result.ok) {
      setState({ phase: "sent", reference: result.reference });
      return;
    }
    if (result.kind === "rate_limited") {
      setState({ phase: "failed", message: "You have sent several messages in a short time. Please try again in an hour." });
    } else if (result.kind === "invalid") {
      setState({ phase: "failed", message: "Please check the form.", errors: result.errors });
    } else {
      setState({
        phase: "failed",
        message: `We could not receive your message right now. Please try again in a moment, or email ${CONTACT_EMAIL}.`,
      });
    }
  };

  // The confirmation card is much shorter than the form it replaces, so the
  // page shrinks under the reader and the scroll offset lands below it.
  // Bring the card to the top (scroll-mt clears the sticky navbar); the
  // same on "Send another", so the fresh form starts at its first field.
  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  useEffect(() => {
    if (state.phase === "sent") scrollToTop();
  }, [state.phase]);

  const reset = () => {
    formRef.current?.reset();
    setSelects({});
    setFiles([]);
    setFileError(null);
    setState({ phase: "editing" });
    scrollToTop();
  };

  if (state.phase === "sent") {
    return (
      <Card ref={topRef} className="w-full scroll-mt-24">
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Received. Thank you!</h2>
          <p className="text-muted-foreground">
            Your reference is{" "}
            <span className="rounded-md bg-muted px-2 py-1 font-mono font-semibold text-foreground">{state.reference}</span>.
            Quote it if you follow up by email or on Discord.
          </p>
          <p className="max-w-md text-muted-foreground">{spec.thanks}</p>
          <Button variant="outline" onClick={reset}>
            Send another
          </Button>
        </CardContent>
      </Card>
    );
  }

  const renderField = (f: FormField) => {
    const id = fieldId(f.name);
    const label = (
      <label htmlFor={id} className="text-sm font-medium leading-none">
        {f.label}
        {f.required && <span className="text-destructive"> *</span>}
      </label>
    );
    if (f.widget === "checkbox") {
      return (
        <div key={f.name} className="flex items-start gap-3">
          <input id={id} name={f.name} type="checkbox" required={f.required} className="mt-0.5 h-4 w-4 accent-primary" />
          {label}
        </div>
      );
    }
    let control;
    if (f.widget === "textarea") {
      control = <Textarea id={id} name={f.name} required={f.required} maxLength={f.maxLength} placeholder={f.placeholder} />;
    } else if (f.widget === "select") {
      control = (
        <QuietSelect
          id={id}
          value={selects[f.name] ?? ""}
          onValueChange={(v) => setSelects((s) => ({ ...s, [f.name]: v }))}
          options={f.options ?? []}
          required={f.required}
          className="w-full md:w-[320px]"
          contentClassName="max-h-72"
        />
      );
    } else {
      control = <Input id={id} name={f.name} type="text" required={f.required} maxLength={f.maxLength} placeholder={f.placeholder} />;
    }
    return (
      <div key={f.name} className="space-y-2">
        {label}
        {control}
        {f.help && <p className="text-sm text-muted-foreground">{f.help}</p>}
      </div>
    );
  };

  return (
    <Card ref={topRef} className="w-full scroll-mt-24">
      <CardHeader>
        <CardTitle>{spec.title}</CardTitle>
        <CardDescription>{spec.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={onSubmit} className="space-y-6" noValidate={false}>
          {spec.fields.map(renderField)}

          {spec.maxAttachments > 0 && (
            <div className="space-y-2">
              <label htmlFor={fieldId("attachments")} className="text-sm font-medium leading-none">
                Screenshots
              </label>
              {files.length > 0 && (
                <ul className="space-y-1.5">
                  {files.map((f, i) => (
                    <li
                      key={`${f.name}-${f.size}-${f.lastModified}`}
                      className="flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <span className="min-w-0 flex-1 truncate">{f.name}</span>
                      <span className="shrink-0 text-muted-foreground">{Math.max(1, Math.round(f.size / 1024))} KB</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        aria-label={`Remove ${f.name}`}
                        className="shrink-0 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {files.length < spec.maxAttachments && (
                <label
                  htmlFor={fieldId("attachments")}
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-input px-4 py-3 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
                >
                  <ImagePlus className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {files.length
                    ? `Add another image (${spec.maxAttachments - files.length} more allowed)`
                    : `Up to ${spec.maxAttachments} image${spec.maxAttachments === 1 ? "" : "s"}, 5 MB each (optional)`}
                </label>
              )}
              <input
                ref={fileInputRef}
                id={fieldId("attachments")}
                name="attachments"
                type="file"
                accept={ATTACHMENT_TYPES.join(",")}
                multiple={spec.maxAttachments > 1}
                className="sr-only"
                onChange={(e) => onFiles(e.target.files)}
              />
              {fileError && <p className="text-sm text-destructive">{fileError}</p>}
            </div>
          )}

          <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor={fieldId("username")} className="text-sm font-medium leading-none">
                {commonFields.username.label}
              </label>
              <Input id={fieldId("username")} name="username" type="text" maxLength={commonFields.username.maxLength} autoComplete="off" />
              <p className="text-sm text-muted-foreground">{commonFields.username.help}</p>
            </div>
            <div className="space-y-2">
              <label htmlFor={fieldId("email")} className="text-sm font-medium leading-none">
                {commonFields.email.label}
              </label>
              <Input id={fieldId("email")} name="email" type="email" maxLength={commonFields.email.maxLength} autoComplete="email" />
              <p className="text-sm text-muted-foreground">{commonFields.email.help}</p>
            </div>
          </div>

          {/* Honeypot: hidden from people, filled by bots. The service files
              anything with this set under spam. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor={fieldId("website")}>Website</label>
            <input id={fieldId("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {state.phase === "failed" && (
            <div role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
              <p>{state.message}</p>
              {state.errors && state.errors.length > 0 && (
                <ul className="mt-1 list-disc pl-5 text-muted-foreground">
                  {state.errors.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" disabled={state.phase === "sending"}>
              {state.phase === "sending" && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
              Send
            </Button>
            <p className="text-sm text-muted-foreground">
              What you send is stored on our server in the EU for up to twelve months. See the{" "}
              <a href="/privacy#website" className="font-medium text-primary hover:underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
