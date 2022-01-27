import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <script />
      <path
        d="M8.9 4.775a4.028 4.028 0 014.043 4.027v4.045H8.9a4.028 4.028 0 01-4.027-4.045A4.012 4.012 0 018.9 4.775zM4.979 19.073a4.044 4.044 0 014.044-4.045h4.027v4.045A4.035 4.035 0 019.023 23.1c-2.235 0-4.044-1.81-4.044-4.027zM19.24 4.775a4.012 4.012 0 00-4.026 4.027v4.045h4.027a4.042 4.042 0 004.044-4.045 4.028 4.028 0 00-4.044-4.027zM23.161 19.073a4.029 4.029 0 00-4.027-4.045H15.09v4.045c0 2.217 1.81 4.027 4.045 4.027a4.024 4.024 0 004.027-4.027z"
      />
    </Svg>
  );
};

export default Icon;
