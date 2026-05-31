import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function DigitalMarketingPage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="Digital Marketing That"
        highlight="Turns Attention Into Revenue"
        description="Nexora Fixes builds paid growth systems across Meta Ads, Instagram Ads, and TikTok Ads. We shape offers, audiences, creatives, retargeting, and reporting so every campaign has a clearer path to leads and sales."
        backgroundImage="/assets/services/service_1.png"
      />
      <ServiceWhyChoose
        title="Paid Growth Built With Strategy, Testing, And Clear Reporting"
        description="We do not launch ads and hope for the best. Nexora builds campaign systems around your offer, audience, funnel, and numbers so every test teaches the next move."
        points={[
          "Campaign structure for Meta Ads, Instagram Ads, and TikTok Ads",
          "Audience targeting, retargeting, and funnel planning",
          "Creative direction built around hooks, offers, and conversion intent",
          "Performance reporting that makes budget decisions easier",
          "Continuous testing to improve lead quality and revenue outcomes",
        ]}
      />
            <CTAForm/>
      
    </main>
    
  );
}
