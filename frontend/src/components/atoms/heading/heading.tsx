import React from "react";
import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const Tag = level;
  return <Tag>{children}</Tag>;
};

export default Heading;
