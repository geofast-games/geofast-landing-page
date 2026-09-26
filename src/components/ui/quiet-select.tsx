import { useRef } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface QuietSelectOption {
  value: string;
  label: string;
}

// A Select whose trigger shows a focus ring only for keyboard users. Radix
// moves focus back to the trigger when the menu closes, so after a mouse
// pick the trigger sat there outlined in green (the same thing the language
// picker on the legal pages had). Pointer opens skip that refocus; keyboard
// opens keep it, so tabbing still works as expected.
export const QuietSelect = ({
  id,
  value,
  onValueChange,
  options,
  placeholder = "Select…",
  required,
  className,
  contentClassName,
}: {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: QuietSelectOption[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  contentClassName?: string;
}) => {
  const openedByPointer = useRef(false);
  return (
    <Select value={value} onValueChange={onValueChange} required={required}>
      <SelectTrigger
        id={id}
        className={cn(
          "focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        onPointerDown={() => (openedByPointer.current = true)}
        onKeyDown={() => (openedByPointer.current = false)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        className={contentClassName}
        onCloseAutoFocus={(event) => {
          if (openedByPointer.current) event.preventDefault();
        }}
      >
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
