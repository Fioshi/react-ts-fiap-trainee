'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { updateProgressBar } from './animation';
import { HeaderContainer, LogoText, ProgressBar } from './style';

const Header = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    const handleScroll = () => updateProgressBar(progressBarRef.current!);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <LogoText src="/assets/svg/logo.svg" alt="Logo" />
      </HeaderContainer>
      <ProgressBar ref={progressBarRef} />
    </>
  );
};

export default Header;
