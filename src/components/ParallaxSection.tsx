import { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';

export default function ParallaxSection({
  bgImage,
  children,
  height = 'min-h-[600px]',
}: {
  bgImage: string;
  children: ReactNode;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const winH = window.innerHeight;
      // section visible: rect.top in (-rect.height .. winH)
      const progress = (winH - rect.top) / (winH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setOffset((clamped - 0.5) * 80); // -40 to 40 px
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden flex items-center`}>
      <div
        className="absolute inset-0 -top-12 -bottom-12 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `translate3d(0, ${offset}px, 0) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0054A6]/85 via-black/60 to-[#1A1A1A]/80" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {children}
      </div>
    </section>
  );
}
