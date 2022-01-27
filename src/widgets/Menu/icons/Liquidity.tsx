import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M5.485 12.52A6.625 6.625 0 018.278 8.14a4.615 4.615 0 01-.395-1.042 7.725 7.725 0 00-3.51 5.545 4.34 4.34 0 011.02-.121h.092zm13.104 0c.384.01.759.071 1.123.172a7.748 7.748 0 00-3.299-5.454c-.1.358-.246.702-.435 1.022a6.695 6.695 0 012.61 4.26zm-3.633 7.063c-.91.446-1.91.678-2.924.678a6.492 6.492 0 01-3.066-.759c-.222.304-.48.58-.77.82a7.716 7.716 0 007.55.07 4.27 4.27 0 01-.79-.809zM8.683 5.922a3.534 3.534 0 107.07 0 3.534 3.534 0 00-7.07 0zM1.792 16.95a3.535 3.535 0 107.07 0 3.535 3.535 0 00-7.07 0zM14.93 16.95a3.534 3.534 0 107.068 0 3.534 3.534 0 00-7.067 0z"
      />
    </Svg>
  );
};

export default Icon;
