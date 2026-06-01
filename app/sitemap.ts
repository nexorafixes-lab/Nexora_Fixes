import type { MetadataRoute } from "next";

import { BASE_URL } from "@/app/lib/config";

const routes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/digital-marketing",
  "/services/website-and-ecommerce",
  "/services/graphic-design-and-branding",
  "/services/social-media-management",
  "/services/seo",
  "/services/software-development",
  "/services/accounts-and-finance",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.8,
  }));
}
