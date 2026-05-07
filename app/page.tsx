import { Hero } from '@/components/sections/hero'
import { MarqueeStrip } from '@/components/sections/marquee-strip'
import { ServicesOverview } from '@/components/sections/services-overview'
import { RawijDeconstructed } from '@/components/sections/rawij-deconstructed'
import { WhyRawij } from '@/components/sections/why-rawij'
import { Pricing } from '@/components/sections/pricing'
import { Portfolio } from '@/components/sections/portfolio'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesOverview />
      <RawijDeconstructed />
      <WhyRawij />
      <Pricing />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
