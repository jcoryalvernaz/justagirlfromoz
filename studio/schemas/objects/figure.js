export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true
  },
  validation: Rule =>
    Rule.custom(image => {
      if (!image) return true;
      const { dimensions } = decodeAssetId(image.asset._ref);
      return dimensions.width >= 1000 || "Image resolution must be higher";
    }),
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: Rule => Rule.error("You have to fill out the alternative text.").required(),
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption"
    }
  }
};

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

const decodeAssetId = id => {
  const [, assetId, dimensions, format] = pattern.exec(id);
  const [width, height] = dimensions.split("x").map(v => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format
  };
};
