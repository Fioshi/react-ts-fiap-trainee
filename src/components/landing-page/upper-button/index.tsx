'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ScrollToTopButton, Img } from './style';

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <ScrollToTopButton 
    onClick={scrollToTop}>
      <Img src={'/assets/svg/scroll-up-arrow.svg'}/>
    </ScrollToTopButton>
  );
}

export default ScrollTop