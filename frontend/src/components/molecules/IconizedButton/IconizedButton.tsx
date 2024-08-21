import React from "react";
import { Button, ButtonVariant, ButtonStyle } from "@atoms/button";
import { Icon } from "@atoms/icon";
import classNames from "classnames";
import styles from "./IconizedButton.module.scss";

interface IconizedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconSize?: number;
  iconColor?: string;
  iconStroke?: string;
  variant: ButtonVariant;
  styleType: ButtonStyle;
  iconProps?: React.SVGProps<SVGSVGElement>; // Añadimos esta propiedad para pasar todas las propiedades del ícono
}

const IconizedButton: React.FC<IconizedButtonProps> = ({
  icon,
  iconSize,
  iconColor,
  iconStroke,
  variant,
  styleType,
  children,
  className,
  iconProps, // Desestructuramos iconProps
  ...props
}) => {
  return (
    <Button
      variant={variant}
      styleType={styleType}
      className={classNames(styles.iconizedButton, className)}
      {...props}
    >
      <Icon
        svg={icon}
        size={iconSize}
        color={iconColor}
        stroke={iconStroke}
        className={styles.icon}
        {...iconProps}
      />
      {children}
    </Button>
  );
};

export default IconizedButton;
