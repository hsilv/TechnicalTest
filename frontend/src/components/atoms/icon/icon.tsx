import React from "react";
import classNames from "classnames";
import { IconProps } from "./types";
import styles from "./icon.module.scss";

const Icon: React.FC<IconProps> = ({
  svg: Svg,
  size = 24,
  color = "currentColor",
  className: customClassName,
  ...props
}) => {
  const className = classNames(styles.icon, customClassName);

  return (
    <Svg
      className={className}
      width={size}
      height={size}
      fill={color}
      {...props}
    />
  );
};

export default Icon;
