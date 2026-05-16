import { industriesTicker } from '../../data/siteData'

export default function IndustriesTicker() {
  const doubled = [...industriesTicker, ...industriesTicker]

  return (
    <section className="relative py-10 bg-deep-blue/30 border-y border-white/5 overflow-hidden">
      <div className="flex" style={{ width: 'max-content' }}>
        <div className="animate-ticker flex items-center gap-0" style={{ animation: 'ticker 40s linear infinite' }}>
          {doubled.map((industry, i) => (
            <div key={i} className="flex items-center gap-0 px-8 shrink-0">
              <span className="font-display text-lg font-light text-silver/40 whitespace-nowrap">
                {industry}
              </span>
              <span className="ml-8 w-1 h-1 bg-electric-blue/40 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
