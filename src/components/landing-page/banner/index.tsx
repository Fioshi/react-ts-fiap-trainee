'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bannerAnimation } from './animation';
import { 
  Container, 
  Background, 
  Content, 
  OutlinedDark, 
  Highlight, 
  Description, 
  ScrollDown, 
  Scroll, 
  ScrollArrow, 
  Title 
} from './style';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const estruturaRef = useRef<HTMLDivElement>(null);
  const outlinedRef = useRef<HTMLSpanElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bannerAnimation(outlinedRef, highlightRef, descRef, scrollRef);
  }, []);

  const handleScroll = () => {
    estruturaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <Background />
      <Content>
        <Title>
          <OutlinedDark ref={outlinedRef}>
            A MAIOR FACULDADE
          </OutlinedDark>
          <Highlight ref={highlightRef}>
            DE TECNOLOGIA
          </Highlight>
        </Title>
        <Description ref={descRef}>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que
          prepara profissionais para o futuro, com um ensino prático, professores atuantes
          no mercado e desafios reais que conectam os alunos às grandes empresas.
        </Description>
      </Content>
      <ScrollDown ref={scrollRef}>
        <Scroll href="#about" onClick={handleScroll}>
          SCROLL DOWN
          <ScrollArrow src="assets/svg/scroll-down-arrow.svg" alt="Seta para baixo" />
        </Scroll>
      </ScrollDown>
    </Container>
  );
}

export default Banner