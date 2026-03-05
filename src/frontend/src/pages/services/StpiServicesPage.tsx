import { ServicePage } from "./ServicePage";

export function StpiServicesPage() {
  return (
    <ServicePage
      title="STPI Services"
      subtitle="Expert guidance for Software Technology Park registration and ongoing compliance."
      bgImage="/assets/generated/hero-compliance.dim_1200x480.jpg"
      description={
        <>
          <p>
            Software Technology Parks of India (STPI) registration enables IT
            and ITES companies to export software and technology services with
            attractive duty-free benefits and simplified compliance procedures.
            Elite Managed Services provides comprehensive support for new STPI
            registrations and ongoing statutory compliance.
          </p>
          <p>
            We assist IT companies in evaluating whether STPI or SEZ
            registration is the optimal route for their business model, taking
            into account their capital investment plans, domestic sales
            requirements and export projections. Our team ensures the
            registration process is completed efficiently with minimal
            disruption to operations.
          </p>
          <p>
            Once registered, we manage all recurring STPI compliance obligations
            including Softex form filings, Annual Performance Reports, bond
            management, customs procedures for import of capital goods and
            reconciliation of export receipts.
          </p>
          <p>
            Our STPI compliance team works closely with your finance and
            operations team to ensure 100% compliance with all STPI regulations
            while maximizing the available benefits.
          </p>
        </>
      }
      highlights={[
        "New STPI unit registration and setup advisory",
        "Preparation of project report and application documents",
        "Coordination with STPI authorities for approvals",
        "Import duty exemption management for capital goods",
        "Softex form preparation and filing",
        "Annual Performance Report (APR) preparation",
        "Bond management and execution",
        "De-bonding and disposal of capital goods",
        "STPI to SEZ migration advisory",
        "Export reconciliation and RBI compliance",
        "Training on STPI compliance procedures",
        "Liaison with STPI regional offices across India",
      ]}
    />
  );
}
