module.exports = {
  title: "knowledge base",
  description: "searching filings of personal research",
  serviceWorker: true,
  base: "/",
  dest: "./docs",
  themeConfig: {
    sidebar: [
      {
        title: "knowledge base",
        children: ["/"]
      },
      {
        title: "project management",
        children: ["/project_management/", "/project_management/scrum_agile"]
      },
      {
        title: "learning",
        children: ["/learning/how_to_learn"]
      },
      {
        title: "business",
        children: [
          "/business/founders_agreement.md",
          "/business/operation_management.md"
        ]
      },
      {
        title: "us taxes",
        children: [
          "/us_taxation/",
          "/us_taxation/individual_taxation.md",
          "/us_taxation/gross_income_inclusions.md",
          "/us_taxation/gross_income_exclusions.md",
          "/us_taxation/self_employment.md",
          "/us_taxation/depreciation_amortization.md"
        ]
      },
      {
        title: "finance",
        children: [
          "/finance/capital_budgeting",
          "/finance/discounted_cash_flow",
          "/finance/financial_statement_analysis",
          "/finance/intro_corporate_finance",
          "/finance/investment_decision_rules",
          "/finance/macrs",
          "/finance/present_value",
          "/finance/pricing_risk_capital_markets",
          "/finance/tvm",
          "/finance/valuing_bonds",
          "/finance/valuing_stocks"
        ]
      },
      {
        title: "appendix",
        children: ["/appendix/", "/appendix/sources.md"]
      }
    ]
  }
};
