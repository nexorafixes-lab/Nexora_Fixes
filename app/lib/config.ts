// app/lib/config.ts
import type { Metadata } from "next";

export const BASE_URL = "https://nexorafixes.vercel.app";

export const CALENDLY_URL =
  "https://calendly.com/nexorafixes";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nexora Fixes | Digital Marketing Agency",
    template: "%s | Nexora Fixes",
  },
  description:
    "Nexora Fixes is a digital marketing agency helping businesses turn clicks into customers with Meta Ads, Facebook Ads, creatives, web development, Shopify stores, WordPress, and custom web solutions.",
  keywords: [
    "Nexora Fixes",
    "digital marketing agency",
    "growth marketing agency",
    "Meta Ads agency",
    "Facebook Ads agency",
    "creative ads",
    "web development agency",
    "custom web solutions",
    "Shopify ecommerce stores",
    "WordPress development",
    "business growth services",
  ],
  authors: [{ name: "Nexora Fixes" }],
  creator: "Nexora Fixes",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Nexora Fixes",
    title: "Nexora Fixes | From Clicks to Customers",
    description:
      "Digital marketing, paid ads, creatives, websites, Shopify, WordPress, and custom web solutions built to help businesses win more customers.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexora Fixes digital marketing agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Fixes | From Clicks to Customers",
    description:
      "Growth services for businesses: Meta Ads, Facebook Ads, creatives, web development, Shopify, WordPress, and custom web solutions.",
    images: ["/assets/og-image.png"],
  },
};
