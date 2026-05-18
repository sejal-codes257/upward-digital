import { industries } from '../../data';

export default function IndustryMarquee() {
  const doubled = [...industries, ...industries];
  return (
    <div className="border-y border-white/5 py-5 overflow-hidden bg-charcoal/30">
      <div className="flex animate-marquee whitespace-nowrap gap-0" style={{width:'max-content'}}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="label-text text-white/30 px-8 hover:text-beige transition-colors duration-300">{item}</span>
            <span className="text-beige/20">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
