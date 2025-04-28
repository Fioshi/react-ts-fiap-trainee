import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 414px) {
    height: 60vh;
    justify-content: end;
  }

  @media (max-width: 375px) {
    height: 55vh;
  }
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

  @media (max-width: 1024px) {
    margin-left: 10rem;
  }

  @media (max-width: 768px) {
    margin-left: 5rem;
  }

  @media (max-width: 414px) {
    margin-left: 0;
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-family: 'Gotham-Bold', sans-serif;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 414px) {
    font-size: 4rem;
  }

  @media (max-width: 375px) {
    font-size: 3.5rem;
  }
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

  @media (max-width: 1024px) {
    width: 60rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
  }

  @media (max-width: 414px) {
    width: 100%;
    font-size: 1.6rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
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

  @media (max-width: 768px) {
    bottom: 20px;
  }

  @media (max-width: 414px) {
    display: none;
  }
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ScrollArrow = styled.img`
  margin-top: 1rem;
  width: 1em;
  height: 1em;
  border: 1px solid var(--pastel-blue);
  border-radius: 50%;
  padding: 1em;
`;
