import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import ServicesGrid from "@/components/ServicesGrid";
import StatsStrip from "@/components/StatsStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import JobsPreview from "@/components/JobsPreview";
import NewsSection from "@/components/NewsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/live";
import {
  SITE_SETTINGS_QUERY,
  TESTIMONIALS_QUERY,
  CLIENT_LOGOS_QUERY,
  JOBS_PREVIEW_QUERY,
  NEWS_PREVIEW_QUERY,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [
    { data: settings },
    { data: testimonials },
    { data: logos },
    { data: jobs },
    { data: news },
  ] = await Promise.all([
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
    sanityFetch({ query: TESTIMONIALS_QUERY }),
    sanityFetch({ query: CLIENT_LOGOS_QUERY }),
    sanityFetch({ query: JOBS_PREVIEW_QUERY }),
    sanityFetch({ query: NEWS_PREVIEW_QUERY }),
  ]);

  return (
    <main className="pt-18">
      <HeroSection />
      <LogoStrip logos={logos ?? []} />
      <ServicesGrid />
      <StatsStrip stats={settings?.stats ?? []} />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials ?? []} />
      <JobsPreview jobs={jobs ?? []} />
      <NewsSection articles={news ?? []} />
      <CTABanner />
      <Footer />
    </main>
  );
}
