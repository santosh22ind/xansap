"use client";

import { Target, Users, Zap, Globe, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "SAP-Only Focus",
    description:
      "We don't dabble in general IT recruitment. Every consultant on our books is an SAP specialist — vetted, certified and ready to deliver.",
  },
  {
    icon: Users,
    title: "Pre-Vetted Talent Pool",
    description:
      "Our consultants are screened for technical depth, communication skills and cultural fit before they ever reach your desk.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "With an active bench of available SAP consultants, we can typically present shortlisted candidates within 48 hours of your requirement.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We source and place consultants across Europe, the Middle East, Asia Pacific and the Americas — wherever your programme runs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "We stand behind every placement with a replacement guarantee. If it's not the right fit, we make it right — no questions asked.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Your account is managed by a single point of contact who understands your business, not a rotating call centre team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading + intro */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
              Why XanSAP
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              The Difference a Specialist Makes
            </h2>
            <p className="text-lg text-[#4a6080] leading-relaxed mb-8">
              Generalist recruiters fill seats. We build SAP teams. With over 15
              years placing SAP professionals into enterprise environments, we
              know exactly what good looks like — and we won't stop until you
              have it.
            </p>

            {/* Accent block */}
            <div className="bg-[#e8f4fd] rounded-2xl p-6 border-l-4 border-[#1e6fd4]">
              <p className="text-[#0f2d5c] font-medium leading-relaxed">
                "XanSAP doesn't just send CVs — they send the right people.
                Every time."
              </p>
              <p className="text-sm text-[#4a9fe8] mt-3 font-semibold">
                — Programme Director, Global Manufacturing Enterprise
              </p>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group p-6 rounded-2xl bg-[#f4f8ff] hover:bg-[#0f2d5c] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1e6fd4]/10 group-hover:bg-[#1e6fd4]/20 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#1e6fd4] group-hover:text-[#4a9fe8] transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0f2d5c] group-hover:text-white mb-2 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#4a6080] group-hover:text-blue-200/80 leading-relaxed transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
