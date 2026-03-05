import { ServicePage } from "./ServicePage";

export function IncomeTaxPage() {
  return (
    <ServicePage
      title="Individual Income Tax Return"
      subtitle="Accurate, timely and hassle-free income tax return filing for salaried, business and professional individuals."
      bgImage="/assets/generated/hero-compliance.dim_1200x480.jpg"
      description={
        <>
          <p>
            Filing your Individual Income Tax Return (ITR) accurately and on
            time is a critical legal obligation. With India's tax laws becoming
            increasingly complex — multiple income sources, foreign assets,
            capital gains, and deductions — professional assistance ensures you
            remain fully compliant while claiming all legitimate tax benefits.
          </p>
          <p>
            Elite Managed Services provides comprehensive individual income tax
            return filing services for salaried employees, business persons,
            professionals and high net worth individuals. Our tax experts
            analyze your complete income profile to maximize deductions and
            minimize tax liability within the bounds of the law.
          </p>
          <p>
            We handle ITR filing for all categories — ITR-1, ITR-2, ITR-3, ITR-4
            and ITR-6 — covering salary income, house property, capital gains,
            business/professional income, foreign assets and exempt incomes. Our
            year-round advisory ensures you make tax-efficient financial
            decisions throughout the year.
          </p>
          <p>
            Our team also assists with responding to Income Tax Department
            notices, assessments, and appeals, ensuring your interests are
            effectively represented before the tax authorities.
          </p>
        </>
      }
      highlights={[
        "ITR filing for salaried employees (ITR-1, ITR-2)",
        "ITR for business and professional income (ITR-3, ITR-4)",
        "Capital gains computation and ITR filing (ITR-2)",
        "Foreign income and foreign asset disclosure compliance",
        "Tax planning and investment advisory for tax saving",
        "HRA, Section 80C, 80D, 80G deduction optimization",
        "TDS reconciliation with Form 26AS and AIS",
        "Advance tax computation and payment advisory",
        "Income Tax scrutiny notice response and handling",
        "CPC rectification requests and refund follow-ups",
        "Assessment and appeal representation",
        "Tax residency and NRI taxation advisory",
      ]}
    />
  );
}
