import MainServices from '@/components/services/MainServices'
import OurWork from '@/components/services/OurWork'
import ServicesHero from '@/components/services/ServicesHero'
import StorySection from '@/components/services/StorySection'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServicesHero></ServicesHero>
        <MainServices></MainServices>
        <OurWork></OurWork>
        <StorySection></StorySection>
    </div>
  )
}
