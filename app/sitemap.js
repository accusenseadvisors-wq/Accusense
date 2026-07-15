import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/accounting-bookkeeping", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/taxation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/corporate-secretarial", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/advisory", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/erp-consultancy", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/business-valuation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/who-we-help", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
