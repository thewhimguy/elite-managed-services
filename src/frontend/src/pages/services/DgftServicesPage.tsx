import { ServicePage } from "./ServicePage";

export function DgftServicesPage() {
  return (
    <ServicePage
      title="DGFT Services"
      subtitle="Directorate General of Foreign Trade licensing, registration and compliance solutions."
      bgImage="/assets/generated/hero-compliance.dim_1200x480.jpg"
      description={
        <>
          <p>
            The Directorate General of Foreign Trade (DGFT) is the primary
            regulatory body governing India's foreign trade policy. Compliance
            with DGFT regulations is essential for any business engaged in
            import or export of goods and services. Elite Managed Services
            offers end-to-end DGFT compliance and advisory services.
          </p>
          <p>
            We assist businesses in obtaining Import Export Code (IEC), DGFT
            licenses and authorizations including Advance Authorisation, DFIA,
            EPCG Scheme, MEIS/RODTEP, and other export incentive schemes. Our
            team stays current with the latest Foreign Trade Policy provisions
            and circulars.
          </p>
          <p>
            Our DGFT advisory services help exporters and importers take maximum
            advantage of the available duty exemptions and export incentives
            while maintaining full compliance with export obligations,
            redemption requirements and reporting obligations.
          </p>
          <p>
            We also assist in DGFT adjudications, Export Obligation Discharge
            Certificate (EODC) applications, and regularization of past default
            cases through compounding and other available mechanisms.
          </p>
        </>
      }
      highlights={[
        "Import Export Code (IEC) registration and modification",
        "Advance Authorisation application and compliance",
        "EPCG (Export Promotion Capital Goods) scheme management",
        "DFIA (Duty Free Import Authorisation) applications",
        "RODTEP / MEIS claim filing and reconciliation",
        "Export Obligation Discharge Certificate (EODC) applications",
        "FTP Policy interpretation and advisory",
        "SCOMET items licensing and compliance",
        "DGFT adjudication and regularization of defaults",
        "Star Export House / Trading House applications",
        "Registration Cum Membership Certificate (RCMC) advisory",
        "Annual supplement under Foreign Trade Policy",
      ]}
    />
  );
}
