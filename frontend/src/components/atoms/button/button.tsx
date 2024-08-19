import React from "react";
import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({
  variant,
  styleType,
  children,
  ...props
}) => {
  const className = `${styles.default} ${styles.button} ${styles[variant]} ${styles[styleType]}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
