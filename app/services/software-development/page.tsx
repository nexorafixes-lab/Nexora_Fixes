import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function SoftwareDevelopmentPage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="Software Development That"
        highlight="Fits How You Work"
        description="We create dashboards, portals, CRMs, booking flows, apps, and internal tools around your real workflows. The goal is simple: cleaner operations, faster execution, and systems your team can actually use."
        backgroundImage="/assets/services/service_4.png"
      />
      <ServiceWhyChoose
        title="Custom Software That Matches Your Real Workflow"
        description="Good software should remove friction instead of creating another complicated system. Nexora builds tools around how your team actually works, then keeps the interface clean and usable."
        points={[
          "Dashboards, portals, CRMs, booking systems, and internal tools",
          "Workflow planning before development so the product solves real problems",
          "Clean interfaces designed for daily team use",
          "Scalable technical foundations for future features",
          "Practical development focused on speed, clarity, and maintainability",
        ]}
      />
            <CTAForm/>
      
    </main>
  );
}
