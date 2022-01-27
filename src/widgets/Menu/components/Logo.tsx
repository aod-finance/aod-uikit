import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { LogoIcon as LogoWithText, ChevronLeft, ChevronRight, HamburgerCloseIcon, HamburgerIcon } from "../icons";
import MenuButton from "./MenuButton";
import { useMatchBreakpoints } from "../../../hooks";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link) <{ isPushed: boolean }>`
  display: flex;
  align-items: center;

  & > div {
    margin-left: 26px;
    margin-top: 24px;

    ${({ theme }) => theme.mediaQueries.nav} {
      margin-left: ${({isPushed}) => isPushed ? '60px' : '6px'};
    }
  }

  .mobile-icon {
    width: ${({ isPushed }) => isPushed ? '90px' : '50px'};
    height: auto;

    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }

  .desktop-icon {
    width: ${({ isPushed }) => isPushed ? '90px' : '50px'};
    height: auto;
    display: none;

    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const StyledMenuButton = styled(MenuButton)`
  position: absolute;
  left: ${({ isMobile, isPushed }) => {
    switch (isMobile) {
      case true:
        return "20px";
      case false:
        return isPushed ? "240.2px" : "56.2px";
      default:
        break;
    }
    return "";
  }};
  top: ${({ isMobile }) => {
    switch (isMobile) {
      case true:
        return "17px";
      case false:
        return "320px";
      default:
        break;
    }
    return "";
  }};
  padding: ${({ isMobile }) => {
    switch (isMobile) {
      case true:
        return 0;
      case false:
        return "50px 5px";
      default:
        break;
    }
    return "";
  }};
  border-right: 1px solid #7c5d1a;
  border-top: 1px solid #7c5d1a;
  border-bottom: 1px solid #7c5d1a;
  background-image: none;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border: ${({ isMobile }) => (isMobile ? "none" : "")};
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoWithText className="desktop-icon" isDark={isDark} isPushed={isPushed} />
      <LogoWithText className="mobile-icon" isDark={isDark} isPushed={isPushed} />
    </>
  );

  const { isXl, isNav } = useMatchBreakpoints();
  const isMobile = isXl === false;

  return !isMobile ? (
    <Flex alignItems="center">
      <StyledMenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px" isMobile={isMobile} isPushed={isPushed}>
        {isPushed ? <ChevronLeft width="24px" color="textSubtle" /> : <ChevronRight width="24px" color="textSubtle" />}
      </StyledMenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} isPushed={isPushed} aria-label="Baker home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} isPushed={isPushed} aria-label="Baker home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  ) : (
    <Flex>
      <StyledMenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px" isMobile={isMobile} isPushed={isPushed}>
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </StyledMenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} isPushed={isPushed} aria-label="Baker home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} isPushed={isPushed} aria-label="Baker home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
