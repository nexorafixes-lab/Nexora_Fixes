import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function SocialMediaManagementPage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="Social Media Management That"
        highlight="Keeps Your Brand Active"
        description="We help your brand show up consistently with planned content, polished visuals, captions, scheduling, and performance review. Your social channels stay aligned, active, and built around audience trust."
        backgroundImage="/assets/services/service_2.png"
      />
      <ServiceWhyChoose
        title="Consistent Social Presence Without Random Posting"
        description="Your social channels should feel active, intentional, and aligned with your business goals. Nexora handles planning, content direction, and review so your brand keeps showing up with purpose."
        points={[
          "Monthly content planning around offers, awareness, and trust",
          "Polished post designs, captions, and publishing structure",
          "Brand voice consistency across key social platforms",
          "Content themes that support authority and audience engagement",
          "Performance review to refine what your audience responds to",
        ]}
      />
            <CTAForm/>
      
    </main>
  );
}
