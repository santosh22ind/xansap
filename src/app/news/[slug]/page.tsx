import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { newsArticles, getArticleBySlug } from "@/lib/news-data";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — XanSAP`,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "Market Insight": "bg-[#e8f4fd] text-[#1e6fd4]",
  "SAP HR": "bg-[#f0e8fd] text-[#7c3aed]",
  "Career Advice": "bg-[#fdf4e8] text-[#c2760a]",
  Technology: "bg-[#e8fdf0] text-[#1a8a5a]",
};

export default async function ArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = newsArticles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 3);

  return (
    <main className="pt-18">
      {/* Article hero */}
      <section className="relative bg-[#0f2d5c] pt-32 pb-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1e6fd4]/10 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-blue-200/60 hover:text-blue-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                categoryColors[article.category] ?? "bg-[#e8f4fd] text-[#1e6fd4]"
              }`}
            >
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-blue-200/50">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-xs text-blue-200/50">{article.date}</span>
          </div>

          <h1
            className="text-4xl lg:text-5xl text-white leading-tight max-w-4xl mb-8"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {article.title}
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1e6fd4]/30 flex items-center justify-center text-white text-sm font-bold">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{article.author.name}</p>
              <p className="text-xs text-blue-200/50">{article.author.role}</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-[16/7] rounded-t-3xl overflow-hidden shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Body */}
            <div className="lg:col-span-2">
              <p className="text-xl text-[#4a6080] leading-relaxed font-medium mb-8 border-l-4 border-[#1e6fd4] pl-6">
                {article.excerpt}
              </p>
              <div className="prose prose-lg max-w-none">
                {article.body.map((para, i) => (
                  <p key={i} className="text-[#4a6080] leading-relaxed mb-6">
                    {para}
                  </p>
                ))}
              </div>

              {/* Author card */}
              <div className="mt-14 pt-10 border-t border-blue-100 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0f2d5c] flex items-center justify-center text-white text-xl font-bold shrink-0">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-xl text-[#0f2d5c] mb-1"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {article.author.name}
                  </p>
                  <p className="text-sm text-[#4a9fe8] font-medium mb-2">{article.author.role}</p>
                  <p className="text-sm text-[#4a6080]">
                    XanSAP specialist. Writing on the SAP market, talent and technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact CTA */}
              <div className="bg-[#0f2d5c] rounded-2xl p-7">
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Looking for SAP Talent?
                </h3>
                <p className="text-sm text-blue-200/70 mb-6 leading-relaxed">
                  Submit your requirement and we'll respond within 24 hours with qualified profiles.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e6fd4] text-white text-sm font-medium hover:bg-[#1a5fba] transition-colors w-full justify-center"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">
                    Related Articles
                  </p>
                  <div className="space-y-5">
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/news/${a.slug}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <Image src={a.image} alt={a.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm text-[#0f2d5c] leading-snug group-hover:text-[#1e6fd4] transition-colors line-clamp-2"
                            style={{ fontFamily: "var(--font-dm-serif)" }}
                          >
                            {a.title}
                          </p>
                          <p className="text-xs text-[#4a6080] mt-1">{a.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Browse all */}
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e6fd4] hover:text-[#0f2d5c] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
