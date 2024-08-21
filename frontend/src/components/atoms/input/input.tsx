import React from "react";
import { InputProps } from "./types";
import classNames from "classnames";
import styles from "./input.module.scss";

const Input: React.FC<InputProps> = ({
  variant,
  styleType,
  className: customClassName,
  ...props
}) => {
  const className = classNames(
    styles.default,
    styles[variant],
    styles[styleType],
    customClassName
  );
  return <input className={className} {...props} />;
};

export default Input;
