export default {
  name: "socialMedia",
  title: "Social Media",
  type: "object",
  fields: [
    { name: "platform", type: "string", title: "Platform" },
    { name: "url", type: "url", title: "URL" },
    { name: "image", type: "image", accept: "image/svg", title: "Icon" }
  ]
};
