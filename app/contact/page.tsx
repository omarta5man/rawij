import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contact-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
