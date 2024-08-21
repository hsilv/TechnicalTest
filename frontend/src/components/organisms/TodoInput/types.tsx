export type InputTypes = "add" | "edit";

export interface TodoInputProps {
  onSubmit: (text: string) => void;
  className?: string;
  type?: InputTypes;
  defaultValue?: string;
}
