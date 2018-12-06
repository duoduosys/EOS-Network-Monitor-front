import styled, { keyframes } from 'styled-components';

const link = styled.a`
  text-decoration: none;
`;

export const Container = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  padding: 20px 0;
  position: relative;

  @media (max-width: 992px) {
    width: 85vw;
  }

  @media (max-width: 768px) {
    padding: 0 0 5px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuButton = styled.svg`
  display: none;
  width: 15px;
  height: 15px;
  margin: 5px 10px 0 0;
  cursor: pointer;
  & path {
    fill: #747474;
  }

  &:hover path {
    fill: #548afd;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Headlink = link.extend`
  padding-bottom: 10px;
  color: #028012;
  font-size: 38px;
  line-height: 50px;
  font-weight: 500;

  text-align: center;
  &:hover {
    color: #015a0c;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: normal;
    padding: 5px 0 0 0;
  }
`;

export const LanguageSwitcher = styled.span`
  padding-left: 8px;
  padding-right: 8px;
  border-right: 1px solid rgba(0, 128, 0, 0.7);
  cursor: pointer;
  &:active {
    color: blue;
  }
  &:last-child {
    border: 0;
  }

  @media (max-width: 768px) {
    border-right-color: white;
  }
`;

export const LogoImage = styled.img`
  width: 65px;
  margin-right: 13px;
  // cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px;
    height: 40px;
    width: 40px;
  }
`;

// Menu animation
const blurBgAnimation = keyframes`
  from { background-color: rgb(0, 0, 0, 0); }
  to { background-color: rgb(0, 0, 0, 0.5); }
`;

const navMenuAppear = keyframes`
  from { left: -250px; }
  to { left: 0; }
`;

export const BlurBG = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  filter: blur(5px);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${blurBgAnimation} 0.3s;
`;

export const NavMenu = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 15px;

  @media (max-width: 768px) {
    display: ${({ isNavMenuActive }) => (isNavMenuActive ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    padding-left: 30px;
    z-index: 2;
    background-color: rgb(44, 168, 78);

    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    animation: ${navMenuAppear} 0.3s;
  }
`;

export const BlueLink = link.extend`
  cursor: pointer;
  color: #007bff;

  &:hover {
    text-decoration: underline;
    color: #005dc1;
  }

  @media (max-width: 768px) {
    color: #fff;
    padding: 10px 0;

    &:active {
      color: #005dc1;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Border = styled.span`
  padding: 0 15px;
  color: #007bff;
  &::after {
    content: '|';
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SwitcherWrapper = styled.div`
  position: absolute;
  color: rgba(0, 128, 0, 0.7);
  font-weight: 500;
  right: 0;
  top: 45px;

  @media (max-width: 768px) {
    display: ${({ isNavMenuActive }) => (isNavMenuActive ? 'flex' : 'none')};
    position: fixed;
    top: 25px;
    left: 25px;
    color: white;
    z-index: 3;
    animation: ${navMenuAppear} 0.3s;
  }
`;

// Svg
export const SvgDownArrow = styled.svg`
  width: 12px;
  height: 12px;
  ${({ isArrowClicked }) =>
    isArrowClicked && {
      transform: 'rotate(180deg)',
    }};
`;

export const SvgExternalLink = styled.svg`
  cursor: pointer;
  width: 12px;
  height: 12px;

  & path {
    fill: #007bff;
  }

  &:hover path {
    fill: #005dc1;
  }
`;
