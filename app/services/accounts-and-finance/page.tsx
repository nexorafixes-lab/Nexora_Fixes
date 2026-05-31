import CTAForm from "@/components/Home/CTAForm";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyChoose from "@/components/Services/ServiceWhyChoose";

export default function AccountsAndFinancePage() {
  return (
    <main className="bg-black">
      <ServiceHero
        title="Accounts And Finance That"
        highlight="Make Numbers Clear"
        description="Nexora Fixes supports cleaner financial workflows, reporting structures, bookkeeping support, and account systems that make business decisions easier to track, understand, and improve."
        backgroundImage="/assets/services/service_3.png"
      />
      <ServiceWhyChoose
        title="Cleaner Financial Systems For Better Business Decisions"
        description="Numbers should help you make confident decisions, not slow you down. Nexora supports practical finance workflows that make reporting, tracking, and planning easier to manage."
        points={[
          "Bookkeeping support and clearer account organization",
          "Financial reporting structures that are easier to understand",
          "Cash flow, expense, and performance visibility improvements",
          "Process support for cleaner finance operations",
          "Business-friendly insights that support planning and growth",
        ]}
      />

      <CTAForm/>
    </main>
  );
}
