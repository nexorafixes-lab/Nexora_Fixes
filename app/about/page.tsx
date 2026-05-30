import Hero from '@/components/Contact/Hero'
import MissionVisionValues from '@/components/About/MissionVisionValues'
import OurTeam from '@/components/About/OurTeam'
import Testimonials from '@/components/Home/Testimonials'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero
        badge="Built for brands that want sharper growth"
        title="Meet The Team Behind"
        highlight="Nexora Fixes"
        description="We blend strategy, creative direction, development, and performance marketing to help businesses build cleaner systems and stronger digital growth."
      />
      <MissionVisionValues />
      <OurTeam />
      <Testimonials />
    </div>
  )
}

export default page
