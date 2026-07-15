import PageHero from "@/components/shared/PageHero";
import WhoWeHelp from "@/components/who-we-help/WhoWeHelp";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import CTA from "@/components/shared/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who We Help",
  description:
    "Financial expertise tailored to every stage of your business — from entrepreneurs to finance leaders and expanding investors.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <main>
      <PageHero
        crumb="Who We Help"
        title={
          <>
            Built for wherever
            <br />
            your business is <span className="text-accent">right now.</span>
          </>
        }
        description="Financial expertise tailored to every stage of your business — from entrepreneurs to finance leaders and expanding investors."
      />
      <WhoWeHelp />
      <WhyChooseUs />
      <CTA
        heading={
          <>
            Wherever you are, we can <span className="text-accent">help you get further.</span>
          </>
        }
        description="Book a free consultation and let's talk about what your business needs right now."
      />
    </main>
  );
}
