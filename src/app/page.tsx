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

export default function Home() {
  return (
    <main className="pt-18">
      <HeroSection />
      <LogoStrip />
      <ServicesGrid />
      <StatsStrip />
      <WhyChooseUs />
      <Testimonials />
      <JobsPreview />
      <NewsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
