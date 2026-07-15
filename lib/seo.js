export const SITE_NAME = "Accusense Advisors";
export const SITE_URL = "https://accusenseadvisor.com";
export const SITE_DESCRIPTION =
  "Accusense Advisors delivers expert accounting, bookkeeping, tax, advisory, and corporate services to help businesses manage finances, stay compliant, and grow with confidence.";

export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
