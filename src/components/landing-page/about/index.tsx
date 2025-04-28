'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { educationAnimation, modalOpenAnimation, modalCloseAnimation } from './animation';
import {
  SectionMain,
  Title,
  FlexContainer,
  SectionImage,
  Paragraph,
  ImageWrapper,
  SectionText,
  FeaturesList,
  FeatureItem,
  Icon,
  FeatureTitle,
  SubList,
  SubItem,
  ModalBackground,
  ModalImage
} from './style';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalCloseAnimation(modalRef.current, () => setIsModalOpen(false));
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      educationAnimation(sectionRef.current);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalOpenAnimation(modalRef.current);
    }
  }, [isModalOpen]);

  return (
    <SectionMain ref={sectionRef} id="about">
      <Title>EDUCAÇÃO E TECH</Title>
      <FlexContainer>
        <SectionImage>
          <Paragraph>
            A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
          </Paragraph>
          <ImageWrapper onClick={handleImageClick}>
            <img src="assets/imgs/fiap-next.jpg" alt="Logotipo da FIAP NEXT" />
            <figcaption>Figura 1 – Logotipo da FIAP NEXT</figcaption>
          </ImageWrapper>
        </SectionImage>

        <SectionText>
          <Paragraph>
            Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:
          </Paragraph>

          <FeaturesList>
            <FeatureItem>
              <Icon>/</Icon>
              <FeatureTitle>Tecnologia e Desenvolvimento</FeatureTitle>
              <SubList>
                <SubItem>Desenvolvimento de Software</SubItem>
                <SubItem>Data Science</SubItem>
                <SubItem>Cibersegurança</SubItem>
                <SubItem>Inteligência Artificial</SubItem>
              </SubList>
            </FeatureItem>
            <FeatureItem>
              <Icon>/</Icon>
              <FeatureTitle>UX/UI, Marketing Digital</FeatureTitle>
            </FeatureItem>
            <FeatureItem>
              <Icon>/</Icon>
              <FeatureTitle>Metodologias e Gestão</FeatureTitle>
            </FeatureItem>
          </FeaturesList>

          <Paragraph>
            Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
          </Paragraph>
        </SectionText>
      </FlexContainer>

      {isModalOpen && (
        <ModalBackground ref={modalRef} onClick={handleCloseModal}>
          <ModalImage src="assets/imgs/fiap-next.jpg" alt="Imagem Ampliada FIAP NEXT" />
        </ModalBackground>
      )}
    </SectionMain>
  );
}

export default EducationSection