import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const Text = styled.text`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
`;

const Tspan = styled.tspan`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
  letter-spacing: 0em;
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface LogoProps extends SvgProps {
  isDark: boolean;
  isPushed: boolean;
}

// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
const Logo: React.FC<LogoProps> = ({ isDark, isPushed, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#432918";
  return (
    <IconContainer>
      <img {...props} src="/images/logo.png" alt="AOD logo" width="512" height="512" />
      {/* {isPushed
        ? <img {...props} src="/images/logo-desktop.png" alt="Bakerswap logo" width="628" height="258" />
        : <img {...props} src="/images/logo-mobile.png" alt="Bakerswap logo" width="256" height="256" />} */}

      {/* {isPushed ? (
        <span className="desktop-icon" style={{ color: "#52D784", marginLeft: "30px", fontSize: "20px" }}>
          Potion
          <span style={{ color: "#60D5DC" }}>Swap</span>
        </span>
      ) : (
        <></>
      )} */}
    </IconContainer>
  );
};

export default Logo;
