import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  // Singleton — enforced via Studio structure
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats Counter',
      description: 'Numbers shown in the stats strip on the homepage',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. "500" or "20"', validation: (rule) => rule.required() }),
            defineField({ name: 'suffix', title: 'Suffix', type: 'string', description: 'e.g. "+" or "yrs"' }),
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "SAP Placements"', validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Office Address',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'twitterUrl',
      title: 'X / Twitter URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: {
    select: { title: 'contactEmail' },
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
