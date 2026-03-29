import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

const services = [
  { label: "SAP FICO", href: "/services/sap-fico" },
  { label: "SAP MM", href: "/services/sap-mm" },
  { label: "SAP SD", href: "/services/sap-sd" },
  { label: "SAP HCM & SuccessFactors", href: "/services/sap-hcm" },
  { label: "SAP Basis", href: "/services/sap-basis" },
  { label: "SAP S/4HANA", href: "/services/sap-s4hana" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Open Roles", href: "/jobs" },
  { label: "News & Insights", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default async function Footer() {
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  const email = settings?.contactEmail ?? "info@xansap.com";
  const phone = settings?.contactPhone ?? "+44 (0) 123 456 7890";
  const address = settings?.contactAddress ?? "London, United Kingdom";
  const linkedinUrl = settings?.linkedinUrl ?? "#";
  const twitterUrl = settings?.twitterUrl ?? "#";

  return (
    <footer className="bg-[#0a1f3f]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white rounded-xl px-3 py-2">
                <Image
                  src="/logo.jpeg"
                  alt="XanSAP LLC"
                  width={160}
                  height={64}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-blue-200/60 leading-relaxed mb-6">
              Specialist SAP staffing consultants. Connecting enterprises with
              the SAP talent they need to deliver.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1e6fd4] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-blue-200 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1e6fd4] flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 text-blue-200 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`mailto:${email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1e6fd4] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-blue-200" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-blue-200/60 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-blue-200/60 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">
              Get In Touch
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200/60">
                <Mail className="w-4 h-4 text-[#4a9fe8] mt-0.5 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200/60">
                <Phone className="w-4 h-4 text-[#4a9fe8] mt-0.5 shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200/60">
                <MapPin className="w-4 h-4 text-[#4a9fe8] mt-0.5 shrink-0" />
                <span>{address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/40">
          <p>© {new Date().getFullYear()} XanSAP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
