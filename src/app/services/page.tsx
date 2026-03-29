import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { servicesData, getServiceGroups } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "SAP Services — XanSAP",
  description:
    "SAP staffing across every module — FICO, CO, BPC, MM, SD, WM, HCM, SuccessFactors, Basis, ABAP and S/4HANA.",
};

export default function ServicesPage() {
  const groups = getServiceGroups();

  return (
    <main className="pt-18">
      <PageHero
        label="What We Do"
        title="SAP Expertise Across Every Module"
        subtitle="We staff SAP projects exclusively — giving clients access to consultants with deep, module-specific experience, not generalist IT contractors."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services by group */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {Object.entries(groups).map(([group, services]) => (
            <div key={group}>
              <div className="flex items-center gap-4 mb-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8]">
                  {group}
                </p>
                <div className="flex-1 h-px bg-blue-100" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-[#1e6fd4] hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4fd] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="text-3xl mb-4">{service.icon}</div>

                    <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-1">
                      {service.subtitle}
                    </p>
                    <h3
                      className="text-2xl text-[#0f2d5c] mb-3 group-hover:-translate-y-0.5 transition-transform duration-300"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4a6080] leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#1e6fd4] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      View consultants <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SAP-only section */}
      <section className="py-24 bg-[#f4f8ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-4">
                Why SAP Only
              </p>
              <h2
                className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight mb-6"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Specialisation Delivers Better Results
              </h2>
              <div className="space-y-4 text-[#4a6080] leading-relaxed">
                <p>
                  General IT recruitment firms handle SAP as one of hundreds of technology areas. That means the person reviewing your brief may not know the difference between a functional consultant and a technical developer, or between SAP FICO and SAP CO.
                </p>
                <p>
                  At XanSAP, SAP is all we do. Our consultants understand the modules. Our account managers have worked in SAP projects. When we say a candidate has strong COPA experience, we've verified that claim — not just read a CV.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { stat: "11", label: "SAP modules covered" },
                { stat: "500+", label: "Placements delivered" },
                { stat: "48h", label: "Average CV turnaround" },
                { stat: "94%", label: "Assignment completion rate" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-7 border border-blue-100 text-center shadow-sm"
                >
                  <p
                    className="text-4xl text-[#1e6fd4] mb-2"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-sm text-[#4a6080]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
