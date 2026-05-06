import { Hero } from '@/components/sections/hero'
import { ServicesOverview } from '@/components/sections/services-overview'
import { WhyRawij } from '@/components/sections/why-rawij'
import { Portfolio } from '@/components/sections/portfolio'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyRawij />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
