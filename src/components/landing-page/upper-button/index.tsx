'use client';

import { useState, useEffect } from 'react';
import { ScrollToTopButton, Img } from './style';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = 900;

      if (scrollPosition > triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTopButton
      className={isVisible ? 'visible' : ''}
      onClick={scrollToTop}
    >
      <Img src={'/assets/svg/scroll-up-arrow.svg'} />
    </ScrollToTopButton>
  );
};

export default ScrollTop;
