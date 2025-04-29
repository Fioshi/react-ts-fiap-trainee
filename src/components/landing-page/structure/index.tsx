'use client';

import { useState, useRef, useEffect } from "react";
import { animateAccordionContent } from "./animation";
import { AccordionContainer, AccordionHeader, Icon, AccordionContent, PageContainer, Title } from "./style";

const estruturaItems = [
  { title: "CONEXÃO O MERCADO DE TRABALHO", content: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais." },
  { title: "APRENDIZADO IMERSIVO", content: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira." },
  { title: "ENSINO PERSONALIZADO", content: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor." },
  { title: "INOVAÇÃO E TRANSFORMAÇÃO", content: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia." },
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
        <Icon src={isOpen ? 'assets/svg/cursor-close.svg' : 'assets/svg/cursor-open.svg'} alt="Ícone do Accordion" />
      </AccordionHeader>
      <AccordionContent ref={contentRef}>
        <p>{content}</p>
      </AccordionContent>
    </AccordionContainer>
  );
};

const StructureAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <PageContainer >
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
