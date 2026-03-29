"use client";

// Placeholder logos — replace with real client logos once provided
const logos = [
  "Siemens",
  "Unilever",
  "Deutsche Bank",
  "Shell",
  "BASF",
  "Vodafone",
  "Bayer",
  "Bosch",
  "SAP SE",
  "Henkel",
];

export default function LogoStrip() {
  return (
    <section className="py-14 bg-white border-y border-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8]">
          Trusted by Leading Enterprises
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left w-max">
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-10 min-w-[140px]"
            >
              <span
                className="text-lg font-semibold text-[#0f2d5c]/40 hover:text-[#1e6fd4] transition-colors whitespace-nowrap select-none"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
