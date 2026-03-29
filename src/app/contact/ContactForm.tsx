"use client";

import { useRef, useState } from "react";
import { Send, CheckCircle, Paperclip, X } from "lucide-react";

const modules = [
  "SAP FICO", "SAP CO", "SAP BPC", "SAP MM", "SAP SD", "SAP WM",
  "SAP HCM & SuccessFactors", "SAP Payroll", "SAP Basis", "SAP ABAP",
  "SAP S/4HANA", "Other / Multiple",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", module: "", message: "",
    type: "client" as "client" | "consultant",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      setError("CV file must be under 5 MB.");
      return;
    }
    setError("");
    setCv(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (cv) fd.append("cv", cv);

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[#e8fdf0] flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#1a8a5a]" />
        </div>
        <h2 className="text-3xl text-[#0f2d5c] mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
          Message Received
        </h2>
        <p className="text-[#4a6080] max-w-md leading-relaxed">
          Thank you for reaching out. A member of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex rounded-xl bg-[#f4f8ff] p-1 mb-8 w-fit border border-blue-100">
        {([{ value: "client", label: "I need SAP talent" }, { value: "consultant", label: "I'm a consultant" }] as const).map((opt) => (
          <button key={opt.value} onClick={() => setForm((f) => ({ ...f, type: opt.value }))}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${form.type === opt.value ? "bg-white text-[#0f2d5c] shadow-sm" : "text-[#4a6080] hover:text-[#0f2d5c]"}`}>
            {opt.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">Full Name <span className="text-red-400">*</span></label>
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">Email <span className="text-red-400">*</span></label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com"
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">{form.type === "client" ? "Company" : "Current Employer"}</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder={form.type === "client" ? "Acme Corp" : "SAP SE"}
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+44 7700 123 456"
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0f2d5c] mb-2">SAP Module</label>
          <select name="module" value={form.module} onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm appearance-none">
            <option value="">Select a module...</option>
            {modules.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
            {form.type === "client" ? "Requirement Details" : "Message"} <span className="text-red-400">*</span>
          </label>
          <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
            placeholder={form.type === "client"
              ? "Please describe the role(s) you need to fill — module, level, location, contract or permanent, and any other relevant details."
              : "Tell us about your SAP background, the type of opportunity you're looking for, and your availability."}
            className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-[#0f2d5c] placeholder:text-[#b0c0d8] focus:outline-none focus:border-[#1e6fd4] focus:ring-2 focus:ring-[#1e6fd4]/10 transition-colors text-sm resize-none" />
        </div>

        {form.type === "consultant" && (
          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
              Attach CV <span className="text-[#4a6080] font-normal">(PDF or Word, max 5 MB)</span>
            </label>
            {cv ? (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-blue-200 bg-[#f4f8ff] text-sm text-[#0f2d5c]">
                <Paperclip className="w-4 h-4 text-[#1e6fd4] shrink-0" />
                <span className="flex-1 truncate">{cv.name}</span>
                <button type="button" onClick={() => { setCv(null); if (fileRef.current) fileRef.current.value = ""; }}
                  className="text-[#4a6080] hover:text-red-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-blue-200 bg-[#f4f8ff] text-sm text-[#4a6080] cursor-pointer hover:border-[#1e6fd4] hover:text-[#1e6fd4] transition-colors">
                <Paperclip className="w-4 h-4 shrink-0" />
                <span>Click to upload your CV</span>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
              </label>
            )}
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors shadow-lg shadow-blue-200/40 text-sm disabled:opacity-60">
          {loading ? "Sending…" : <><Send className="w-4 h-4" /> Send Message</>}
        </button>
      </form>
    </>
  );
}
