import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({ label, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-[#0f2d5c] pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1e6fd4]/10 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#4a9fe8]/10 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-blue-200/50 mb-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-blue-200 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-blue-200/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {label && (
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-4">
            {label}
          </p>
        )}

        <h1
          className="text-4xl lg:text-6xl text-white leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-lg text-blue-200/70 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
