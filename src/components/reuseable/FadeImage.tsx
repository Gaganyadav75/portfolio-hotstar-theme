import { ReactNode, useEffect, useState } from 'react';

interface FadeImageProps {
  src: string;
  className?: string;
  duration?: number; // in ms
  children?: ReactNode;
}

export const FadeImage: React.FC<FadeImageProps> = ({
  src,
  className = '',
  duration = 700,
  children
}) => {
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 20); // small delay to trigger transition
    return () => setVisible(false); // triggers fade out on unmount
  }, []);

  return (
    <div className={`absolute h-svh w-full overflow-hidden ${className}`}>
      <div
        style={{
          backgroundImage: `url(${src})`,
          transition: `opacity ${duration}ms ease-in-out`,
          opacity: visible ? 1 : 0
        }}
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
      />
      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
};
