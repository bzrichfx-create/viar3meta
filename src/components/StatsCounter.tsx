import { useEffect, useRef, useState } from 'react';
import { Award, Users, Wrench, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, target: 1000, suffix: '+', label: 'Unit Terjual' },
  { icon: Award, target: 15, suffix: '+ Thn', label: 'Pengalaman' },
  { icon: Wrench, target: 50, suffix: '+', label: 'Teknisi Ahli' },
  { icon: MapPin, target: 12, suffix: '+', label: 'Cabang Layanan' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.floor(target * eased));
            if (t < 1) requestAnimationFrame(step);
            else setVal(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val.toLocaleString('id-ID')}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0054A6] to-[#003875] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-14 h-14 mx-auto mb-3 bg-[#FF6B00] rounded-2xl flex items-center justify-center shadow-lg">
                <s.icon className="w-7 h-7" />
              </div>
              <div className="font-heading font-black text-3xl lg:text-5xl mb-1">
                <CountUp target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-sm lg:text-base text-blue-100 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
