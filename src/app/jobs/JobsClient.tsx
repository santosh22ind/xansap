"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowRight, Upload } from "lucide-react";
import type { JOBS_QUERYResult } from "@root/sanity.types";

const typeColors: Record<string, string> = {
  Contract: "bg-[#e8f4fd] text-[#1e6fd4]",
  Permanent: "bg-[#e8fdf0] text-[#1a8a5a]",
};

type Props = {
  jobs: JOBS_QUERYResult;
};

export default function JobsClient({ jobs }: Props) {
  const modules = ["All Modules", ...Array.from(new Set(jobs.map((j) => j.module).filter(Boolean))).sort()] as string[];
  const types = ["All Types", "Contract", "Permanent"];

  const [moduleFilter, setModuleFilter] = useState("All Modules");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filtered = jobs.filter((job) => {
    const matchModule = moduleFilter === "All Modules" || job.module === moduleFilter;
    const matchType = typeFilter === "All Types" || job.type === typeFilter;
    return matchModule && matchType;
  });

  if (jobs.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#4a6080] text-lg mb-4">No roles currently listed.</p>
          <p className="text-sm text-[#4a6080]">Submit your CV and we'll be in touch when something suitable comes in.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors">
            Submit Your CV <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
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

        <p className="text-sm text-[#4a6080] mb-6">
          {filtered.length} role{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Job cards */}
        <div className="space-y-4">
          {filtered.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-blue-100 rounded-2xl p-7 hover:border-[#1e6fd4] hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {job.type && (
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[job.type] ?? "bg-blue-50 text-blue-600"}`}>
                        {job.type}
                      </span>
                    )}
                    {job.module && (
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8]">
                        {job.module}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl text-[#0f2d5c] mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    {job.title}
                  </h3>

                  {job.description && (
                    <p className="text-sm text-[#4a6080] leading-relaxed mb-4">{job.description}</p>
                  )}

                  <div className="flex flex-wrap items-center gap-5 text-xs text-[#4a6080]">
                    {job.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#4a9fe8]" />{job.location}
                      </span>
                    )}
                    {job.duration && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#4a9fe8]" />{job.duration}
                      </span>
                    )}
                    {job.rate && (
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#4a9fe8]" />{job.rate}
                      </span>
                    )}
                    {job.publishedAt && (
                      <span className="text-blue-200">
                        Posted {new Date(job.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    )}
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
            <h3 className="text-2xl text-[#0f2d5c] mb-2" style={{ fontFamily: "var(--font-dm-serif)" }}>
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
  );
}
