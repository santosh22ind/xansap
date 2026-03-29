import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const SAP_MODULES = [
  { title: 'SAP FICO', value: 'SAP FICO' },
  { title: 'SAP CO', value: 'SAP CO' },
  { title: 'SAP BPC', value: 'SAP BPC' },
  { title: 'SAP MM', value: 'SAP MM' },
  { title: 'SAP SD', value: 'SAP SD' },
  { title: 'SAP WM / EWM', value: 'SAP WM' },
  { title: 'SAP HCM & SuccessFactors', value: 'SAP HCM & SuccessFactors' },
  { title: 'SAP Payroll', value: 'SAP Payroll' },
  { title: 'SAP Basis', value: 'SAP Basis' },
  { title: 'SAP ABAP', value: 'SAP ABAP' },
  { title: 'SAP S/4HANA', value: 'SAP S/4HANA' },
  { title: 'Other / Multiple', value: 'Other / Multiple' },
]

export const jobListingType = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'module',
      title: 'SAP Module',
      type: 'string',
      options: { list: SAP_MODULES },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'e.g. Frankfurt, Germany or Remote (UK)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Contract', value: 'Contract' },
          { title: 'Permanent', value: 'Permanent' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "6 months" or "Ongoing"',
    }),
    defineField({
      name: 'rate',
      title: 'Rate / Salary',
      type: 'string',
      description: 'e.g. "£500–600/day" or "£55,000–65,000 p.a."',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(600),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide this listing without deleting it',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      active: 'active',
    },
    prepare({ title, subtitle, active }) {
      return {
        title,
        subtitle: `${subtitle}${active === false ? ' — INACTIVE' : ''}`,
      }
    },
  },
})
