import { ButtonHTMLAttributes, FunctionComponent, SVGProps } from "react";

export type AlignIcon = "left" | "right";

export interface IconizedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconSize?: number;
  iconColor?: string;
  iconStroke?: string;
  iconProps?: SVGProps<SVGSVGElement>;
  alignIcon?: AlignIcon;
}
