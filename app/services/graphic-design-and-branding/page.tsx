import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function GraphicDesignAndBrandingPage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="Graphic Design And Branding That"
        highlight="Makes You Memorable"
        description="Nexora Fixes creates brand visuals that help your business look sharper, more trustworthy, and easier to remember. From logos and identity systems to social creatives and campaign graphics, we design for recognition and action."
        backgroundImage="/assets/services/service_5.png"
      />
      <ServiceWhyChoose
        title="Brand Visuals That Make Your Business Easier To Trust"
        description="Strong design gives people a reason to remember you before they even speak to you. Nexora shapes brand assets that feel consistent, premium, and ready for real marketing use."
        points={[
          "Logo, identity, and visual systems built for recognition",
          "Campaign graphics and social creatives aligned with your brand",
          "Consistent color, typography, and layout direction",
          "Design assets prepared for web, ads, and social platforms",
          "A sharper brand presence that supports trust and conversion",
        ]}
      />
            <CTAForm/>
      
    </main>
  );
}
