import styled from "styled-components";

export const PageContainer = styled.div`
  background: linear-gradient(270deg, var(--deep-blue), var(--black),var(--deep-blue));
  background-size: 400% 400%;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Gotham', sans-serif;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 8rem;
  line-height: 100%;
  margin-left: 3em;
  text-align: left;
  align-self: baseline;
  width: 817px;
  color: var(--pastel-blue);

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
    font-size: 4rem;
  }

  @media (max-width: 375px) {
    font-size: 2.8rem;
  }
`;

export const AccordionContainer = styled.div<{ isLast: boolean, isOpen: boolean }>`
  border-top: ${(props) => (props.isOpen ? '1px solid var(--magenta)' : '1px solid var(--davys-grey)')};
  border-bottom: ${(props) => (props.isLast ? '1px solid #4f5565' : 'none')};
  padding: 1rem;
  width: 66vw;

  @media (max-width: 1024px) {
    width: 95%;
  }
`;

export const AccordionHeader = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: var(--pastel-blue);
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Gotham-bold', sans-serif;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 3rem 0;
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  p {
    padding: 1rem 0;
    color: #b0b8c5;
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;
