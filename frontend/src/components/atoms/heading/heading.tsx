import React from "react";
import classNames from "classnames";
import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = level;
  return <Tag className={classNames(className)}>{children}</Tag>;
};

export default Heading;
