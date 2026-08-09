import { Instrument_Sans, Manrope } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/seo";

const instrumentSans = Instrument_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_TITLE = "Accusense Advisor — Chartered Accounting, Tax & Advisory";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "chartered accountants",
    "accounting services",
    "bookkeeping services",
    "tax consultants Pakistan",
    "corporate secretarial services",
    "business advisory",
    "ERP consultancy",
    "business valuation",
    "SECP compliance",
    "FBR tax filing",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Accounting Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/ACCUSENSE-ADVISOR.png`,
  image: `${SITE_URL}/ACCUSENSE-ADVISOR.png`,
  description: SITE_DESCRIPTION,
  email: "contact@accusenseadvisor.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  areaServed: "PK",
  sameAs: ["https://www.linkedin.com/company/accusense-advisor"],
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${manrope.variable} min-h-full flex flex-col font-body antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
