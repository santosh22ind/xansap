export interface ServiceModule {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  typicalRoles: string[];
  keySkills: string[];
  icon: string;
  group: string;
}

export const servicesData: ServiceModule[] = [
  {
    slug: "sap-fico",
    title: "SAP FICO",
    subtitle: "Finance & Controlling",
    tagline: "The financial backbone of every SAP landscape.",
    group: "SAP Finance",
    icon: "💹",
    description:
      "General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Centre Accounting and Profit Centre Controlling.",
    longDescription: [
      "SAP FICO remains the most in-demand module across every industry sector. Finance transformation projects, S/4HANA migrations and ongoing support all require deep FICO expertise — and the market for qualified consultants is consistently tight.",
      "We maintain an active network of SAP FICO consultants ranging from configuration support specialists to senior solution architects with full-cycle implementation experience. We understand the distinction between a GL-only resource and a fully qualified FICO lead, and we won't waste your time with the wrong profile.",
    ],
    typicalRoles: [
      "SAP FICO Consultant",
      "SAP FICO Senior Consultant",
      "SAP FICO Solution Architect",
      "SAP FICO Team Lead",
      "SAP Finance Business Analyst",
      "SAP GL / AR / AP Specialist",
      "SAP Asset Accounting Consultant",
    ],
    keySkills: [
      "General Ledger (GL)",
      "Accounts Payable (AP)",
      "Accounts Receivable (AR)",
      "Asset Accounting (AA)",
      "Cost Centre Accounting (CCA)",
      "Profit Centre Accounting (PCA)",
      "Internal Orders",
      "Product Costing",
      "Profitability Analysis (COPA)",
      "S/4HANA Finance (Simple Finance)",
    ],
  },
  {
    slug: "sap-co",
    title: "SAP CO",
    subtitle: "Controlling",
    tagline: "Driving management accounting across the enterprise.",
    group: "SAP Finance",
    icon: "📊",
    description:
      "Cost element accounting, cost centre accounting, internal orders, product costing and profitability analysis specialists.",
    longDescription: [
      "SAP CO sits at the heart of management accounting — enabling businesses to track and analyse costs, understand profitability at every level and drive data-led financial decisions. As organisations move to S/4HANA, the unified FI-CO model makes controlling expertise more valuable than ever.",
      "Our CO consultants bring hands-on experience across the full controlling spectrum, from basic cost centre structures through to complex product costing scenarios and COPA reporting.",
    ],
    typicalRoles: [
      "SAP CO Consultant",
      "SAP CO Senior Consultant",
      "SAP CO / COPA Specialist",
      "SAP Product Costing Consultant",
      "SAP Management Accounting Analyst",
    ],
    keySkills: [
      "Cost Element Accounting",
      "Cost Centre Accounting",
      "Profit Centre Accounting",
      "Internal Orders",
      "Product Costing (CO-PC)",
      "Profitability Analysis (CO-PA)",
      "Activity-Based Costing",
      "Results Analysis",
      "S/4HANA Universal Journal",
    ],
  },
  {
    slug: "sap-bpc",
    title: "SAP BPC",
    subtitle: "Business Planning & Consolidation",
    tagline: "Enterprise planning, budgeting and consolidation in one platform.",
    group: "SAP Finance",
    icon: "📈",
    description:
      "Planning, budgeting, forecasting and financial consolidation consultants for BPC Standard, Embedded and BPC for S/4HANA.",
    longDescription: [
      "SAP BPC enables finance teams to manage planning, budgeting, forecasting and statutory consolidation within a single, integrated environment. As organisations adopt SAC Planning and BPC Embedded, the need for consultants who understand both the legacy landscape and the modern cloud direction has grown significantly.",
      "We place BPC specialists across all versions — Standard, Embedded (BW-IP), and the newer SAC Planning migration paths — as well as SEM-BCS consolidation consultants.",
    ],
    typicalRoles: [
      "SAP BPC Consultant",
      "SAP BPC Developer",
      "SAP BPC / SAC Planning Consultant",
      "SAP Consolidation Specialist",
      "SAP Planning & Analytics Consultant",
    ],
    keySkills: [
      "BPC Standard (Microsoft & Netweaver)",
      "BPC Embedded (BW-IP)",
      "BPC Optimised for S/4HANA",
      "SAC Planning",
      "SEM-BCS / EC-CS Consolidation",
      "EPM Add-in",
      "Script Logic / Fox Formulas",
      "BW/4HANA Integration",
    ],
  },
  {
    slug: "sap-mm",
    title: "SAP MM",
    subtitle: "Materials Management",
    tagline: "Procurement and inventory excellence across every supply chain.",
    group: "SAP Logistics",
    icon: "📦",
    description:
      "Procurement, inventory management, invoice verification and warehouse management specialists for complex supply chains.",
    longDescription: [
      "SAP MM underpins procurement, inventory management and logistics across some of the world's most complex supply chains. From purchase requisition through to goods receipt and invoice verification, MM consultants enable the operational backbone of the enterprise.",
      "We place SAP MM consultants with genuine depth — individuals who understand Purchasing Organisations, valuation areas, movement types and the nuances of MRP-driven procurement. Not generalists who've touched MM briefly.",
    ],
    typicalRoles: [
      "SAP MM Consultant",
      "SAP MM Senior Consultant",
      "SAP Procurement Specialist",
      "SAP MM / WM Consultant",
      "SAP Inventory Management Consultant",
      "SAP MM Team Lead",
    ],
    keySkills: [
      "Purchase Requisitions & Orders",
      "Vendor Master Data",
      "Goods Receipt & Goods Issue",
      "Invoice Verification (LIV)",
      "Inventory Management",
      "Materials Master",
      "MRP / Material Requirements Planning",
      "Batch Management",
      "MM-FI Integration",
      "S/4HANA Sourcing & Procurement",
    ],
  },
  {
    slug: "sap-sd",
    title: "SAP SD",
    subtitle: "Sales & Distribution",
    tagline: "From order to cash — every step, every time.",
    group: "SAP Logistics",
    icon: "🤝",
    description:
      "Order-to-cash process experts covering sales orders, pricing, billing, shipping and customer master data.",
    longDescription: [
      "SAP SD manages the entire order-to-cash cycle — from customer inquiry through sales order, delivery, shipping and billing. As digital commerce transforms customer expectations, SD expertise is increasingly intertwined with S/4HANA Order Management and SAP CX/C4C integration.",
      "Our SD consultants understand the commercial process behind the configuration. They can engage with business stakeholders, translate requirements and deliver solutions that serve revenue — not just tick boxes in a project plan.",
    ],
    typicalRoles: [
      "SAP SD Consultant",
      "SAP SD Senior Consultant",
      "SAP Order-to-Cash Specialist",
      "SAP SD / MM Integration Consultant",
      "SAP Pricing Consultant",
      "SAP Billing Specialist",
    ],
    keySkills: [
      "Sales Order Management",
      "Pricing & Conditions",
      "Delivery & Shipping",
      "Billing & Invoice",
      "Customer Master Data",
      "Credit Management",
      "Returns & Complaints",
      "Available-to-Promise (ATP)",
      "SD-FI Integration",
      "S/4HANA Order Management",
    ],
  },
  {
    slug: "sap-wm",
    title: "SAP WM",
    subtitle: "Warehouse Management",
    tagline: "Precision warehouse operations, from storage bin to despatch.",
    group: "SAP Logistics",
    icon: "🏭",
    description:
      "Warehouse management and extended warehouse management consultants for complex distribution and fulfilment operations.",
    longDescription: [
      "SAP Warehouse Management (WM) and its successor Extended Warehouse Management (EWM) provide the operational foundation for distribution centres, manufacturing warehouses and 3PL operations. The shift to EWM on S/4HANA has created strong demand for consultants who bridge both systems.",
      "We place WM and EWM specialists who understand the physical reality of warehouse operations — not just the configuration screens. From transfer order management to yard management and labour management in EWM, we have the coverage.",
    ],
    typicalRoles: [
      "SAP WM Consultant",
      "SAP EWM Consultant",
      "SAP WM / EWM Senior Consultant",
      "SAP Warehouse Operations Specialist",
      "SAP TM / EWM Integration Consultant",
    ],
    keySkills: [
      "Transfer Order Management",
      "Storage Type & Section Strategy",
      "Picking & Packing",
      "Goods Receipt / Goods Issue (WM)",
      "Lean WM",
      "Extended Warehouse Management (EWM)",
      "Yard Management",
      "Labour Management",
      "EWM on S/4HANA",
      "WM to EWM Migration",
    ],
  },
  {
    slug: "sap-hcm",
    title: "SAP HCM & SuccessFactors",
    subtitle: "Human Capital Management",
    tagline: "Connecting the right talent technology to the right business outcome.",
    group: "SAP HR",
    icon: "👥",
    description:
      "From on-premise SAP HCM to full SuccessFactors cloud suite — payroll, talent, workforce management and EC.",
    longDescription: [
      "HR transformation is one of the most active areas of SAP investment. Organisations are moving from on-premise HCM to SuccessFactors Employee Central, while continuing to run complex payroll and time management operations on-premise or via HCM on S/4HANA.",
      "We understand both worlds. Our HR/HCM consultants cover the full spectrum — from PA/PD and payroll through to full SuccessFactors cloud suite implementations including Employee Central, Recruiting, Learning, Performance and Compensation.",
    ],
    typicalRoles: [
      "SAP HCM Consultant",
      "SAP Payroll Consultant",
      "SuccessFactors Employee Central Consultant",
      "SuccessFactors Recruiting / Onboarding Specialist",
      "SuccessFactors Learning (LMS) Consultant",
      "SAP Time Management Consultant",
      "SAP HR Integration Specialist",
    ],
    keySkills: [
      "Personnel Administration (PA)",
      "Organisational Management (OM)",
      "SAP Payroll (multiple locales)",
      "Time Management / Time Evaluation",
      "SuccessFactors Employee Central",
      "SuccessFactors Recruiting & Onboarding",
      "SuccessFactors Performance & Goals",
      "SuccessFactors Compensation",
      "SuccessFactors Learning",
      "HCM to SuccessFactors Migration",
    ],
  },
  {
    slug: "sap-payroll",
    title: "SAP Payroll",
    subtitle: "Payroll",
    tagline: "Getting payroll right, every time, everywhere.",
    group: "SAP HR",
    icon: "💰",
    description:
      "SAP Payroll consultants with country-specific expertise across UK, Germany, US, Australia and more.",
    longDescription: [
      "Payroll is high-stakes — errors damage employee trust and attract regulatory scrutiny. SAP Payroll consultants who truly understand schema, rules and country-specific legislation are among the hardest profiles to source in the market.",
      "We maintain an active network of payroll specialists with country-specific expertise. Whether you need UK PAYE, German payroll, US payroll or a multi-country global payroll rollout, we can find consultants who've done it before.",
    ],
    typicalRoles: [
      "SAP Payroll Consultant",
      "SAP Payroll Developer",
      "SAP Global Payroll Lead",
      "SAP Payroll Integration Specialist",
      "SAP Time & Payroll Consultant",
    ],
    keySkills: [
      "Payroll Schema & Rules",
      "Wage Types",
      "Country-Specific Legal Requirements",
      "Retroactive Payroll",
      "Off-Cycle Payroll",
      "Payroll Control Centre (PCC)",
      "Third-Party Remittance",
      "Payroll Posting to FI",
      "Multi-Country Payroll",
    ],
  },
  {
    slug: "sap-basis",
    title: "SAP Basis",
    subtitle: "Technology & Infrastructure",
    tagline: "The technical foundation that keeps SAP running.",
    group: "SAP Technology",
    icon: "⚙️",
    description:
      "System administration, transport management, security roles, performance tuning and landscape support.",
    longDescription: [
      "SAP Basis is the invisible engine room of every SAP landscape. Without skilled Basis administrators, even the best-configured functional system will struggle. As organisations migrate to SAP on cloud infrastructure and RISE with SAP, Basis expertise is evolving — and the demand for skilled administrators remains strong.",
      "We place Basis administrators and architects at every level — from system support and transport management through to S/4HANA Basis leads overseeing complex migrations and cloud transitions.",
    ],
    typicalRoles: [
      "SAP Basis Administrator",
      "SAP Basis Consultant",
      "SAP Basis Architect",
      "SAP System Administrator",
      "SAP Security & Authorisation Consultant",
      "SAP Basis Team Lead",
      "SAP RISE / BTP Platform Engineer",
    ],
    keySkills: [
      "System Administration (ABAP & Java Stack)",
      "Transport Management",
      "System Landscape Management",
      "Performance Monitoring & Tuning",
      "Security & Authorisation (Roles & Profiles)",
      "HANA Database Administration",
      "S/4HANA Technical Migration",
      "SAP on Azure / AWS / GCP",
      "RISE with SAP",
      "SAP BTP (Business Technology Platform)",
    ],
  },
  {
    slug: "sap-abap",
    title: "SAP ABAP",
    subtitle: "Development & Programming",
    tagline: "Custom development, integrations and legacy modernisation.",
    group: "SAP Technology",
    icon: "💻",
    description:
      "ABAP developers from classical programming through to ABAP OO, RAP framework, Fiori and SAP BTP development.",
    longDescription: [
      "ABAP development ranges from maintaining decades-old classical programs to building modern Fiori applications with the ABAP RESTful Application Programming Model (RAP). Both ends of the spectrum require experienced developers — and the two skill sets are quite different.",
      "Our ABAP developer network covers the full range: classical ABAP, ABAP Objects, BAPI/BADI/User Exit development, Smartforms/Adobe Forms, and modern RAP, CDS Views and Fiori Elements development.",
    ],
    typicalRoles: [
      "SAP ABAP Developer",
      "SAP ABAP Senior Developer",
      "SAP ABAP / Fiori Developer",
      "SAP BTP Developer",
      "SAP Integration Developer (CPI / PI / PO)",
      "SAP ABAP Lead / Architect",
    ],
    keySkills: [
      "Classical ABAP",
      "ABAP Object-Oriented (OO)",
      "BAPI / BADI / User Exits / Enhancements",
      "SAP Smartforms / Adobe Forms",
      "CDS (Core Data Services)",
      "ABAP RESTful Application Programming (RAP)",
      "Fiori / UI5 Development",
      "SAP Cloud Platform Integration (CPI)",
      "OData Services",
      "SAP BTP (Business Technology Platform)",
    ],
  },
  {
    slug: "sap-s4hana",
    title: "SAP S/4HANA",
    subtitle: "Next-Gen ERP",
    tagline: "The platform redefining how enterprises run.",
    group: "SAP Technology",
    icon: "🚀",
    description:
      "Greenfield, brownfield and selective migration consultants with deep S/4HANA architecture and conversion experience.",
    longDescription: [
      "Every major SAP customer is on or moving to S/4HANA. The scale of demand for S/4HANA expertise — across functional, technical and programme management disciplines — is unlike anything the SAP market has seen before.",
      "We support S/4HANA projects at every stage: from pre-project scoping and fit-gap analysis through blueprint, build, testing and go-live support. We understand greenfield, brownfield (system conversion) and selective data migration approaches, and we can staff accordingly.",
    ],
    typicalRoles: [
      "S/4HANA Solution Architect",
      "S/4HANA Programme Manager",
      "S/4HANA Functional Lead",
      "S/4HANA Technical Architect",
      "S/4HANA Migration Specialist",
      "S/4HANA Test Manager",
      "SAP Activate Project Manager",
    ],
    keySkills: [
      "S/4HANA Architecture",
      "Greenfield Implementation",
      "Brownfield / System Conversion",
      "Selective Data Migration",
      "SAP Activate Methodology",
      "Fit-to-Standard Analysis",
      "RISE with SAP",
      "S/4HANA Finance (Universal Journal)",
      "S/4HANA Embedded Analytics",
      "S/4HANA Cloud (Public & Private Edition)",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceModule | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getServiceGroups() {
  const groups: Record<string, ServiceModule[]> = {};
  for (const service of servicesData) {
    if (!groups[service.group]) groups[service.group] = [];
    groups[service.group].push(service);
  }
  return groups;
}
