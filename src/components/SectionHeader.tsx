export default function SectionHeader({
  eyebrow,
  title,
  desc,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : ''} reveal-on-scroll`}>
      {eyebrow && (
        <div className="inline-block px-4 py-1.5 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className={`font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight ${light ? 'text-white' : 'text-[#1A1A1A]'}`}>
        {title}
      </h2>
      {desc && <p className={`text-base lg:text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>{desc}</p>}
    </div>
  );
}
