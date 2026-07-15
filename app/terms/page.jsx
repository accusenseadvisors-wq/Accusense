import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/shared/CTA";
import LegalContent, { LegalSection } from "@/components/shared/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of the Accusense Advisors website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <PageHero
        crumb="Terms of Service"
        title={
          <>
            The fine print, kept <span className="text-accent">plain.</span>
          </>
        }
        description="These terms govern your use of our website. Our client services are separately governed by a signed engagement letter."
      />

      <LegalContent updated="15 July 2026">
        <LegalSection heading="1. Acceptance of Terms">
          <p>
            By accessing or using accusenseadvisor.com, you agree to these terms. If you do not agree,
            please do not use this website.
          </p>
        </LegalSection>

        <LegalSection heading="2. Use of This Website">
          <p>
            This website is provided for general information about Accusense Advisors and our services.
            You agree to use it lawfully and not to misuse it, attempt to disrupt it, or copy its
            content without permission.
          </p>
        </LegalSection>

        <LegalSection heading="3. Our Services">
          <p>
            Content on this website, including service descriptions, is general information and is not
            a substitute for tailored professional advice. Actual accounting, tax, and advisory
            services are provided under a separate, signed engagement letter that sets out the specific
            scope, fees, and responsibilities for each client.
          </p>
        </LegalSection>

        <LegalSection heading="4. Intellectual Property">
          <p>
            The Accusense Advisors name, logo, and the content, design, and layout of this website are
            our property and may not be reproduced without prior written consent.
          </p>
        </LegalSection>

        <LegalSection heading="5. Limitation of Liability">
          <p>
            This website is provided &quot;as is&quot;. We are not liable for any loss arising from
            reliance on general information published here without a formal engagement with our firm.
          </p>
        </LegalSection>

        <LegalSection heading="6. Third-Party Links">
          <p>
            Our site links to third-party resources such as the FBR, SECP, and PSEB. We are not
            responsible for the content or practices of these external websites.
          </p>
        </LegalSection>

        <LegalSection heading="7. Governing Law">
          <p>These terms are governed by the laws of Pakistan.</p>
        </LegalSection>

        <LegalSection heading="8. Changes to These Terms">
          <p>
            We may update these terms from time to time. Continued use of the website after changes are
            posted means you accept the updated terms.
          </p>
        </LegalSection>

        <LegalSection heading="9. Contact Us">
          <p>
            Questions about these terms can be sent to{" "}
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
