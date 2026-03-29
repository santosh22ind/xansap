import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Award, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — XanSAP",
  description:
    "Learn about XanSAP — specialist SAP staffing consultants connecting enterprises with the SAP talent they need.",
};

const values = [
  {
    icon: Target,
    title: "SAP-Only Focus",
    description:
      "We work exclusively in SAP. Every consultant on our books, every client engagement, every hire — all SAP. That depth of focus translates into faster placements and better fits.",
  },
  {
    icon: Users,
    title: "Consultant-First Culture",
    description:
      "We treat the consultants we place as partners, not commodities. Long-term relationships mean we know their strengths, availability and ambitions — so we match well.",
  },
  {
    icon: Award,
    title: "Quality Over Volume",
    description:
      "We send you the right two or three CVs, not twenty that vaguely fit. We qualify every candidate before they reach you, saving your team time and frustration.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our network spans Europe, the Middle East, Asia and beyond. Whether your project is on-site in Frankfurt or remote across continents, we have coverage.",
  },
];

const team = [
  {
    name: "Alexandra Nkosi",
    role: "Managing Director",
    bio: "15 years in SAP recruitment. Former SAP FICO consultant turned headhunter — she understands both sides of every placement.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Whitfield",
    role: "Head of Logistics Practice",
    bio: "Specialist in SAP MM, SD and WM. Built and placed project teams for five Fortune 500 S/4HANA migrations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Head of Finance Practice",
    bio: "Dedicated SAP FICO and BPC recruiter with a background in Big Four consulting. Knows the technical detail behind every CV she sends.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Mensah",
    role: "Technology & HR Practice Lead",
    bio: "Covers SAP Basis, ABAP and SuccessFactors. Known for sourcing hard-to-find technical profiles with minimal lead time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-18">
      <PageHero
        label="Our Story"
        title="The SAP Staffing Specialists"
        subtitle="XanSAP was built by SAP people, for SAP people. We exist to make world-class SAP talent accessible to the enterprises that need it most."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-4">
                Who We Are
              </p>
              <h2
                className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight mb-6"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Born from the SAP World
              </h2>
              <div className="space-y-5 text-[#4a6080] leading-relaxed">
                <p>
                  XanSAP was founded by former SAP consultants who grew frustrated watching enterprises struggle to find the right talent — and watching good consultants miss the right opportunities — because most recruitment firms didn't understand SAP deeply enough to bridge the gap.
                </p>
                <p>
                  So we built the firm we always wished existed. One where the people you speak to understand the difference between a functional FICO consultant and an S/4HANA migration lead. Where "SAP experience" means something specific, not just a keyword on a CV.
                </p>
                <p>
                  Today we work with enterprises across Europe and the Middle East, placing contract and permanent SAP specialists at every level — from junior configuration support to programme directors and solution architects.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors shadow-sm"
                >
                  Talk to Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-blue-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="XanSAP team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stat card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-blue-50">
                <p
                  className="text-4xl text-[#1e6fd4] mb-1"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  500+
                </p>
                <p className="text-sm text-[#4a6080]">SAP placements made</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f4f8ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
              Our Principles
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-blue-100 hover:shadow-lg hover:border-[#1e6fd4]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f4fd] flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-[#1e6fd4]" />
                </div>
                <h3
                  className="text-xl text-[#0f2d5c] mb-3"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[#4a6080] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
              The People
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative rounded-2xl overflow-hidden aspect-square mb-5 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p
                  className="text-xl text-[#0f2d5c] mb-1"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {member.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#4a6080] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
