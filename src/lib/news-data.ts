export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "s4hana-migration-talent-shortage",
    title: "S/4HANA Migrations Are Accelerating — But the Talent Shortage Is Widening",
    excerpt:
      "With SAP's 2027 ECC end-of-mainstream-maintenance deadline firmly in view, enterprises are accelerating their S/4HANA programmes. But demand for qualified consultants now significantly outpaces supply.",
    category: "Market Insight",
    date: "March 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    author: { name: "Alexandra Nkosi", role: "Managing Director" },
    body: [
      "The SAP consulting market is experiencing a talent crunch that is reshaping how enterprises plan and execute their S/4HANA transformations. With SAP's 2027 end-of-mainstream-maintenance deadline for ECC and Business Suite approaching, organisations that have delayed their migration decisions are now scrambling to resource projects — into a market where experienced S/4HANA consultants are already fully committed.",
      "According to our placement data, demand for S/4HANA-experienced consultants has increased by over 60% year-on-year, while the supply of consultants with two or more completed S/4HANA project cycles has grown at only a fraction of that pace.",
      "The bottleneck is particularly acute in functional areas. FICO, MM and SD consultants with genuine S/4HANA conversion experience — not just those who've read the documentation or attended a training course — command significant premium rates and have very short availability windows.",
      "What can enterprises do? Early engagement with specialist staffing partners is critical. Companies that work with partners who maintain an active, constantly refreshed network of SAP consultants are best positioned to secure availability before others do. General IT recruiters, who treat SAP as one of many technology areas, simply lack the pipeline depth to source at the volume and quality that major S/4HANA programmes demand.",
      "Planning your S/4HANA resourcing strategy 6–12 months ahead of each workstream's start date is no longer a best practice — it's a necessity. The organisations that are doing this well are treating consultant availability as a critical path item, not an afterthought.",
    ],
  },
  {
    slug: "successfactors-demand-2026",
    title: "SuccessFactors Demand Continues to Surge as HCM Migrations Accelerate",
    excerpt:
      "SAP's cloud HR platform has become one of the most in-demand modules in the staffing market. We examine what's driving the demand and which skills are hardest to source.",
    category: "SAP HR",
    date: "February 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
    author: { name: "Priya Sharma", role: "Head of Finance Practice" },
    body: [
      "SAP SuccessFactors has become one of the most actively recruited areas in our business. The shift from on-premise SAP HCM to SuccessFactors Employee Central is now mainstream, and the volume of active implementations globally has created a structural undersupply of experienced consultants.",
      "Employee Central remains the most in-demand SuccessFactors module, particularly consultants who can handle complex country-specific configurations, MDF objects, RBP security and integration to third-party payroll providers. These profiles are exceptionally difficult to source.",
      "Recruiting and Onboarding consultants are the second largest category of request, as organisations look to transform their candidate experience alongside their core HR processes. Consultants who can bridge the gap between HR process knowledge and technical configuration are commanding premium rates.",
      "One trend we're observing closely is the growing requirement for SuccessFactors Integration Specialists — those who can work across the Boomi, CPI and custom API layers that connect SuccessFactors to SAP and non-SAP systems. As SuccessFactors estates mature, integration complexity is growing and the technical skills required are increasingly specialised.",
      "For HR transformation project teams, our advice is to prioritise EC configuration and integration skills early. These are genuinely the longest lead-time profiles in the SuccessFactors space and are best secured well ahead of each workstream.",
    ],
  },
  {
    slug: "contracting-vs-permanent-sap-2026",
    title: "Contracting vs Permanent: The SAP Talent Calculus in 2026",
    excerpt:
      "How are SAP professionals choosing between contracting and permanent employment in the current market? We share our perspective from hundreds of placements.",
    category: "Career Advice",
    date: "January 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    author: { name: "James Whitfield", role: "Head of Logistics Practice" },
    body: [
      "One of the most frequent questions we get from SAP professionals is whether contracting or permanent employment is the better path in the current market. The honest answer is that it depends — and the calculus has shifted somewhat over the past 18 months.",
      "Day rates for experienced SAP contractors remain strong across most modules, particularly in S/4HANA-experienced profiles. However, the market has stratified noticeably. Very experienced consultants with demonstrable S/4HANA programme delivery experience continue to command premium rates. Mid-level consultants without transformation project experience are finding the market more competitive.",
      "On the permanent side, the demand has been steadily strengthening, particularly within end-user organisations building internal SAP teams. Post-pandemic, many large enterprises reduced their dependence on external consulting by growing permanent in-house capability, and those internal teams now need to grow to support ongoing programmes.",
      "For early-career SAP professionals, we'd generally recommend contracting exposure before settling into a permanent role. The breadth of project experience, the pace of skill development and the financial rewards during project delivery phases are hard to replicate in a permanent setting. For those later in their careers who value stability, the right permanent role in a company with a strong SAP roadmap can be highly attractive.",
      "Our practical advice: keep your skills current, document your project experience in specific terms (modules, versions, project phases), and work with a recruiter who understands the SAP market deeply enough to position you correctly — not just one who will submit your CV to anything with 'SAP' in the job title.",
    ],
  },
  {
    slug: "sap-basis-cloud-evolution",
    title: "The Evolving Role of the SAP Basis Consultant in a Cloud-First World",
    excerpt:
      "RISE with SAP and cloud migrations are reshaping what Basis administrators do. The demand for cloud-savvy Basis consultants has never been higher.",
    category: "Technology",
    date: "December 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    author: { name: "David Mensah", role: "Technology & HR Practice Lead" },
    body: [
      "The SAP Basis role has always been the technical backbone of every SAP landscape. But the shift to cloud — and specifically SAP's RISE with SAP offering — is fundamentally changing what Basis administrators need to know, and how enterprises are structuring their technical teams.",
      "Traditional Basis skills — system administration, transport management, performance tuning, security and authorisation — remain as relevant as ever. But layered on top of this, RISE with SAP has created demand for Basis consultants who understand cloud infrastructure fundamentals, particularly on Azure, AWS and GCP.",
      "The SAP BTP (Business Technology Platform) layer is another area of growing importance. As organisations extend their SAP landscape with custom applications, integrations and automation on BTP, Basis consultants who can bridge the gap between classic ABAP administration and modern cloud-native architecture are extremely valuable.",
      "What this means in practice is that the strongest Basis consultants in today's market are those who have invested in cloud certifications alongside their SAP credentials. AZ-900, AZ-104 or equivalent AWS/GCP certifications, combined with strong SAP Basis fundamentals, create a profile that very few other candidates can match.",
      "For enterprises, the advice is not to assume that an on-premise Basis administrator can automatically manage a RISE environment without investment in training or new team members. The shift is significant, and getting the right technical team in place early in a cloud migration programme is critical.",
    ],
  },
  {
    slug: "top-sap-fico-interview-questions",
    title: "Top SAP FICO Interview Questions: What Clients Are Really Testing",
    excerpt:
      "We share the questions that consistently separate strong SAP FICO candidates from average ones — based on feedback from our client interviews.",
    category: "Career Advice",
    date: "November 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    author: { name: "Priya Sharma", role: "Head of Finance Practice" },
    body: [
      "After hundreds of SAP FICO placements, we've developed a clear picture of what separates candidates who impress at interview from those who don't. The gap isn't usually at the level of textbook knowledge — most FICO consultants can explain what a posting key does. The gap shows up in process understanding, configuration depth and the ability to articulate decisions clearly.",
      "The question that consistently differentiates candidates is some variation of: 'Walk me through how you would configure the payment program for a multi-company code environment with centralised payment.' Strong candidates talk about payment methods, house banks, ranking orders, tolerances and the GL account determination logic. Weaker candidates give a generic overview without the configuration specifics.",
      "S/4HANA Finance questions are now standard in most interview processes. 'How does the Universal Journal change your approach to parallel accounting?' is a frequent one. Clients want to know if the candidate genuinely understands the architectural change from ECC to S/4HANA, not just that it exists.",
      "Integration questions are another area where depth matters. 'How does an MM invoice verification posting flow into FI?' or 'What triggers a CO-PA document on a billing document?' reveal whether a consultant understands the cross-module landscape or has only worked in a siloed functional area.",
      "Our advice to candidates preparing for FICO interviews: be specific, be process-oriented, and be honest about the boundaries of your experience. A client will respect 'I've configured GL and AR extensively but my AP experience is more limited' far more than a vague answer that tries to cover everything without depth.",
    ],
  },
  {
    slug: "sap-abap-rap-fiori-demand",
    title: "Why RAP and Fiori Skills Are Now Non-Negotiable for ABAP Developers",
    excerpt:
      "The gap between classic ABAP developers and those with modern RAP and Fiori experience is widening. Clients are demanding — and paying more for — developers who can bridge both worlds.",
    category: "Technology",
    date: "October 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    author: { name: "David Mensah", role: "Technology & HR Practice Lead" },
    body: [
      "The ABAP developer market has bifurcated clearly. On one side, classic ABAP developers with strong experience in ALV reports, enhancements, BAPIs and forms remain in demand for support and maintenance work. On the other, modern ABAP developers who can build using the ABAP RESTful Application Programming Model (RAP), write CDS Views and develop Fiori/UI5 applications are commanding a significant rate premium and have very strong demand.",
      "The challenge for many experienced ABAP developers is that the transition to modern ABAP requires a genuine investment in new skills and ways of thinking. CDS Views require a different mindset from classical ABAP data access. RAP involves understanding annotations, behaviour definitions and OData services in a way that has no direct parallel in classical development.",
      "Despite this, the developers who have made the investment are thriving. Clients running S/4HANA programmes with Fiori front-ends need RAP developers urgently, and the pool of genuinely experienced ones is small relative to demand.",
      "Our practical advice for ABAP developers: SAP's BTP Academy and the official SAP Learning Journey for ABAP Cloud and RAP are good starting points. Building a small portfolio of RAP-based applications — even personal projects — and being able to discuss the technical decisions involved will differentiate you in interviews.",
      "For clients: if you need modern ABAP development capability in your programme, engage early. These profiles have the shortest availability windows in the SAP technical space. A 4-week notice period and a single competing offer can mean losing a strong candidate if your hiring process is slow.",
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
