"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "SAP FICO",
    subtitle: "Finance & Controlling",
    description:
      "General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Centre Accounting and Profit Centre Controlling.",
    href: "/services/sap-fico",
    icon: "💹",
    dark: true,   // row1: dark
  },
  {
    title: "SAP MM",
    subtitle: "Materials Management",
    description:
      "Procurement, inventory management, invoice verification and warehouse management specialists for complex supply chains.",
    href: "/services/sap-mm",
    icon: "📦",
    dark: false,  // row1: light
  },
  {
    title: "SAP SD",
    subtitle: "Sales & Distribution",
    description:
      "Order-to-cash process experts covering sales orders, pricing, billing, shipping and customer master data.",
    href: "/services/sap-sd",
    icon: "🤝",
    dark: true,   // row1: dark
  },
  {
    title: "SAP HCM & SuccessFactors",
    subtitle: "Human Capital Management",
    description:
      "From on-premise SAP HCM to full SuccessFactors cloud suite — payroll, talent, workforce management and EC.",
    href: "/services/sap-hcm",
    icon: "👥",
    dark: false,  // row2: light
  },
  {
    title: "SAP Basis",
    subtitle: "Technology & Infrastructure",
    description:
      "System administration, transport management, security roles, performance tuning and landscape support.",
    href: "/services/sap-basis",
    icon: "⚙️",
    dark: true,   // row2: dark
  },
  {
    title: "SAP S/4HANA",
    subtitle: "Next-Gen ERP",
    description:
      "Greenfield, brownfield and selective migration consultants with deep S/4HANA architecture and conversion experience.",
    href: "/services/sap-s4hana",
    icon: "🚀",
    dark: false,  // row2: light
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);

  if (service.dark) {
    return (
      <Link
        href={service.href}
        className="group relative bg-[#0f2d5c] rounded-2xl p-8 hover:bg-[#1a3d7a] transition-all duration-300 overflow-hidden flex flex-col shadow-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glow on hover */}
        <div
          className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-[#1e6fd4]/20 blur-2xl transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Icon */}
        <div className="text-4xl mb-5">{service.icon}</div>

        <div className={`transition-transform duration-300 ${hovered ? "-translate-y-1" : ""}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-1">
            {service.subtitle}
          </p>
          <h3
            className="text-2xl text-white mb-3"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-blue-200/80 leading-relaxed flex-1">
          {service.description}
        </p>

        <div
          className={`mt-6 flex items-center gap-1.5 text-sm font-medium text-[#4a9fe8] transition-all duration-300 ${
            hovered ? "opacity-100 translate-x-1" : "opacity-0"
          }`}
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={service.href}
      className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-[#1e6fd4] hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 overflow-hidden flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#e8f4fd] to-transparent transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="text-4xl mb-5">{service.icon}</div>

      <div className={`transition-transform duration-300 ${hovered ? "-translate-y-1" : ""}`}>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-1">
          {service.subtitle}
        </p>
        <h3
          className="text-2xl text-[#0f2d5c] mb-3"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          {service.title}
        </h3>
      </div>

      <p className="text-sm text-[#4a6080] leading-relaxed flex-1">
        {service.description}
      </p>

      <div
        className={`mt-6 flex items-center gap-1.5 text-sm font-medium text-[#1e6fd4] transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-1" : "opacity-0"
        }`}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#f4f8ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
            What We Do
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight mb-5"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            SAP Expertise Across Every Module
          </h2>
          <p className="text-lg text-[#4a6080] leading-relaxed">
            We specialise exclusively in SAP staffing — giving you access to
            consultants with deep, module-specific experience rather than
            generalist IT contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#1e6fd4] text-[#1e6fd4] font-medium hover:bg-[#1e6fd4] hover:text-white transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
