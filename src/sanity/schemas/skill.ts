import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Lucide icon name (e.g. 'search', 'bar-chart')",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "SEO", value: "SEO" },
          { title: "Content", value: "Content" },
          { title: "Analytics", value: "Analytics" },
          { title: "Tools", value: "Tools" },
        ],
      },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
