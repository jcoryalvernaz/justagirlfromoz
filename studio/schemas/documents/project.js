import { format } from "date-fns";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required().error('Project title is required.')
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required().error('Project slug is required.')
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime",
      validation: Rule => Rule.required().error('Project publish date is required.')
    },
    {
      name: "description",
      title: "Description",
      description: "Describe your project for search engines and social media.",
      type: "text",
      validation: Rule => Rule.required().error('Project title is required.')
    },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "projectMember" }],
      validation: Rule => Rule.required().error('Project member(s) are required.')
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure",
      validation: Rule => Rule.required().error('Project main image is required.')
    },
    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "figure" }],
      validation: Rule => Rule.required().error('Project photos are required.')
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: Rule => Rule.required().error('Project categories are required.')
    },
    {
      name: "body",
      title: "Body",
      type: "projectPortableText"
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "MM-DD-YY");
      return {
        title,
        media,
        subtitle: publishedAt ? `Published: ${dateSegment}` : "Missing publishing date"
      };
    }
  }
};
