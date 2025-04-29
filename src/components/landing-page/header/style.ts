import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--chinese-black);
  position: fixed;
  z-index: 3;
`;

export const LogoText = styled.img`
  letter-spacing: 2px;
  height: 2.5rem;
`;

export const ProgressBar = styled.div`
  position: fixed;
  top: 8rem ; 
  left: 0;
  height: 0.4rem;
  width: 0%;
  background-color: var(--magenta);
  z-index: 2;
  transform-origin: left center;
`;