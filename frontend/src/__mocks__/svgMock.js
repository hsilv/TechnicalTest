import React from "react";

const SvgMock = React.forwardRef((props, ref) => (
  <svg ref={ref} {...props}>
    <rect width="100%" height="100%" fill="gray" />
  </svg>
));

export default SvgMock;
export const ReactComponent = SvgMock;
