import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animation, deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      animation(element);
    }, element);

    return () => ctx.revert();
  }, deps);

  return ref;
};

export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

export const staggerCards = (elements) => {
  gsap.fromTo(elements,
    { opacity: 0, y: 80, rotationY: 15 },
    {
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
};