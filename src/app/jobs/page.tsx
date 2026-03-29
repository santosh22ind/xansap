"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowRight, Upload } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const allJobs = [
  {
    id: "1",
    title: "SAP FICO Senior Consultant",
    module: "SAP FICO",
    location: "Frankfurt, Germany",
    type: "Contract",
    duration: "6 months",
    rate: "€700–850/day",
    posted: "2 days ago",
    description:
      "Large automotive client requires an experienced SAP FICO consultant for an S/4HANA brownfield conversion. GL, AP, AR and Asset Accounting configuration experience essential. German language a plus.",
  },
  {
    id: "2",
    title: "SAP MM / WM Lead",
    module: "SAP MM",
    location: "Amsterdam, Netherlands",
    type: "Contract",
    duration: "12 months",
    rate: "€650–750/day",
    posted: "3 days ago",
    description:
      "Global FMCG business requires an SAP MM/WM lead for a greenfield S/4HANA rollout. Must have strong warehouse management experience and prior programme lead exposure.",
  },
  {
    id: "3",
    title: "SAP SuccessFactors EC Consultant",
    module: "SAP HCM & SuccessFactors",
    location: "Remote (UK-based)",
    type: "Contract",
    duration: "6 months",
    rate: "£500–600/day",
    posted: "4 days ago",
    description:
      "Major UK retailer requires a SuccessFactors Employee Central consultant for a phase 2 global rollout. Prior EC configuration and integration experience (MDF, RBP, Position Management) required.",
  },
  {
    id: "4",
    title: "SAP Basis Administrator",
    module: "SAP Basis",
    location: "Dubai, UAE",
    type: "Permanent",
    duration: "Ongoing",
    rate: "AED 35,000–45,000/month",
    posted: "5 days ago",
    description:
      "Regional conglomerate requires a permanent SAP Basis administrator to manage their mixed ABAP/Java landscape. HANA DB experience required. Excellent package including housing allowance.",
  },
  {
    id: "5",
    title: "SAP SD Solution Architect",
    module: "SAP SD",
    location: "London, UK",
    type: "Contract",
    duration: "9 months",
    rate: "£700–800/day",
    posted: "1 week ago",
    description:
      "Global logistics company is seeking an SAP SD Solution Architect for a complex S/4HANA transformation. Must have prior architecture experience across full OTC cycle and SD-FI integration.",
  },
  {
    id: "6",
    title: "SAP ABAP Developer",
    module: "SAP ABAP",
    location: "Remote (Germany preferred)",
    type: "Contract",
    duration: "6 months",
    rate: "€550–650/day",
    posted: "1 week ago",
    description:
      "Fast-growing SAP partner requires an ABAP developer with strong CDS and RAP experience for a Fiori application development project. S/4HANA environment. Fully remote.",
  },
  {
    id: "7",
    title: "SAP Payroll Consultant — UK",
    module: "SAP Payroll",
    location: "Birmingham, UK",
    type: "Contract",
    duration: "3 months",
    rate: "£450–525/day",
    posted: "1 week ago",
    description:
      "Public sector client requires a UK payroll specialist for year-end support and schema amendment work. Must have demonstrable UK payroll schema and rules knowledge.",
  },
  {
    id: "8",
    title: "S/4HANA Programme Manager",
    module: "SAP S/4HANA",
    location: "Riyadh, Saudi Arabia",
    type: "Contract",
    duration: "18 months",
    rate: "Highly competitive",
    posted: "2 weeks ago",
    description:
      "Major government-linked enterprise requires an experienced S/4HANA Programme Manager for a large-scale greenfield implementation. Arabic language desirable but not essential.",
  },
];

const modules = ["All Modules", ...Array.from(new Set(allJobs.map((j) => j.module))).sort()];
const types = ["All Types", "Contract", "Permanent"];

const typeColors: Record<string, string> = {
  Contract: "bg-[#e8f4fd] text-[#1e6fd4]",
  Permanent: "bg-[#e8fdf0] text-[#1a8a5a]",
};

export default function JobsPage() {
  const [moduleFilter, setModuleFilter] = useState("All Modules");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filtered = allJobs.filter((job) => {
    const matchModule = moduleFilter === "All Modules" || job.module === moduleFilter;
    const matchType = typeFilter === "All Types" || job.type === typeFilter;
    return matchModule && matchType;
  });

  return (
    <main className="pt-18">
      <PageHero
        label="Careers"
        title="Open SAP Roles"
        subtitle="Contract and permanent SAP opportunities across Europe and the Middle East. New roles added weekly."
        breadcrumbs={[{ label: "Jobs" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex flex-wrap gap-2">
              {modules.map((m) => (
                <button
                  key={m}
                  onClick={() => setModuleFilter(m)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    moduleFilter === m
                      ? "bg-[#1e6fd4] text-white border-[#1e6fd4]"
                      : "bg-white text-[#4a6080] border-blue-100 hover:border-[#1e6fd4] hover:text-[#1e6fd4]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    typeFilter === t
                      ? "bg-[#0f2d5c] text-white border-[#0f2d5c]"
                      : "bg-white text-[#4a6080] border-blue-100 hover:border-[#0f2d5c] hover:text-[#0f2d5c]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-[#4a6080] mb-6">
            {filtered.length} role{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Job cards */}
          <div className="space-y-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-blue-100 rounded-2xl p-7 hover:border-[#1e6fd4] hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[job.type]}`}
                      >
                        {job.type}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8]">
                        {job.module}
                      </span>
                    </div>

                    <h3
                      className="text-xl text-[#0f2d5c] mb-3"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {job.title}
                    </h3>

                    <p className="text-sm text-[#4a6080] leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 text-xs text-[#4a6080]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#4a9fe8]" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#4a9fe8]" />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#4a9fe8]" />
                        {job.rate}
                      </span>
                      <span className="text-blue-200">Posted {job.posted}</span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e6fd4] text-white text-sm font-medium hover:bg-[#1a5fba] transition-colors whitespace-nowrap"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit CV strip */}
          <div className="mt-16 bg-[#f4f8ff] rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-100">
            <div>
              <h3
                className="text-2xl text-[#0f2d5c] mb-2"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Don't See the Right Role?
              </h3>
              <p className="text-sm text-[#4a6080]">
                Submit your CV and we'll contact you when a matching opportunity comes in.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0f2d5c] text-white font-medium hover:bg-[#1a3d7a] transition-colors whitespace-nowrap shrink-0"
            >
              <Upload className="w-4 h-4" /> Submit Your CV
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
