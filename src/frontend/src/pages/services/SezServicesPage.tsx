import { ServicePage } from "./ServicePage";
import { assetPath } from "@/utils/paths";

export function SezServicesPage() {
  return (
    <ServicePage
      title="SEZ Services"
      subtitle="Comprehensive Special Economic Zone advisory, approval and compliance management."
      bgImage={assetPath("assets/generated/hero-sez.dim_1200x480.jpg")}
      description={
        <>
          <p>
            Elite Managed Services offers end-to-end SEZ advisory and compliance
            services to developers, co-developers and units operating within
            Special Economic Zones across India. Our team has deep expertise in
            the SEZ Act 2005 and SEZ Rules 2006, providing clients with
            accurate, timely and actionable guidance.
          </p>
          <p>
            We assist businesses from the initial stage of evaluating whether
            SEZ setup is the right strategic choice, through the entire approval
            process, and into ongoing compliance management. Our services cover
            all types of SEZs — multi-product, sector-specific IT/ITES SEZs,
            pharmaceuticals, textiles and others.
          </p>
          <p>
            Our experienced team coordinates with the Development Commissioner's
            office, Board of Approval and relevant state authorities to ensure
            smooth and expedited approvals. We handle all documentation,
            representations and submissions on behalf of our clients.
          </p>
          <p>
            Post-setup, we provide continuous compliance support including
            Annual Performance Reports (APR), Letter of Permission (LoP)
            amendments, sub-leasing approvals, NFE monitoring and exit
            formalities.
          </p>
        </>
      }
      highlights={[
        "Feasibility analysis and SEZ strategy evaluation",
        "Preparation and filing of SEZ formal approval applications",
        "Coordination with Development Commissioner's office",
        "Letter of Permission (LoP) / Letter of Approval (LoA) procurement",
        "Annual Performance Report (APR) preparation and filing",
        "NFE (Net Foreign Exchange) monitoring and compliance",
        "LoP amendments for expansion, activity changes",
        "Sub-leasing, co-development approvals",
        "SEZ exit and de-bonding formalities",
        "Liaison with Board of Approval (BoA) and DPIIT",
        "State-level SEZ compliance and incentive management",
        "Training and capacity building for SEZ compliance teams",
      ]}
    />
  );
}
