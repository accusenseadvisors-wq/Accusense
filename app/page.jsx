import Hero from "@/components/home/Hero";
import Services from "@/components/shared/Services";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/Reviews";
import CTA from "@/components/shared/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accusense Advisor — Chartered Accounting, Tax & Advisory",
  description:
    "Accusense Advisor delivers expert accounting, bookkeeping, tax, advisory, and corporate services to help businesses manage finances, stay compliant, and grow with confidence.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Reviews />
      <CTA />
    </main>
  );
}
