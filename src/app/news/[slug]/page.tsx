import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWS_ARTICLE_QUERY, NEWS_ARTICLES_QUERY, NEWS_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: NEWS_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return (data ?? []).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const { data } = await sanityFetch({ query: NEWS_ARTICLE_QUERY, params: { slug }, stega: false });
  if (!data) return {};
  return {
    title: `${data.title} — XanSAP`,
    description: data.excerpt ?? undefined,
  };
}

const categoryColors: Record<string, string> = {
  "Market Insight": "bg-[#e8f4fd] text-[#1e6fd4]",
  "SAP HR": "bg-[#f0e8fd] text-[#7c3aed]",
  "Career Advice": "bg-[#fdf4e8] text-[#c2760a]",
  Technology: "bg-[#e8fdf0] text-[#1a8a5a]",
  "Company News": "bg-[#fde8f0] text-[#c21a5a]",
};

export default async function ArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const [{ data: article }, { data: allArticles }] = await Promise.all([
    sanityFetch({ query: NEWS_ARTICLE_QUERY, params: { slug } }),
    sanityFetch({ query: NEWS_ARTICLES_QUERY }),
  ]);

  if (!article) notFound();

  const related = (allArticles ?? [])
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const heroImageUrl = article.mainImage
    ? urlFor(article.mainImage).width(1600).height(700).fit("crop").url()
    : null;

  return (
    <main className="pt-18">
      {/* Hero */}
      <section className="relative bg-[#0f2d5c] pt-32 pb-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1e6fd4]/10 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-blue-200/60 hover:text-blue-200 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          <div className="flex items-center gap-3 mb-6">
            {article.category && (
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[article.category] ?? "bg-[#e8f4fd] text-[#1e6fd4]"}`}>
                {article.category}
              </span>
            )}
            {article.publishedAt && (
              <span className="text-xs text-blue-200/50">
                {new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            )}
          </div>

          <h1
            className="text-4xl lg:text-5xl text-white leading-tight max-w-4xl mb-8"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {article.title}
          </h1>

          {article.author && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1e6fd4]/30 flex items-center justify-center text-white text-sm font-bold">
                {article.author.name?.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{article.author.name}</p>
                {article.author.role && (
                  <p className="text-xs text-blue-200/50">{article.author.role}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Hero image */}
        {heroImageUrl && (
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative aspect-[16/7] rounded-t-3xl overflow-hidden shadow-2xl">
              <Image src={heroImageUrl} alt={article.mainImage?.alt ?? article.title ?? ""} fill className="object-cover" priority />
            </div>
          </div>
        )}
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Article content */}
            <div className="lg:col-span-2">
              {article.excerpt && (
                <p className="text-xl text-[#4a6080] leading-relaxed font-medium mb-8 border-l-4 border-[#1e6fd4] pl-6">
                  {article.excerpt}
                </p>
              )}
              {article.body && (
                <div className="prose prose-lg max-w-none text-[#4a6080] leading-relaxed [&_p]:mb-6 [&_h2]:text-[#0f2d5c] [&_h3]:text-[#0f2d5c] [&_strong]:text-[#0f2d5c]">
                  <PortableText value={article.body} />
                </div>
              )}

              {/* Author card */}
              {article.author && (
                <div className="mt-14 pt-10 border-t border-blue-100 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#0f2d5c] flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {article.author.name?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xl text-[#0f2d5c] mb-1" style={{ fontFamily: "var(--font-dm-serif)" }}>
                      {article.author.name}
                    </p>
                    {article.author.role && (
                      <p className="text-sm text-[#4a9fe8] font-medium mb-2">{article.author.role}</p>
                    )}
                    <p className="text-sm text-[#4a6080]">XanSAP specialist. Writing on the SAP market, talent and technology.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-[#0f2d5c] rounded-2xl p-7">
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Looking for SAP Talent?
                </h3>
                <p className="text-sm text-blue-200/70 mb-6 leading-relaxed">
                  Submit your requirement and we'll respond within 24 hours with qualified profiles.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e6fd4] text-white text-sm font-medium hover:bg-[#1a5fba] transition-colors w-full justify-center">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {related.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a9fe8] mb-5">Related Articles</p>
                  <div className="space-y-5">
                    {related.map((a) => {
                      const thumbUrl = a.mainImage
                        ? urlFor(a.mainImage).width(120).height(120).fit("crop").url()
                        : null;
                      return (
                        <Link key={a._id} href={`/news/${a.slug}`} className="group flex gap-4 items-start">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#e8f4fd]">
                            {thumbUrl && <Image src={thumbUrl} alt={a.mainImage?.alt ?? a.title ?? ""} fill className="object-cover" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-[#0f2d5c] leading-snug group-hover:text-[#1e6fd4] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-dm-serif)" }}>
                              {a.title}
                            </p>
                            {a.publishedAt && (
                              <p className="text-xs text-[#4a6080] mt-1">
                                {new Date(a.publishedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-[#1e6fd4] hover:text-[#0f2d5c] transition-colors">
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
