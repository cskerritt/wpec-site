import { usePageMeta } from "@/hooks/use-page-meta";
import { SITE } from "@/data/site";

export default function Privacy() {
  usePageMeta({
    title: `Privacy Policy | ${SITE.name}`,
    description: "Privacy policy for Wolstein Putts Expert Consulting.",
    canonical: `${SITE.baseUrl}/privacy-policy`,
    robots: "noindex,follow",
  });

  return (
    <article className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-display text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-muted-dark">Your privacy is important to us.</p>
        <p className="mt-1 text-sm text-muted">Last Updated: 1/13/25</p>

        <div className="mt-10 space-y-6 text-body leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-10 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
          <p>
            Wolstein Putts Expert Consulting (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy
            Policy describes how we collect, use, and protect personal information
            when you visit our website (wpec.expert) or otherwise interact with us,
            including through mobile text messaging services. By using our services,
            you acknowledge that you have read and understand this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Information You Provide to Us</h3>
          <p>
            <strong>Contact Information:</strong> We may collect personal information
            such as your name, email address, mailing address, and/or phone number
            when you fill out forms on our website, sign up for our services, or
            otherwise communicate with us.
          </p>
          <p>
            <strong>Service-Related Information:</strong> If you engage our consulting
            services, we collect information necessary to provide those services
            (e.g., project details, billing information, etc.).
          </p>
          <h3>1.2 Information Collected Automatically</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information about your device and browsing activities, such as:
          </p>
          <ul>
            <li>
              <strong>IP Address and Device Information:</strong> Includes your IP
              address, browser type, device identifiers, operating system, and other
              technical information.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information regarding how you
              use and navigate our website, such as the pages you view, how long you
              stay on certain pages, and the referring/exit pages.
            </li>
          </ul>
          <p>
            We may use cookies, web beacons, and similar technologies to collect this
            information. You can set your browser to refuse cookies or alert you when
            cookies are being sent. However, some parts of our website may not
            function properly if you do so.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>
              <strong>To Provide Our Services:</strong> We use your information to
              deliver our consulting services, respond to inquiries, and manage
              client relationships.
            </li>
            <li>
              <strong>To Communicate with You:</strong> We may use your contact
              details to provide updates, respond to support requests, or send other
              information you have requested.
            </li>
            <li>
              <strong>To Improve Our Website and Services:</strong> We analyze usage
              data to identify trends, administer the website, and enhance user
              experiences.
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> We may process your
              information to comply with laws, regulations, court orders, or other
              legal obligations.
            </li>
          </ul>

          <h2>3. Text Messaging and Mobile Phone Information</h2>
          <p>
            Wolstein Putts Expert Consulting does not collect mobile phone numbers
            for marketing purposes. We will not share any mobile information from
            our clients or visitors with third parties or affiliates for marketing
            or promotional purposes.
          </p>
          <p>
            <strong>Consent and Opt-In:</strong> If you elect to receive text
            messages about your services from Wolstein Putts Expert Consulting, we
            will send you updates and other information based on your request and
            consent.
          </p>
          <p>
            <strong>Opting Out:</strong> You can opt out at any time by replying
            &ldquo;STOP&rdquo; to any text message you receive from us. Once you opt
            out, you will no longer receive text messages regarding our services.
          </p>
          <p>
            <strong>Help or Support:</strong> You can get more information or
            assistance by replying &ldquo;HELP&rdquo; to any text message.
          </p>
          <p>
            <strong>Message and Data Rates:</strong> Please note that data and
            message rates vary and may apply based on your mobile carrier and plan.
          </p>
          <p>
            <strong>No Third-Party Sharing:</strong> All the above categories
            exclude text messaging originator opt-in data and consent; this
            information will not be shared with any third parties.
          </p>

          <h2>4. Sharing of Your Information</h2>
          <p>
            We will not share your personal information with third parties for
            marketing or promotional purposes. We may share your personal information
            in the following limited situations:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with
              service providers that assist us in operating our business (e.g.,
              payment processors, email service providers). These service providers
              are authorized to use your information only as necessary to provide
              services to us.
            </li>
            <li>
              <strong>Legal Compliance and Protection:</strong> We may disclose
              information if required by law, court order, or government regulation,
              or if such disclosure is necessary to protect the rights, property, or
              safety of Wolstein Putts Expert Consulting, our clients, or others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, bankruptcy, or sale of all or a portion of our assets,
              your information may be transferred to a successor entity.
            </li>
          </ul>

          <h2>5. Data Retention and Security</h2>
          <p>
            We will retain your personal information only for as long as necessary to
            fulfill the purposes for which it was collected or to comply with
            applicable legal, tax, or accounting requirements. We implement
            reasonable physical, administrative, and technical safeguards to protect
            your information from unauthorized access, use, or disclosure. However,
            no security measure is perfect, and we cannot guarantee absolute security
            of your information.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13 (or
            other age as required by local law). We do not knowingly collect personal
            information from children. If you believe we may have inadvertently
            collected such information, please contact us immediately so we can take
            appropriate steps to delete it.
          </p>

          <h2>7. Your Rights and Choices</h2>
          <p>
            Depending on your jurisdiction, you may have certain rights regarding
            your personal information, including the right to access, correct, or
            delete your data. You may also have the right to object to or request
            restrictions on certain processing activities. To exercise these rights,
            please contact us using the information below.
          </p>
          <p>
            <strong>Opt-Out of Marketing Communications:</strong> While we do not
            engage in text message marketing, you may still unsubscribe or opt out of
            receiving any promotional emails by following the unsubscribe link in
            those emails or by contacting us.
          </p>
          <p>
            <strong>Cookie Preferences:</strong> You can modify your browser settings
            to refuse cookies or delete existing cookies.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services that
            are not owned or controlled by Wolstein Putts Expert Consulting. We are
            not responsible for the privacy practices of these third-party sites. We
            encourage you to review the privacy policies of any third-party site you
            visit.
          </p>

          <h2>9. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in
            our practices, technology, or legal obligations. When we do, we will
            revise the &ldquo;Last Updated&rdquo; date at the top of this page. We
            encourage you to review this Privacy Policy periodically to stay
            informed about how we protect your personal information.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our
            data practices, please contact us at:
          </p>
          <p>
            {SITE.name}
            <br />
            {SITE.phone}
            <br />
            <a href={SITE.emailHref} className="text-brand hover:underline">
              {SITE.email}
            </a>
          </p>
          <p>
            By using our website or services, you acknowledge that you have read and
            understand this Privacy Policy.
          </p>
        </div>
      </div>
    </article>
  );
}
