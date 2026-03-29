"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Placeholder articles — will be replaced with live Sanity data
const articles = [
  {
    category: "SAP S/4HANA",
    title: "Why 2025 Is the Year Enterprises Can't Delay Their S/4HANA Migration",
    excerpt:
      "With SAP's mainstream maintenance for ECC ending in 2027, the window for a smooth transition is closing fast. Here's what you need to know now.",
    date: "12 March 2025",
    readTime: "5 min read",
    slug: "s4hana-migration-2025",
  },
  {
    category: "Talent & Hiring",
    title: "The SAP Skills Shortage Is Real — And Getting Worse",
    excerpt:
      "Demand for certified SAP consultants is outpacing supply across Europe and APAC. We break down which modules are hardest to hire and why.",
    date: "28 February 2025",
    readTime: "4 min read",
    slug: "sap-skills-shortage-2025",
  },
  {
    category: "SuccessFactors",
    title: "SAP SuccessFactors vs Workday: Which Should Your Enterprise Choose?",
    excerpt:
      "Both platforms dominate the HR technology space. We compare them on integration, total cost of ownership and consultant availability.",
    date: "10 February 2025",
    readTime: "6 min read",
    slug: "successfactors-vs-workday",
  },
];

const categoryColors: Record<string, string> = {
  "SAP S/4HANA": "bg-[#0f2d5c]/10 text-[#0f2d5c]",
  "Talent & Hiring": "bg-[#1e6fd4]/10 text-[#1e6fd4]",
  "SuccessFactors": "bg-sky-100 text-sky-700",
};

export default function NewsSection() {
  return (
    <section className="py-24 bg-[#f4f8ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
              Insights
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              News & Perspectives
            </h2>
          </div>
          <Link
            href="/news"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1e6fd4] text-[#1e6fd4] font-medium hover:bg-[#1e6fd4] hover:text-white transition-colors text-sm"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className={`group flex flex-col rounded-2xl overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#1e6fd4] to-[#0f2d5c] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/30" />
                  <div className="absolute bottom-2 left-4 w-20 h-20 rounded-full bg-white/20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[article.category] ?? "bg-white/20 text-white"
                    } bg-white`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 bg-white p-7">
                <div className="flex items-center gap-3 text-xs text-[#4a6080] mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3
                  className="text-lg text-[#0f2d5c] group-hover:text-[#1e6fd4] leading-snug mb-3 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {article.title}
                </h3>

                <p className="text-sm text-[#4a6080] leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#1e6fd4] group-hover:gap-2.5 transition-all duration-300">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
