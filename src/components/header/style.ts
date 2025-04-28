import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: center;
  background: var(--chinese-black);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const LogoText = styled.img`
  letter-spacing: 2px;
  width: 86.15px;
  height: 25.05px;
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