"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Logo = {
  _id: string;
  name: string;
  logo?: { asset?: { url?: string | null } | null } | null;
  website?: string | null;
};

const FALLBACK_NAMES = [
  "Siemens", "Unilever", "Deutsche Bank", "Shell", "BASF",
  "Vodafone", "Bayer", "Bosch", "SAP SE", "Henkel",
];

type Props = {
  logos: Logo[];
};

export default function LogoStrip({ logos }: Props) {
  const hasLogos = logos.length > 0;
  const items = hasLogos ? [...logos, ...logos] : [...FALLBACK_NAMES, ...FALLBACK_NAMES];

  return (
    <section className="py-14 bg-white border-y border-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8]">
          Trusted by Leading Enterprises
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left w-max">
          {items.map((item, i) =>
            hasLogos ? (
              <div key={i} className="flex items-center justify-center mx-10 min-w-[120px] h-12">
                {(item as Logo).logo?.asset?.url ? (
                  <Image
                    src={urlFor((item as Logo).logo!).height(48).url()}
                    alt={(item as Logo).name}
                    width={120}
                    height={48}
                    className="object-contain max-h-10 opacity-50 hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <span className="text-lg font-semibold text-[#0f2d5c]/40 hover:text-[#1e6fd4] transition-colors whitespace-nowrap select-none" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    {(item as Logo).name}
                  </span>
                )}
              </div>
            ) : (
              <div key={i} className="flex items-center justify-center mx-10 min-w-[140px]">
                <span className="text-lg font-semibold text-[#0f2d5c]/40 hover:text-[#1e6fd4] transition-colors whitespace-nowrap select-none" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  {item as string}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
