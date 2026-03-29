import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

type Article = {
  _id: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  category: string | null;
  publishedAt: string | null;
  mainImage?: { asset?: { url?: string | null } | null; alt?: string | null } | null;
  author?: { name: string | null; role: string | null } | null;
};

const categoryColors: Record<string, string> = {
  "Market Insight": "bg-[#e8f4fd] text-[#1e6fd4]",
  "SAP HR": "bg-[#f0e8fd] text-[#7c3aed]",
  "Career Advice": "bg-[#fdf4e8] text-[#c2760a]",
  Technology: "bg-[#e8fdf0] text-[#1a8a5a]",
  "Company News": "bg-[#fde8f0] text-[#c21a5a]",
};

type Props = {
  articles: Article[];
};

export default function NewsSection({ articles }: Props) {
  if (articles.length === 0) {
    return (
      <section className="py-24 bg-[#f4f8ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">Insights</p>
              <h2 className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
                News & Perspectives
              </h2>
            </div>
            <Link href="/news" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1e6fd4] text-[#1e6fd4] font-medium hover:bg-[#1e6fd4] hover:text-white transition-colors text-sm">
              All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-[#4a6080] text-sm">No articles published yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#f4f8ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">Insights</p>
            <h2 className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
              News & Perspectives
            </h2>
          </div>
          <Link href="/news" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1e6fd4] text-[#1e6fd4] font-medium hover:bg-[#1e6fd4] hover:text-white transition-colors text-sm">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {articles.map((article) => {
            const imgUrl = article.mainImage
              ? urlFor(article.mainImage).width(600).height(340).fit("crop").url()
              : null;
            return (
              <Link
                key={article._id}
                href={`/news/${article.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 bg-white"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1e6fd4] to-[#0f2d5c] overflow-hidden">
                  {imgUrl ? (
                    <Image src={imgUrl} alt={article.mainImage?.alt ?? article.title ?? ""} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/30" />
                        <div className="absolute bottom-2 left-4 w-20 h-20 rounded-full bg-white/20" />
                      </div>
                    </>
                  )}
                  {article.category && (
                    <div className="absolute bottom-4 left-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] ?? "bg-white/20 text-white"} bg-white`}>
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-7">
                  {article.publishedAt && (
                    <div className="flex items-center gap-1 text-xs text-[#4a6080] mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                  )}
                  <h3 className="text-lg text-[#0f2d5c] group-hover:text-[#1e6fd4] leading-snug mb-3 transition-colors duration-300" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-sm text-[#4a6080] leading-relaxed flex-1 line-clamp-3">{article.excerpt}</p>
                  )}
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#1e6fd4] group-hover:gap-2.5 transition-all duration-300">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
