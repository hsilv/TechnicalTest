export type InputType = "text" | "password" | "email" | "number";

export type InputVariant = "primary" | "secondary" | "danger" | "success";

export type InputStyle = "filled" | "outlined";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  styleType: InputStyle;
}
