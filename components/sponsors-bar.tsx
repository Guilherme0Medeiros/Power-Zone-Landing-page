'use client'

import { Beaker, Droplets, Shirt, Zap } from 'lucide-react'

const sponsors = [
  { name: 'PowerFuel', Icon: Zap },
  { name: 'FlexWear', Icon: Shirt },
  { name: 'HydroPlus', Icon: Droplets },
  { name: 'IronLab', Icon: Beaker },
]

export function SponsorsBar() {
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors]

  return (
    <section className="border-y border-border/40 bg-primary py-6 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-scroll gap-8 md:gap-12">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex shrink-0 items-center gap-2 text-primary-foreground px-4"
            >
              <sponsor.Icon className="h-5 w-5 md:h-6 md:w-6" />
              <span className="font-display text-base font-bold tracking-tight whitespace-nowrap md:text-lg">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-scroll gap-8 md:gap-12" aria-hidden="true">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-duplicate-${index}`}
              className="flex shrink-0 items-center gap-2 text-primary-foreground px-4"
            >
              <sponsor.Icon className="h-5 w-5 md:h-6 md:w-6" />
              <span className="font-display text-base font-bold tracking-tight whitespace-nowrap md:text-lg">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
