import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function WebsiteAndEcommercePage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="Websites And E-Commerce That"
        highlight="Convert With Clarity"
        description="We design and build websites, landing pages, and ecommerce experiences that feel premium, load fast, and guide visitors toward action. Every page is structured around trust, usability, and measurable conversion."
        backgroundImage="/assets/services/service_6.png"
      />
      <ServiceWhyChoose
        title="Websites And Stores Designed To Convert, Not Just Exist"
        description="Your website should look sharp, load fast, and make the next step obvious. Nexora creates digital experiences that combine brand trust, technical quality, and conversion-focused structure."
        points={[
          "Conversion-focused page structure and user journey planning",
          "Responsive builds that feel polished across desktop and mobile",
          "Website and ecommerce flows shaped around buying intent",
          "Fast, clean implementation with maintainable foundations",
          "Clear CTAs, trust signals, and content sections that support action",
        ]}
      />
            <CTAForm/>
      
    </main>
  );
}
