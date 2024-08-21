export interface IconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
}
