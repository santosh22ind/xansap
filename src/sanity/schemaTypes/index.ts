import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { teamMemberType } from './teamMemberType'
import { heroSlideType } from './heroSlideType'
import { jobListingType } from './jobListingType'
import { newsArticleType } from './newsArticleType'
import { testimonialType } from './testimonialType'
import { clientLogoType } from './clientLogoType'
import { siteSettingsType } from './siteSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Shared content types
    blockContentType,
    // Document types
    siteSettingsType,
    heroSlideType,
    jobListingType,
    newsArticleType,
    testimonialType,
    clientLogoType,
    teamMemberType,
  ],
}
