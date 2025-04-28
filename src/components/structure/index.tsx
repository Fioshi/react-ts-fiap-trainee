'use client';

import { useState, useRef, useEffect } from "react";
import { animateAccordionContent, animateBackground } from "./animation";
import { AccordionContainer, AccordionHeader, Icon, AccordionContent, PageContainer, Title } from "./style";

const estruturaItems = [
  { title: "CONEXÃO O MERCADO DE TRABALHO", content: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. [...]" },
  { title: "APRENDIZADO IMERSIVO", content: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica. [...]" },
  { title: "ENSINO PERSONALIZADO", content: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. [...]" },
  { title: "INOVAÇÃO E TRANSFORMAÇÃO", content: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. [...]" },
];

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}

const Accordion = ({ title, content, isOpen, onToggle, isLast }: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      animateAccordionContent(contentRef.current, isOpen);
    }
  }, [isOpen]);

  return (
    <AccordionContainer isLast={isLast} isOpen={isOpen}>
      <AccordionHeader onClick={onToggle}>
        {title}
        <Icon src={isOpen ? 'assets/svg/cursor-open.svg' : 'assets/svg/cursor-close.svg'} alt="Ícone do Accordion" />
      </AccordionHeader>
      <AccordionContent ref={contentRef}>
        <p>{content}</p>
      </AccordionContent>
    </AccordionContainer>
  );
};

const StructureAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();
  const pageRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    if (pageRef.current) {
      animateBackground(pageRef.current);
    }
  }, []);

  return (
    <PageContainer ref={pageRef}>
      <Title>NOSSA ESTRUTURA</Title>
      {estruturaItems.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          isLast={index === estruturaItems.length - 1}
        />
      ))}
    </PageContainer>
  );
};

export default StructureAccordion;
