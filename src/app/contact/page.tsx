import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact — XanSAP",
  description: "Get in touch with XanSAP — whether you need SAP talent or you're a consultant looking for your next opportunity.",
};

export default async function ContactPage() {
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  const email = settings?.contactEmail ?? "info@xansap.com";
  const phone = settings?.contactPhone ?? "+44 (0) 123 456 7890";
  const address = settings?.contactAddress ?? "London, United Kingdom";

  return (
    <main className="pt-18">
      <PageHero
        label="Contact"
        title="Get In Touch"
        subtitle="Whether you need SAP talent or you're a consultant looking for your next opportunity — we'd love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#f4f8ff] rounded-2xl p-8 border border-blue-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-6">Contact Details</p>
                <ul className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
                    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
                    { icon: MapPin, label: "Office", value: address, href: null },
                    { icon: Clock, label: "Response Time", value: "Within 1 business day", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                        <Icon className="w-4 h-4 text-[#1e6fd4]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#4a6080] mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm font-medium text-[#0f2d5c]">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0f2d5c] rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">What Happens Next</p>
                <ol className="space-y-4">
                  {[
                    "We review your requirement and match it to consultants in our network.",
                    "We call you within 24 hours to clarify any details.",
                    "We send qualified, pre-screened CVs — typically 2–4 profiles.",
                    "We coordinate interviews and support you through to offer stage.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-blue-200/70">
                      <span className="w-6 h-6 rounded-full bg-[#1e6fd4]/20 text-[#4a9fe8] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
