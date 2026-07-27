import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import LegalContent, { LegalSection, LegalList } from "@/components/shared/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Accusense Advisor collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        crumb="Privacy Policy"
        title={
          <>
            Your data, handled with <span className="text-accent">care.</span>
          </>
        }
        description="This policy explains what information we collect, why we collect it, and how we protect it."
      />

      <LegalContent updated="15 July 2026">
        <LegalSection heading="1. Introduction">
          <p>
            Accusense Advisor (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides accounting,
            bookkeeping, tax, advisory, and corporate services. This policy explains how we collect,
            use, and safeguard information when you visit accusenseadvisor.com or engage us as a client.
          </p>
        </LegalSection>

        <LegalSection heading="2. Information We Collect">
          <p>
            We collect information you provide directly, such as your name, email address, phone
            number, and any details submitted through our contact form or consultation requests. We
            may also collect basic technical data, like browser type and pages visited, to help us
            understand how the site is used.
          </p>
        </LegalSection>

        <LegalSection heading="3. How We Use Your Information">
          <LegalList
            items={[
              "To respond to enquiries and schedule consultations",
              "To deliver the accounting, tax, and advisory services you request",
              "To send updates relevant to services you've engaged us for",
              "To improve our website and the way we communicate with clients",
            ]}
          />
        </LegalSection>

        <LegalSection heading="4. How We Share Information">
          <p>
            We do not sell your information. We only share it with trusted service providers who help
            us operate, such as our form and email providers, or when required to do so by law or
            regulation.
          </p>
        </LegalSection>

        <LegalSection heading="5. Data Security">
          <p>
            We take reasonable technical and organisational measures to protect the information you
            share with us from unauthorised access, loss, or misuse.
          </p>
        </LegalSection>

        <LegalSection heading="6. Cookies">
          <p>
            Our website may use minimal cookies or similar technologies necessary for basic site
            functionality. We do not currently use cookies for advertising or tracking purposes.
          </p>
        </LegalSection>

        <LegalSection heading="7. Your Rights">
          <p>
            You can ask us at any time to access, correct, or delete the personal information we hold
            about you by contacting us using the details below.
          </p>
        </LegalSection>

        <LegalSection heading="8. Changes to This Policy">
          <p>
            We may update this policy from time to time. Any changes will be posted on this page with
            an updated revision date.
          </p>
        </LegalSection>

        <LegalSection heading="9. Contact Us">
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:contact@accusenseadvisor.com" className="text-accent hover:underline">
              contact@accusenseadvisor.com
            </a>
            .
          </p>
        </LegalSection>
      </LegalContent>

      <CTA />
    </main>
  );
}
