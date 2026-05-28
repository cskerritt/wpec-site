import { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SITE } from "@/data/site";
import SchemaOrg from "@/components/SchemaOrg";
import { graphSchema, organizationSchema } from "@/lib/schema";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  usePageMeta({
    title: `Contact | ${SITE.name}`,
    description:
      "Get the guidance and support your legal matter deserves. Phone (917) 979-2040 or contact@wpec.expert.",
    canonical: `${SITE.baseUrl}/contact`,
  });

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send message");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  return (
    <>
      <SchemaOrg data={graphSchema([organizationSchema()])} />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-dark">
              Get the guidance and support your legal matter deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-semibold text-ink">
                Get in touch
              </h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-start gap-3 text-body hover:text-brand"
                  >
                    <Phone className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                        Phone
                      </span>
                      <span className="font-medium">{SITE.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.emailHref}
                    className="flex items-start gap-3 text-body hover:text-brand"
                  >
                    <Mail className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                        Email
                      </span>
                      <span className="font-medium">{SITE.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-body hover:text-brand"
                  >
                    <LinkedinIcon className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                        LinkedIn
                      </span>
                      <span className="font-medium">
                        linkedin.com/company/wolstein-putts
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-surface-alt rounded-2xl border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {SITE.serviceArea}
                </p>
                <p className="mt-3 text-sm text-body leading-relaxed">
                  {SITE.subTagline}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="bg-surface-alt border border-border rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-12 h-12 text-brand mx-auto" />
                  <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                    Message sent
                  </h2>
                  <p className="mt-2 text-muted-dark">
                    Thank you for reaching out. A member of our team will be in
                    touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-white border border-border rounded-2xl p-8 space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-y"
                    />
                  </div>
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === "error" && error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-brand text-white font-medium px-8 py-3 rounded-md hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
