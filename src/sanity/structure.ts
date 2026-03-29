import {
  CaseIcon,
  CogIcon,
  DocumentTextIcon,
  ImageIcon,
  ImagesIcon,
  StarIcon,
  UserIcon,
} from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

// Singleton type — excluded from generic list
const SINGLETONS = ['siteSettings']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('XanSAP Content')
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),

      S.divider(),

      // Hero Slides
      S.listItem()
        .title('Hero Slides')
        .icon(ImagesIcon)
        .child(S.documentTypeList('heroSlide').title('Hero Slides')),

      S.divider(),

      // Jobs
      S.listItem()
        .title('Job Listings')
        .icon(CaseIcon)
        .child(S.documentTypeList('jobListing').title('Job Listings')),

      // News
      S.listItem()
        .title('News Articles')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('newsArticle').title('News Articles')),

      S.divider(),

      // People
      S.listItem()
        .title('Team Members')
        .icon(UserIcon)
        .child(S.documentTypeList('teamMember').title('Team Members')),

      // Testimonials
      S.listItem()
        .title('Testimonials')
        .icon(StarIcon)
        .child(S.documentTypeList('testimonial').title('Testimonials')),

      // Client Logos
      S.listItem()
        .title('Client Logos')
        .icon(ImageIcon)
        .child(S.documentTypeList('clientLogo').title('Client Logos')),

      S.divider(),

      // Remaining (catch-all for anything not listed)
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !SINGLETONS.includes(item.getId()!) &&
          ![
            'heroSlide',
            'jobListing',
            'newsArticle',
            'teamMember',
            'testimonial',
            'clientLogo',
          ].includes(item.getId()!),
      ),
    ])
