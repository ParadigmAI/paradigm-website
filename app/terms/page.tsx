import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms | Paradigm",
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms">
      <p>By using this website you agree to these terms.</p>

      <h2>About this site</h2>
      <p>
        This website describes the services of Paradigm. It is for general information and is not an
        offer or a contract. Work is only agreed in a separate written agreement.
      </p>

      <h2>Accuracy</h2>
      <p>
        We try to keep the content accurate and current, but we do not guarantee that it is complete
        or error free. Results described on this site are specific to the projects described and are
        not a promise of what any other project will achieve.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content of this site belongs to Paradigm or is used with permission. Client names and
        quotes are used with the clients&rsquo; approval. You may not copy the site&rsquo;s content
        without our written permission.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the contact form, attempt to interfere with the site, or submit unlawful or
        misleading content.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, Paradigm is not liable for losses arising from your use of this
        website or reliance on its content.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows when they last changed.</p>
    </LegalPage>
  );
}
