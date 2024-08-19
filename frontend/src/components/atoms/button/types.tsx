export type ButtonType = "button" | "submit" | "reset";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "warning"
  | "success";

export type ButtonStyle = "solid" | "outline" | "text";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  styleType: ButtonStyle;
}
