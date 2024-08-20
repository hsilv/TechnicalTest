import React from "react";
import { InputProps } from "./types";
import styles from "./input.module.scss";

const Input: React.FC<InputProps> = ({ variant, styleType, ...props }) => {
  const className = `${styles.default} ${styles[variant]} ${styles[styleType]}`;
  return <input className={className} {...props} />;
};

export default Input;
