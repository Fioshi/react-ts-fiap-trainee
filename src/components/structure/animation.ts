// animation.ts
import { gsap } from "gsap";

export function animateAccordionContent(content: HTMLDivElement, isOpen: boolean) {
  gsap.to(content, {
    height: isOpen ? content.scrollHeight : 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

export function animateBackground(page: HTMLDivElement) {
  gsap.to(page, {
    backgroundPosition: "400% 0%",
    ease: "linear",
    duration: 30,
    repeat: -1,
  });
}
