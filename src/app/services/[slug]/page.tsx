import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { servicesData, getServiceBySlug } from "@/lib/services-data";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} Staffing — XanSAP`,
    description: `${service.description} Specialist SAP ${service.title} consultants placed by XanSAP.`,
  };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Related services: others in the same group
  const related = servicesData.filter(
    (s) => s.group === service.group && s.slug !== service.slug
  );

  return (
    <main className="pt-18">
      <PageHero
        label={service.group}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-4">
                {service.subtitle}
              </p>
              <h2
                className="text-4xl text-[#0f2d5c] leading-tight mb-8"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Our {service.title} Practice
              </h2>
              <div className="space-y-5 text-[#4a6080] leading-relaxed mb-12">
                {service.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Typical roles */}
              <div>
                <h3
                  className="text-2xl text-[#0f2d5c] mb-6"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Typical Roles We Place
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.typicalRoles.map((role) => (
                    <li key={role} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1e6fd4] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#4a6080]">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Key skills */}
              <div className="bg-[#f4f8ff] rounded-2xl p-7 border border-blue-100">
                <h3
                  className="text-xl text-[#0f2d5c] mb-5"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Key Skills & Areas
                </h3>
                <ul className="space-y-2.5">
                  {service.keySkills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-[#4a6080]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e6fd4] shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="bg-[#0f2d5c] rounded-2xl p-7">
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Need a {service.title} Consultant?
                </h3>
                <p className="text-sm text-blue-200/70 mb-6 leading-relaxed">
                  Tell us your requirement and we'll come back within 24 hours with qualified profiles.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e6fd4] text-white text-sm font-medium hover:bg-[#1a5fba] transition-colors w-full justify-center"
                >
                  Submit a Requirement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 bg-[#f4f8ff]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-8">
              Also in {service.group}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-blue-100 hover:border-[#1e6fd4] hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-1">
                      {s.subtitle}
                    </p>
                    <h4
                      className="text-lg text-[#0f2d5c] mb-1"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#4a6080] line-clamp-2">{s.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1e6fd4] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <Footer />
    </main>
  );
}
