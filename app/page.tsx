import Hero from '@/components/Home/Hero'
import SlidingLogos from '@/components/Home/SlidingLogos'
import ExperienceSection from '@/components/Home/ExperienceSection'
import Services from '@/components/Home/Services'
import TextStrip from '@/components/Home/TextStrip'
import Projects from '@/components/Home/Projects'
import Testimonials from '@/components/Home/Testimonials'
import CTAForm from '@/components/Home/CTAForm'
import FAQs from '@/components/Home/FAQs'

function page() {
  return (
    <main className="flex-1 bg-background">
      <Hero />
      <SlidingLogos />
      <ExperienceSection />
      <Services /> 
      <TextStrip />
      <Projects />
      <Testimonials />
      <FAQs />
      <CTAForm />
    </main>
  )
}

export default page
