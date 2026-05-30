import Hero from '@/components/Contact/Hero'
import CTAForm from '@/components/Home/CTAForm'
import ServicesProcess from '@/components/Services/ServicesProcess'

function page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero
        badge="Full-Scale Digital Solutions"
        title="From Ads to Ecommerce"
        highlight="We Do It All"
        description="From paid ads and creative systems to websites, stores, and custom software, Nexora Fixes connects every growth channel around clearer results."
      />
      <ServicesProcess />
      <CTAForm/>
    </div>
  )
}

export default page
