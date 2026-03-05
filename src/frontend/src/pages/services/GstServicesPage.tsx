import { ServicePage } from "./ServicePage";

export function GstServicesPage() {
  return (
    <ServicePage
      title="GST Related Services"
      subtitle="Complete Goods and Services Tax compliance, advisory and dispute resolution services."
      bgImage="/assets/generated/hero-compliance.dim_1200x480.jpg"
      description={
        <>
          <p>
            Goods and Services Tax (GST) is India's most comprehensive indirect
            tax reform. Since its introduction in July 2017, businesses have had
            to adapt to a completely new tax framework with multiple return
            filings, input tax credit reconciliation and rigorous documentation
            requirements. Elite Managed Services provides comprehensive GST
            services to help businesses achieve full compliance.
          </p>
          <p>
            Our GST team comprises experienced practitioners with deep knowledge
            of CGST, SGST, IGST and Compensation Cess provisions. We handle GST
            registration, regular return filings, annual reconciliation
            statements, refund applications and GST audits for businesses across
            all sectors.
          </p>
          <p>
            We offer proactive advisory services to help businesses optimize
            their GST position — including supply chain restructuring advice,
            classification guidance, place of supply analysis and input tax
            credit optimization. Our team also assists with GST department
            notices, assessments and appeals.
          </p>
          <p>
            For businesses with complex GST structures including multiple
            registrations, e-commerce operations, SEZ supply, zero-rated
            supplies and reverse charge mechanism, we provide specialized
            compliance management to minimize risk and ensure accuracy.
          </p>
        </>
      }
      highlights={[
        "New GST registration — regular, composition, SEZ",
        "Monthly, quarterly return filing (GSTR-1, GSTR-3B, etc.)",
        "Annual return (GSTR-9) and reconciliation statement (GSTR-9C)",
        "Input tax credit reconciliation and optimization",
        "GST refund applications — exports, inverted duty structure",
        "E-way bill compliance and management",
        "GST classification and rate advisory",
        "Place of supply analysis for multi-state operations",
        "GST audit and health check",
        "Departmental notices, scrutiny and assessments",
        "GST appeal filing and representation",
        "Advance Ruling applications under GST",
      ]}
    />
  );
}
