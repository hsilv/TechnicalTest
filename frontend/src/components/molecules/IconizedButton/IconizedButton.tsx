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
  alignIcon = "left",
  ...props
}) => {
  const hasChildren = React.Children.count(children) > 0;

  return (
    <Button
      variant="icon"
      styleType="icon"
      className={classNames(
        styles.iconizedButton,
        className,
        { [styles.right]: hasChildren && alignIcon === "right" },
        { [styles.left]: hasChildren && alignIcon === "left" }
      )}
      {...props}
    >
      <Icon
        svg={icon}
        size={iconSize}
        color={iconColor}
        stroke={iconStroke}
        className={classNames(
          styles.icon,
          { [styles.right]: hasChildren && alignIcon === "right" },
          { [styles.left]: hasChildren && alignIcon === "left" },
          iconProps?.className
        )}
        {...iconProps}
      />
      {children}
    </Button>
  );
};

export default IconizedButton;
