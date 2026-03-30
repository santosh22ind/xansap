"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  {
    group: "SAP Finance",
    items: ["SAP FICO", "SAP CO", "SAP BPC"],
  },
  {
    group: "SAP Logistics",
    items: ["SAP MM", "SAP SD", "SAP WM"],
  },
  {
    group: "SAP HR",
    items: ["SAP HCM", "SAP SuccessFactors", "SAP Payroll"],
  },
  {
    group: "SAP Technology",
    items: ["SAP Basis", "SAP ABAP", "SAP S/4HANA"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="XanSAP LLC"
              width={200}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
            >
              About
            </Link>

            {/* Services mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-xl border border-blue-100 p-6 grid grid-cols-2 gap-6">
                  {services.map((group) => (
                    <div key={group.group}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">
                        {group.group}
                      </p>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/services/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="text-sm text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/jobs"
              className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
            >
              Jobs
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1e6fd4] text-white text-sm font-medium hover:bg-[#1a5fba] transition-colors shadow-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#0f2d5c]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-50 px-6 py-6 space-y-4">
          <Link
            href="/"
            className="block text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4]"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4]"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full text-sm font-medium text-[#0f2d5c]"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 pl-4 space-y-4">
                {services.map((group) => (
                  <div key={group.group}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-2">
                      {group.group}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/services/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm text-[#0f2d5c] hover:text-[#1e6fd4]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/jobs"
            className="block text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4]"
            onClick={() => setMobileOpen(false)}
          >
            Jobs
          </Link>
          <Link
            href="/news"
            className="block text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4]"
            onClick={() => setMobileOpen(false)}
          >
            News
          </Link>
          <Link
            href="/contact"
            className="block text-sm font-medium text-[#0f2d5c] hover:text-[#1e6fd4]"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1e6fd4] text-white text-sm font-medium hover:bg-[#1a5fba] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
