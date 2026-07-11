import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/test/",
        "/temp/",
        "/development/",
        "/api/",
        "/_next/",
      ],
    },
    sitemap: "https://jsaenterprises.com/sitemap.xml",
  };
}
