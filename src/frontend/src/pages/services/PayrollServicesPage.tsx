import { ServicePage } from "./ServicePage";

export function PayrollServicesPage() {
  return (
    <ServicePage
      title="Payroll Services"
      subtitle="End-to-end payroll processing, statutory compliance and employee taxation management."
      bgImage="/assets/generated/hero-banner.dim_1200x480.jpg"
      description={
        <>
          <p>
            Managing payroll is one of the most complex and time-sensitive
            functions in any organization. With multiple statutory deductions,
            frequent regulatory changes, TDS compliance and employee
            expectations of accuracy and confidentiality, payroll management
            demands specialized expertise and robust processes.
          </p>
          <p>
            Elite Managed Services provides comprehensive payroll outsourcing
            and compliance services for businesses of all sizes — from startups
            with 5 employees to large enterprises with thousands of staff across
            multiple locations. Our payroll team ensures accurate, timely and
            fully compliant salary processing every month.
          </p>
          <p>
            We manage all aspects of payroll including salary computation,
            statutory deductions (PF, ESI, PT, LWF), TDS calculations, pay slip
            generation and full and final settlement processing. Our team stays
            updated on all regulatory changes — PF wage ceiling revisions, ESI
            rate changes, minimum wage notifications — ensuring your payroll
            always reflects current requirements.
          </p>
          <p>
            Our payroll services are backed by secure technology platforms with
            role-based access, employee self-service portals and seamless
            integration with your existing HR and accounting systems.
          </p>
        </>
      }
      highlights={[
        "Monthly payroll processing and salary computation",
        "Provident Fund (PF) — registration, monthly ECR filing, compliance",
        "Employee State Insurance (ESI) registration and monthly filing",
        "Professional Tax (PT) registration and monthly returns",
        "TDS on salary (Section 192) — monthly deduction and quarterly filing",
        "Labour Welfare Fund (LWF) contribution management",
        "Pay slip generation and digital distribution",
        "Full and Final Settlement computation",
        "PF and ESI annual returns filing",
        "Form 16 / Form 16A preparation and distribution",
        "Employee onboarding and exit compliance",
        "Minimum wage compliance monitoring",
      ]}
    />
  );
}
