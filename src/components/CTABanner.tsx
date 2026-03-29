"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#0f2d5c] rounded-3xl overflow-hidden px-10 py-16 lg:px-20 lg:py-20">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1e6fd4]/20 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#4a9fe8]/10 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="text-center lg:text-left max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-4">
                Let's Work Together
              </p>
              <h2
                className="text-4xl lg:text-5xl text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Ready to Find Your Next SAP Expert?
              </h2>
              <p className="text-lg text-blue-200/70 leading-relaxed">
                Whether you need one specialist or an entire project team, we're
                ready to help. Tell us your requirement and we'll come back to
                you within 24 hours.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors shadow-lg shadow-blue-900/30 whitespace-nowrap"
              >
                Submit a Requirement <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" /> Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
