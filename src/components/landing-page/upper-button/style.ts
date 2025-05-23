import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  background-color: transparent;
  border: solid 2px var(--magenta);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;


export const Img = styled.img`
  width: 3rem;
  height: 3rem;
` 