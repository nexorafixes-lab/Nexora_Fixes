import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function SeoPage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="SEO And Organic Growth That"
        highlight="Compounds Over Time"
        description="Nexora Fixes improves search visibility through SEO planning, on-page optimization, technical structure, and growth-focused content. We help your brand become easier to find, trust, and choose."
        backgroundImage="/assets/services/service_7.png"
      />
      <ServiceWhyChoose
        title="Organic Growth Built Around Search Intent And Trust"
        description="SEO works best when the technical structure, content, and user experience all support the same goal. Nexora helps your brand become easier to discover, understand, and choose."
        points={[
          "Keyword and search intent planning for the right audience",
          "On-page optimization for titles, structure, content, and metadata",
          "Technical SEO improvements that help pages perform better",
          "Content direction that supports authority and long-term visibility",
          "Organic growth tracking focused on meaningful business outcomes",
        ]}
      />
            <CTAForm/>
      
    </main>
  );
}
