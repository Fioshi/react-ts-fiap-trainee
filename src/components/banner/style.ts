import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 0.8) 35%,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('assets/imgs/header.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  margin-left: 26rem;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-family: 'Gotham', sans-serif;
`;

export const OutlinedDark = styled.span`
  display: block;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px var(--magenta);
  color: transparent;
`;

export const Highlight = styled.span`
  display: block;
  color: var(--pastel-blue);
`;

export const Description = styled.p`
  width: 71rem;
  margin-top: 2rem;
  color: var(--pastel-blue);
  font-size: 2rem;
  line-height: 1.4;
  font-family: 'Gotham', sans-serif;
`;

export const ScrollDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
  cursor: pointer;
  text-align: center;
  align-items: center;
  z-index: 2;
`;

export const Scroll = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  font-family: 'Gotham', sans-serif;
  font-size: 12px;
  line-height: 1;
  color: var(--pastel-blue);
  margin: 0 0 8px;
`;

export const ScrollArrow = styled.img`
  margin-top: 1rem;
  width: 1em;
  height: 1em;
  border: 1px solid var(--pastel-blue);
  border-radius: 50%;
  padding: 1em;
`;