import React from "react";
import { Button } from "@atoms/button";
import { Icon } from "@atoms/icon";
import classNames from "classnames";
import styles from "./IconizedButton.module.scss";
import { IconizedButtonProps } from "./types";

const IconizedButton: React.FC<IconizedButtonProps> = ({
  icon,
  iconSize,
  iconColor,
  iconStroke,
  children,
  className,
  iconProps,
  ...props
}) => {
  return (
    <Button
      variant="icon"
      styleType="icon"
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
