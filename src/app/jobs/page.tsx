import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import JobsClient from "./JobsClient";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Open SAP Roles — XanSAP",
  description:
    "Contract and permanent SAP opportunities across Europe and the Middle East. New roles added weekly.",
};

export default async function JobsPage() {
  const { data: jobs } = await sanityFetch({ query: JOBS_QUERY });

  return (
    <main className="pt-18">
      <PageHero
        label="Careers"
        title="Open SAP Roles"
        subtitle="Contract and permanent SAP opportunities across Europe and the Middle East. New roles added weekly."
        breadcrumbs={[{ label: "Jobs" }]}
      />
      <JobsClient jobs={jobs ?? []} />
      <CTABanner />
      <Footer />
    </main>
  );
}
