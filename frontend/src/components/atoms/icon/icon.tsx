import React from "react";
import { IconProps } from "./types";
import styles from "./icon.module.scss";

const Icon: React.FC<IconProps> = ({
  svg: Svg,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <Svg
      className={styles.icon}
      width={size}
      height={size}
      fill={color}
      {...props}
    />
  );
};

export default Icon;
