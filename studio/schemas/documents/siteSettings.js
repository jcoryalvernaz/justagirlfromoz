export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: Rule => Rule.required().error('Site title is required.')
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your portfolio for search engines and social media.",
      validation: Rule => Rule.required().error('Site description is required.')
    },
    {
      name: "siteUrl",
      type: "url",
      title: "Site URL",
      description: "Important for search engines and social media.",
      validation: Rule => Rule.required().error('Site URL is required.')
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      },
      validation: Rule => Rule.required().error('Site keywords are required.')
    },
    {
      name: "author",
      type: "reference",
      description: "Publish an author and set a reference to them here.",
      title: "Author",
      to: [{ type: "person" }],
      validation: Rule => Rule.required().error('Site author is required.')
    },
    {
      name: "about",
      type: "text",
      description: "Add some text for the About Me section of your site.",
      title: "About Me",
      validation: Rule => Rule.required().error('Site about me is required.')
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [{ type: "socialMedia" }],
      validation: Rule => Rule.required().error('Site social media is required.')
    }
  ]
};
