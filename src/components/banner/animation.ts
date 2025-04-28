// animation.ts
import { gsap } from 'gsap';
import { RefObject } from 'react';

export function bannerAnimation(
  outlinedRef: RefObject<HTMLSpanElement | null>,
  highlightRef: RefObject<HTMLSpanElement | null>,
  descRef: RefObject<HTMLParagraphElement | null>,
  scrollRef: RefObject<HTMLDivElement | null>
) {
  const tl = gsap.timeline({ defs: { duration: 1.5, ease: 'power3.out' } });

  if (
    outlinedRef.current &&
    highlightRef.current &&
    descRef.current &&
    scrollRef.current
  ) {
    tl.from(outlinedRef.current, { x: -100, opacity: 0 })
      .from(highlightRef.current, { x: -100, opacity: 0 }, '-=0.5')
      .from(descRef.current, { x: -100, opacity: 0, duration: 1 }, '-=0.4')
      .from(scrollRef.current, { y: 20, opacity: 0, duration: 1 }, '-=0.6');
  }
}
