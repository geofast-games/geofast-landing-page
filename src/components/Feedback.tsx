import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuietSelect } from "@/components/ui/quiet-select";
import { InboxForm } from "./forms/InboxForm";
import type { FormKind } from "@/content/forms";

const FEEDBACK_KINDS: { value: FormKind; label: string }[] = [
  { value: "bug", label: "Report a bug" },
  { value: "translation", label: "Report a translation error" },
  { value: "suggestion", label: "Make a suggestion" },
];

const FeedbackPage = () => {
  const [kind, setKind] = useState<FormKind | "">("");

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Center</CardTitle>
          <CardDescription>
            Please select the type of feedback you would like to provide for <em>Geofast: Battle of Nations</em>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <QuietSelect
            value={kind}
            onValueChange={(v) => setKind(v as FormKind)}
            options={FEEDBACK_KINDS}
            placeholder="Select feedback type"
            className="w-full md:w-[300px]"
          />
          <p className="text-sm text-muted-foreground">
            Reporting a player or something that happened in the game?{" "}
            <Link to="/report" className="font-medium text-primary hover:underline">
              Report a player
            </Link>
            .
          </p>
        </CardContent>
      </Card>

      {kind && (
        <div className="mt-6">
          <InboxForm key={kind} kind={kind} />
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
