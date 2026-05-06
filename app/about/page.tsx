import { AboutHero } from '@/components/about/about-hero'
import { Mission } from '@/components/about/mission'
import { Values } from '@/components/about/values'
import { Team } from '@/components/about/team'
import { FinalCTA } from '@/components/sections/final-cta'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <FinalCTA />
    </>
  )
}
