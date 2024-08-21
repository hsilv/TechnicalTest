import React from "react";
import classNames from "classnames";
import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({
  variant,
  styleType,
  children,
  className: customClassName,
  ...props
}) => {
  const className = classNames(
    styles.default,
    styles.button,
    styles[variant],
    styles[styleType],
    customClassName
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
