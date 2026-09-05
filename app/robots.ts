import { MetadataRoute } from "next";

// Statik dışa aktarma (output: "export") için gereklidir
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://munchico.com/sitemap.xml",
  };
}
