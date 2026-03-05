import { ServicePage } from "./ServicePage";

export function LabourLawPage() {
  return (
    <ServicePage
      title="Labour Law Compliances"
      subtitle="Comprehensive labour law audit, registration and statutory compliance services across India."
      bgImage="/assets/generated/hero-banner.dim_1200x480.jpg"
      description={
        <>
          <p>
            India's labour law framework is one of the most extensive and
            complex in the world, with over 40 central labour laws and numerous
            state-specific regulations governing employer-employee
            relationships, working conditions, wages, social security and
            industrial relations. Non-compliance can result in significant
            penalties, prosecution and business disruption.
          </p>
          <p>
            Elite Managed Services provides end-to-end labour law compliance
            services, helping businesses establish robust compliance frameworks
            that cover all applicable central and state labour legislation. Our
            team of labour law specialists has in-depth knowledge of the four
            Labour Codes and the transitional compliance requirements.
          </p>
          <p>
            We conduct comprehensive labour law audits to identify compliance
            gaps, assess risk exposure and provide actionable recommendations.
            Our audit covers Factory Act, Contract Labour Act, Shops &
            Establishments Act, Payment of Wages Act, Minimum Wages Act, Payment
            of Bonus Act, Maternity Benefit Act and many more.
          </p>
          <p>
            With the codification of labour laws into four Labour Codes (Wages,
            Industrial Relations, Social Security, and Occupational Safety),
            businesses need expert guidance to understand their obligations
            under the new framework. Our team provides transition advisory and
            implementation support.
          </p>
        </>
      }
      highlights={[
        "Comprehensive labour law compliance audit",
        "Factory Act registration and compliance management",
        "Contract Labour (Regulation & Abolition) Act compliance",
        "Shops & Establishments Act registration and renewal",
        "Minimum Wages Act compliance and advisory",
        "Payment of Wages Act compliance and monitoring",
        "Payment of Bonus Act annual compliance",
        "Maternity Benefit Act and POSH Act compliance",
        "Industrial Disputes Act and Standing Orders compliance",
        "Labour Code transition advisory and implementation",
        "Principal Employer-Contractor compliance management",
        "Statutory register maintenance and returns filing",
      ]}
    />
  );
}
