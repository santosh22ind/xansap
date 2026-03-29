import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWS_ARTICLES_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "News & Insights — XanSAP",
  description: "SAP market insights, career advice and industry analysis from the XanSAP team.",
};

const categoryColors: Record<string, string> = {
  "Market Insight": "bg-[#e8f4fd] text-[#1e6fd4]",
  "SAP HR": "bg-[#f0e8fd] text-[#7c3aed]",
  "Career Advice": "bg-[#fdf4e8] text-[#c2760a]",
  Technology: "bg-[#e8fdf0] text-[#1a8a5a]",
  "Company News": "bg-[#fde8f0] text-[#c21a5a]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export default async function NewsPage() {
  const { data: articles } = await sanityFetch({ query: NEWS_ARTICLES_QUERY });

  if (!articles || articles.length === 0) {
    return (
      <main className="pt-18">
        <PageHero
          label="News & Insights"
          title="SAP Market Intelligence"
          subtitle="Perspectives from the XanSAP team on the SAP staffing market, career advice and technology trends."
          breadcrumbs={[{ label: "News" }]}
        />
        <section className="py-24 bg-white text-center">
          <p className="text-[#4a6080]">No articles published yet. Check back soon.</p>
        </section>
        <Footer />
      </main>
    );
  }

  const [featured, ...rest] = articles;

  const featuredImageUrl = featured.mainImage
    ? urlFor(featured.mainImage).width(1200).height(800).fit("crop").url()
    : null;

  return (
    <main className="pt-18">
      <PageHero
        label="News & Insights"
        title="SAP Market Intelligence"
        subtitle="Perspectives from the XanSAP team on the SAP staffing market, career advice and technology trends."
        breadcrumbs={[{ label: "News" }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured article */}
          <Link
            href={`/news/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 mb-16"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto bg-[#e8f4fd]">
              {featuredImageUrl && (
                <Image
                  src={featuredImageUrl}
                  alt={featured.mainImage?.alt ?? featured.title ?? ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
            <div className="bg-white p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                {featured.category && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-[#e8f4fd] text-[#1e6fd4]"}`}>
                    {featured.category}
                  </span>
                )}
              </div>
              <h2
                className="text-3xl lg:text-4xl text-[#0f2d5c] leading-tight mb-4 group-hover:text-[#1e6fd4] transition-colors"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-[#4a6080] leading-relaxed mb-6">{featured.excerpt}</p>
              )}
              <div className="flex items-center justify-between">
                <div>
                  {featured.author?.name && (
                    <p className="text-sm font-medium text-[#0f2d5c]">{featured.author.name}</p>
                  )}
                  {featured.publishedAt && (
                    <p className="text-xs text-[#4a6080]">{formatDate(featured.publishedAt)}</p>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1e6fd4] group-hover:translate-x-1 transition-transform">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Article grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article) => {
                const imgUrl = article.mainImage
                  ? urlFor(article.mainImage).width(800).height(450).fit("crop").url()
                  : null;
                return (
                  <Link
                    key={article._id}
                    href={`/news/${article.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 hover:border-[#1e6fd4]/30 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#e8f4fd]">
                      {imgUrl && (
                        <Image
                          src={imgUrl}
                          alt={article.mainImage?.alt ?? article.title ?? ""}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-7">
                      <div className="flex items-center gap-3 mb-4">
                        {article.category && (
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] ?? "bg-[#e8f4fd] text-[#1e6fd4]"}`}>
                            {article.category}
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-xl text-[#0f2d5c] leading-snug mb-3 group-hover:text-[#1e6fd4] transition-colors flex-1"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                      >
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-sm text-[#4a6080] leading-relaxed mb-5 line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-auto pt-5 border-t border-blue-50">
                        <div>
                          {article.author?.name && (
                            <p className="text-xs font-medium text-[#0f2d5c]">{article.author.name}</p>
                          )}
                          {article.publishedAt && (
                            <p className="text-xs text-[#4a6080]">{formatDate(article.publishedAt)}</p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#1e6fd4] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
