import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.648 17.166c-.976-.203-1.68-.348-2.034.557-.109.277.012.702.137 1.14.314 1.104.652 2.291-2.61 1.395C2.665 18.48.987 10.088 5.265 6.123c4.688-4.342 11.42-2.974 14.305 1.035 2.742 3.81 1.413 8.737-2.893 10.037-1.175.354-2.2.142-3.029-.03zm-3.281-8.912a1.792 1.792 0 11-3.584 0 1.792 1.792 0 013.583 0zm-2.281 4.778a1.792 1.792 0 11-3.584 0 1.792 1.792 0 013.584 0zm5.919-2.986a1.792 1.792 0 100-3.584 1.792 1.792 0 000 3.584z"
      />
    </Svg>
  );
};

export default Icon;
