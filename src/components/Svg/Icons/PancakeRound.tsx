import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img width="64px" height="64px" src="/images/price-token.png" {...props} />;
};

export default Icon;
