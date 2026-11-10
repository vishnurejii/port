import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: React.ReactNode;
  /** entrance direction */
  variant?: RevealVariant;
  /** stagger delay in ms */
  delay?: number;
  className?: string;
  /** render as a different element (default div) */
  as?: keyof JSX.IntrinsicElements;
}

const variantClass: Record<RevealVariant, string> = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

/**
 * Lightweight scroll-reveal wrapper.
 * Adds `.reveal` + `.reveal-visible` via IntersectionObserver so children
 * animate in once when they enter the viewport. Honors prefers-reduced-motion
 * through the CSS rules in index.css.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass[variant]} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
