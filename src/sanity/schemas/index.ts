// Sanity Studio Schema Definitions for JSA Enterprises

export const authorSchema = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    { name: "name", title: "Author Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio", type: "text" },
  ],
};

export const faqSchema = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "answer", title: "Answer", type: "text", validation: (Rule: any) => Rule.required() },
    {
      name: "category",
      title: "Category Association",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Safety Nets", value: "safety-nets" },
          { title: "Invisible Grills", value: "invisible-grills" },
          { title: "Cloth Hangers", value: "cloth-hangers" },
        ],
      },
    },
  ],
};

export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "mainImage", title: "Main Cover Image", type: "image", options: { hotspot: true } },
    { name: "publishedAt", title: "Published Date", type: "datetime" },
    { name: "body", title: "Rich text Content", type: "array", of: [{ type: "block" }, { type: "image" }] },
    {
      name: "category",
      title: "Service Category tag",
      type: "string",
      options: {
        list: [
          { title: "Safety Nets", value: "safety-nets" },
          { title: "Invisible Grills", value: "invisible-grills" },
          { title: "Cloth Hangers", value: "cloth-hangers" },
        ],
      },
    },
    { name: "faqs", title: "Related FAQs", type: "array", of: [{ type: "reference", to: [{ type: "faq" }] }] },
    { name: "seoTitle", title: "Custom SEO Title", type: "string" },
    { name: "seoDescription", title: "Custom SEO Description", type: "string" },
  ],
};

export const serviceSchema = {
  name: "service",
  title: "Service Page",
  type: "document",
  fields: [
    { name: "name", title: "Service Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
    { name: "title", title: "SEO Title", type: "string" },
    { name: "description", title: "Meta Description", type: "text" },
    { name: "aiOverview", title: "AI Overview (40-60 words)", type: "text" },
    { name: "image", title: "Hero Image", type: "image" },
    { name: "benefits", title: "Benefits Bullet Points", type: "array", of: [{ type: "string" }] },
  ],
};

export const areaSchema = {
  name: "area",
  title: "Area Coverage Page",
  type: "document",
  fields: [
    { name: "name", title: "Area Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
    { name: "overview", title: "Area Overview", type: "text" },
    { name: "apartmentLiving", title: "Apartment living Context", type: "text" },
    { name: "balconySafety", title: "Balcony safety Context", type: "text" },
  ],
};

export const projectSchema = {
  name: "project",
  title: "Project Case Study",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "location", title: "Location in Chennai", type: "string" },
    { name: "date", title: "Completion Date", type: "string" },
    { name: "image", title: "Hero image", type: "image" },
    { name: "description", title: "Brief Description", type: "text" },
    { name: "problem", title: "Problem statement", type: "text" },
    { name: "solution", title: "JSA Solution", type: "text" },
    { name: "materialsUsed", title: "Materials List", type: "array", of: [{ type: "string" }] },
    { name: "process", title: "Installation Steps", type: "array", of: [{ type: "string" }] },
  ],
};

export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Global Site Settings",
  type: "document",
  fields: [
    { name: "businessName", title: "Business Name", type: "string" },
    { name: "phone", title: "Support Phone", type: "string" },
    { name: "email", title: "Support Email", type: "string" },
    { name: "showNewsletter", title: "Enable Newsletter Form", type: "boolean" },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "string" },
        { name: "instagram", title: "Instagram URL", type: "string" },
        { name: "linkedin", title: "LinkedIn URL", type: "string" },
        { name: "youtube", title: "YouTube URL", type: "string" },
      ],
    },
  ],
};

// Export schemas as a single array ready for sanity.config.ts configuration
export const schemaTypes = [
  authorSchema,
  faqSchema,
  postSchema,
  serviceSchema,
  areaSchema,
  projectSchema,
  siteSettingsSchema,
];
