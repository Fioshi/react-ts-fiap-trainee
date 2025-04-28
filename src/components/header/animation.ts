// animation.ts
import { gsap } from 'gsap';

export function updateProgressBar(progressBar: HTMLDivElement) {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  gsap.to(progressBar, {
    width: `${progress}%`,
    duration: 0.2,
    ease: 'power1.out',
  });
}
