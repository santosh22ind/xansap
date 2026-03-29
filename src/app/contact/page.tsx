"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const modules = [
  "SAP FICO",
  "SAP CO",
  "SAP BPC",
  "SAP MM",
  "SAP SD",
  "SAP WM",
  "SAP HCM & SuccessFactors",
  "SAP Payroll",
  "SAP Basis",
  "SAP ABAP",
  "SAP S/4HANA",
  "Other / Multiple",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    module: "",
    message: "",
    type: "client", // client | consultant
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Form submission will be wired to Resend / API route in a later step
    setSubmitted(true);
  }

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
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e8fdf0] flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#1a8a5a]" />
                  </div>
                  <h2
                    className="text-3xl text-[#0f2d5c] mb-3"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    Message Received
                  </h2>
                  <p className="text-[#4a6080] max-w-md leading-relaxed">
                    Thank you for reaching out. A member of our team will be in touch within one
                    business day.
                  </p>
                </div>
              ) : (
                <>
                  {/* Type toggle */}
                  <div className="flex rounded-xl bg-[#f4f8ff] p-1 mb-8 w-fit border border-blue-100">
                    {(
                      [
                        { value: "client", label: "I need SAP talent" },
                        { value: "consultant", label: "I'm a consultant" },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setForm((f) => ({ ...f, type: opt.value }))}
                        className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          form.type === opt.value
                            ? "bg-white text-[#0f2d5c] shadow-sm"
                            : "text-[#4a6080] hover:text-[#0f2d5c]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
                          {form.type === "client" ? "Company" : "Current Employer"}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder={form.type === "client" ? "Acme Corp" : "SAP SE"}
                          className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+44 7700 123 456"
                          className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
                        SAP Module
                      </label>
                      <select
                        name="module"
                        value={form.module}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm appearance-none"
                      >
                        <option value="">Select a module...</option>
                        {modules.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
                        {form.type === "client" ? "Requirement Details" : "Message"}{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={
                          form.type === "client"
                            ? "Please describe the role(s) you need to fill — module, level, location, contract or permanent, and any other relevant details."
                            : "Tell us about your SAP background, the type of opportunity you're looking for, and your availability."
                        }
                        className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors shadow-lg shadow-blue-200/40 text-sm"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div className="bg-[#f4f8ff] rounded-2xl p-8 border border-blue-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-6">
                  Contact Details
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Mail className="w-4 h-4 text-[#1e6fd4]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a6080] mb-0.5">Email</p>
                      <a
                        href="mailto:info@xansap.com"
                        className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
                      >
                        info@xansap.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Phone className="w-4 h-4 text-[#1e6fd4]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a6080] mb-0.5">Phone</p>
                      <a
                        href="tel:+441234567890"
                        className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
                      >
                        +44 (0) 123 456 7890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <MapPin className="w-4 h-4 text-[#1e6fd4]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a6080] mb-0.5">Office</p>
                      <p className="text-sm font-medium text-[#0f2d5c]">London, United Kingdom</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Clock className="w-4 h-4 text-[#1e6fd4]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a6080] mb-0.5">Response Time</p>
                      <p className="text-sm font-medium text-[#0f2d5c]">Within 1 business day</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What to expect */}
              <div className="bg-[#0f2d5c] rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">
                  What Happens Next
                </p>
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
