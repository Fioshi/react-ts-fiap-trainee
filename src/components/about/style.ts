import { styled } from "styled-components";

export const SectionMain = styled.section`
  height: 100vh;
  font-family: 'Gotham', sans-serif;
  background: #f7f7f7;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  opacity: 0;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 414px) {
    height: 100vh;
  }

  @media (max-width: 375px) {
    padding: 1.5rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 8rem;
  line-height: 100%;
  margin-left: 3em;
  text-align: left;
  align-self: baseline;
  width: 81.7rem;

  @media (max-width: 1024px) {
    margin-top: 10rem;
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    width: 60%;
    margin-left: 0;
  }

  @media (max-width: 414px) {
    font-size: 3rem;
  }

  @media (max-width: 375px) {
    font-size: 2.8rem;
  }
`;

export const FlexContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SectionImage = styled.div`
  flex: 1;
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SectionText = styled.div`
  flex: 1;
  max-width: 30vw;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-family: 'Gotham', sans-serif;
  color: var(--davys-grey);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 414px) {
    font-size: 1.6rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  cursor: pointer;
  
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  figcaption {
    font-size: 1.2rem;
    color: #666;
    margin-top: 0.5rem;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

export const FeatureItem = styled.li`
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-left: 3rem;
  }

  @media (max-width: 414px) {
    font-size: 1.6rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
`;

export const Icon = styled.span`
  color: var(--magenta);
  margin-right: 1rem;
`;

export const FeatureTitle = styled.span`
  color: var(--davys-grey);
  line-height: 1.25rem;
`;

export const SubList = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

export const SubItem = styled.li`
  position: relative;
  margin: 1.5rem 0;
  padding-left: 1rem;
  color: var(--magenta);
  line-height: 3.5rem;
  font-size: 1.6rem;

  &::before {
    content: '-';
    color: var(--magenta);
    position: absolute;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.8rem;
  }

  @media (max-width: 414px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: 0;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;
