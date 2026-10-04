import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy | Paradigm",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>This policy explains what Paradigm collects through this website and what we do with it.</p>

      <h2>What we collect</h2>
      <p>
        Only what you type into the contact form: your name, email address, company, role and a
        short description of the problem. Nothing else is collected through the form.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site does not set cookies and does not run analytics or advertising trackers. Like any
        website, the server that delivers the pages may keep standard technical logs of requests.
      </p>

      <h2>Who processes the form</h2>
      <p>
        Contact form submissions are processed by Formspree, a third-party form service, and sent to
        us. Formspree handles the data under its own privacy policy.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your message.</li>
        <li>To scope and discuss work with you, if you ask us to.</li>
      </ul>
      <p>We do not sell your data and we do not use it for advertising.</p>

      <h2>How long we keep it</h2>
      <p>We keep form submissions for as long as needed to respond and to run any work that follows.</p>

      <h2>Your choices</h2>
      <p>
        You can ask us to delete your submission at any time. Send a note through the{" "}
        <a href="/#contact" className="link">
          contact form
        </a>{" "}
        and tell us what to remove.
      </p>

      <h2>Links to other sites</h2>
      <p>
        This site links to other websites, such as client websites. We are not responsible for their
        privacy practices.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </LegalPage>
  );
}
