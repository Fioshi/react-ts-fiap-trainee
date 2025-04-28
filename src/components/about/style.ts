import { styled } from "styled-components";

export const SectionMain = styled.section`
  height: 90vh;
  font-family: 'Gotham', sans-serif;
  color: #333;
  background: #f7f7f7;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  opacity: 0;
`;

export const Title = styled.h2`
  font-size: 8rem;
  line-height: 100%;
  margin-left: 3em;
  text-align: left;
  align-self: baseline;
  width: 817px;
`;

export const FlexContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const SectionImage = styled.div`

  flex: 1;
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SectionText = styled.div`
  flex: 1;
  max-width: 30vw;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--davys-grey);
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
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.5rem;
    text-align: center;
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
