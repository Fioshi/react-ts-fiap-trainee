import { gsap } from 'gsap';

export function educationAnimation(section: HTMLElement) {
  const children = section.querySelectorAll('h2, p, figure, ul');

  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );

  gsap.from(children, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

export function modalOpenAnimation(modal: HTMLDivElement) {
  gsap.to(modal, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  });
}

export function modalCloseAnimation(modal: HTMLDivElement, onComplete: () => void) {
  gsap.to(modal, {
    opacity: 0,
    duration: 0.5,
    onComplete,
  });
}
