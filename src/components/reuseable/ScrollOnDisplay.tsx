// components/SlideInOnScroll.tsx
import React, { useEffect, useRef, useState } from 'react';

interface SlideInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideInOnScroll: React.FC<SlideInOnScrollProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};
