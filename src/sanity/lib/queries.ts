import { defineQuery } from 'next-sanity'

// ─── Hero Slides ─────────────────────────────────────────────────────────────

export const HERO_SLIDES_QUERY = defineQuery(`
  *[_type == "heroSlide" && active == true] | order(order asc) {
    _id,
    heading,
    subheading,
    ctaPrimary,
    ctaSecondary,
    image {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    }
  }
`)

// ─── Jobs ─────────────────────────────────────────────────────────────────────

export const JOBS_QUERY = defineQuery(`
  *[_type == "jobListing" && active == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    module,
    location,
    type,
    duration,
    rate,
    description,
    publishedAt
  }
`)

export const JOBS_PREVIEW_QUERY = defineQuery(`
  *[_type == "jobListing" && active == true] | order(publishedAt desc) [0...4] {
    _id,
    title,
    "slug": slug.current,
    module,
    location,
    type,
    duration,
    rate
  }
`)

// ─── News Articles ────────────────────────────────────────────────────────────

export const NEWS_ARTICLES_QUERY = defineQuery(`
  *[_type == "newsArticle" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    mainImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    },
    author->{ name, role }
  }
`)

export const NEWS_PREVIEW_QUERY = defineQuery(`
  *[_type == "newsArticle" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    mainImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    },
    author->{ name, role }
  }
`)

export const NEWS_ARTICLE_QUERY = defineQuery(`
  *[_type == "newsArticle" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    mainImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    },
    author->{ name, role, photo { asset->{ url }, alt } },
    body
  }
`)

export const NEWS_SLUGS_QUERY = defineQuery(`
  *[_type == "newsArticle" && defined(slug.current)] {
    "slug": slug.current
  }
`)

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial" && active == true] | order(order asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company
  }
`)

// ─── Client Logos ─────────────────────────────────────────────────────────────

export const CLIENT_LOGOS_QUERY = defineQuery(`
  *[_type == "clientLogo" && active == true] | order(order asc) {
    _id,
    name,
    logo {
      asset->{ _id, url, metadata { lqip, dimensions } },
    },
    website
  }
`)

// ─── Team Members ─────────────────────────────────────────────────────────────

export const TEAM_MEMBERS_QUERY = defineQuery(`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    }
  }
`)

// ─── Site Settings ────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0] {
    stats,
    contactEmail,
    contactPhone,
    contactAddress,
    linkedinUrl,
    twitterUrl
  }
`)
