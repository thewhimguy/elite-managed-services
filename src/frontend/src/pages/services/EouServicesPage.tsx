import { ServicePage } from "./ServicePage";

export function EouServicesPage() {
  return (
    <ServicePage
      title="100% EOU Services"
      subtitle="Export Oriented Unit setup, approvals and compliance management across India."
      bgImage="/assets/generated/hero-banner.dim_1200x480.jpg"
      description={
        <>
          <p>
            A 100% Export Oriented Unit (EOU) is a manufacturing or service
            establishment set up with the primary objective of exporting its
            entire production. The EOU scheme provides significant duty and tax
            benefits to exporters, making it an attractive option for
            manufacturing and service companies looking to maximize their export
            potential.
          </p>
          <p>
            Elite Managed Services provides complete advisory and compliance
            services for the EOU scheme, from initial feasibility assessment and
            application filing to ongoing compliance management. We help you
            understand the eligibility criteria, inter-unit transactions, NFE
            requirements and domestic tariff area (DTA) sale provisions.
          </p>
          <p>
            Our team assists manufacturing companies in sectors such as
            textiles, pharmaceuticals, electronics, food processing, chemicals
            and more to set up and operate 100% EOU units with full regulatory
            compliance. We coordinate with the Development Commissioner's office
            and Customs authorities on your behalf.
          </p>
          <p>
            Our ongoing compliance support covers Annual Performance Reports,
            Net Foreign Exchange Earnings monitoring, bond management, and exit
            procedures when required.
          </p>
        </>
      }
      highlights={[
        "EOU scheme feasibility analysis and ROI assessment",
        "Application preparation and filing with Development Commissioner",
        "Letter of Permission procurement and registration",
        "Customs bond execution and management",
        "Duty-free import of raw materials, capital goods coordination",
        "Annual Performance Report (APR) preparation",
        "Net Foreign Exchange (NFE) monitoring and compliance",
        "DTA (Domestic Tariff Area) sales calculation and management",
        "Inter-EOU transactions and job work approvals",
        "EOU exit and conversion to DTA unit formalities",
        "Liaison with Customs, DGFT and Development Commissioner",
        "Training and audit support for EOU compliance",
      ]}
    />
  );
}
