import { ServicesHero } from '@/components/services/services-hero'
import { ServicesList } from '@/components/services/services-list'
import { FinalCTA } from '@/components/sections/final-cta'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <FinalCTA />
    </>
  )
}
