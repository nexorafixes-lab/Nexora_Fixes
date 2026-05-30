import Hero from '@/components/Contact/Hero'
import CTAForm from '@/components/Home/CTAForm'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero
        badge="Let's build your next growth move"
        title="Start The Conversation With"
        highlight="Nexora Fixes"
        description="Tell us what you are building, fixing, or scaling. We'll help you map the clearest next step."
      />
      <CTAForm />
    </div>
  )
}

export default page
