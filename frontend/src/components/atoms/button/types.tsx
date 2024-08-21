export type ButtonType = "button" | "submit" | "reset";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "warning"
  | "success"
  | "icon";

export type ButtonStyle = "solid" | "outline" | "text" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  styleType: ButtonStyle;
}
