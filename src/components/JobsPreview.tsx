"use client";

import Link from "next/link";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";

// Placeholder jobs — will be replaced with live Sanity data
const jobs = [
  {
    title: "SAP FICO Consultant",
    location: "Frankfurt, Germany",
    type: "Contract",
    duration: "12 months",
    module: "SAP FICO",
    slug: "sap-fico-consultant-frankfurt",
  },
  {
    title: "SAP S/4HANA Migration Lead",
    location: "London, UK",
    type: "Contract",
    duration: "6 months",
    module: "SAP S/4HANA",
    slug: "sap-s4hana-migration-lead-london",
  },
  {
    title: "SAP SuccessFactors Consultant",
    location: "Remote (Europe)",
    type: "Contract",
    duration: "9 months",
    module: "SAP HCM",
    slug: "sap-successfactors-consultant-remote",
  },
  {
    title: "SAP Basis Administrator",
    location: "Amsterdam, Netherlands",
    type: "Permanent",
    duration: "Permanent",
    module: "SAP Basis",
    slug: "sap-basis-administrator-amsterdam",
  },
];

const moduleColors: Record<string, string> = {
  "SAP FICO": "bg-blue-50 text-[#1e6fd4]",
  "SAP S/4HANA": "bg-[#0f2d5c]/10 text-[#0f2d5c]",
  "SAP HCM": "bg-sky-50 text-sky-600",
  "SAP Basis": "bg-indigo-50 text-indigo-600",
};

export default function JobsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
              Open Roles
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Latest SAP Opportunities
            </h2>
          </div>
          <Link
            href="/jobs"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1e6fd4] text-[#1e6fd4] font-medium hover:bg-[#1e6fd4] hover:text-white transition-colors text-sm"
          >
            View All Jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {jobs.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-[#f4f8ff] hover:bg-[#0f2d5c] rounded-2xl p-7 border border-blue-100 hover:border-[#0f2d5c] transition-all duration-300"
            >
              {/* Left */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#1e6fd4]/20 border border-blue-100 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Briefcase className="w-5 h-5 text-[#1e6fd4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f2d5c] group-hover:text-white text-base mb-2 transition-colors duration-300">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-[#4a6080] group-hover:text-blue-200/70 transition-colors duration-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: badges + arrow */}
              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    moduleColors[job.module] ?? "bg-gray-100 text-gray-600"
                  } group-hover:bg-white/10 group-hover:text-white transition-colors duration-300`}
                >
                  {job.module}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white group-hover:bg-white/10 group-hover:text-white border border-blue-100 text-[#4a6080] transition-colors duration-300">
                  {job.type}
                </span>
                <ArrowRight className="w-4 h-4 text-[#1e6fd4] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-[#0f2d5c] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xl text-white mb-1"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Don't see the right role?
            </p>
            <p className="text-sm text-blue-200/70">
              Submit your CV and we'll match you with opportunities as they arise.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors text-sm shadow-lg shadow-blue-900/30"
          >
            Submit Your CV <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
