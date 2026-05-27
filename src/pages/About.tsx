import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SITE } from "@/data/site";
import { team } from "@/data/team";
import { news } from "@/data/news";
import SchemaOrg from "@/components/SchemaOrg";
import {
  graphSchema,
  organizationSchema,
  personSchema,
} from "@/lib/schema";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, [hash]);

  usePageMeta({
    title: `About | ${SITE.name}`,
    description:
      "Wolstein Putts Expert Consulting is a full-service vocational expert firm with a focus on employment law and matrimonial matters.",
    canonical: `${SITE.baseUrl}/about`,
  });

  return (
    <>
      <SchemaOrg
        data={graphSchema([
          organizationSchema(),
          ...team.map((m) =>
            personSchema({
              slug: m.slug,
              name: m.name,
              jobTitle: m.title ?? "Vocational Expert",
              credentials: m.credentials,
              specialties: [
                "Vocational Evaluation",
                "Earning Capacity Assessment",
                "Expert Witness Testimony",
              ],
              bio: m.bio.join(" "),
            }),
          ),
        ])}
      />

      {/* About */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink">
            About Us
          </h1>
          <div className="mt-8 space-y-6 text-lg text-body leading-relaxed">
            <p>
              Wolstein Putts Expert Consulting is a full-service vocational
              expert firm with a focus on employment law and matrimonial
              matters.
            </p>
            <p>
              Highly experienced staff provide vocational evaluations, conduct
              transferable skills analyses, research past and present labor
              market conditions, evaluate earning potential, and opine on
              mitigation efforts.
            </p>
            <p>
              Comprehensive reports provide clients with the information they
              need to fully understand the vocational implications of each
              matter. Staff are experienced in providing expert witness
              testimony.
            </p>
            <p>
              In addition to forensic and litigation services, staff also
              provide clinical and vocational rehabilitation counseling,
              clinical supervision, and career coaching and counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-surface-alt scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Meet Our Team
          </h2>
          <div className="mt-12 space-y-14">
            {team.map((member) => (
              <article
                key={member.slug}
                className="bg-white border border-border rounded-2xl p-8 md:p-10"
              >
                <header>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {member.name}
                    <span className="text-muted font-medium">
                      , {member.postNominals}
                    </span>
                  </h3>
                  {member.title && (
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand">
                      {member.title}
                    </p>
                  )}
                </header>
                <div className="mt-6 space-y-4 text-body leading-relaxed">
                  {member.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  <ul className="space-y-1.5">
                    {member.credentials.map((c) => (
                      <li
                        key={c}
                        className="text-sm text-body before:content-['\2022'] before:text-brand before:mr-2"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  {member.licenseNumbers && member.licenseNumbers.length > 0 && (
                    <ul className="space-y-1.5">
                      {member.licenseNumbers.map((l) => (
                        <li key={l} className="text-xs text-muted font-mono">
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Company News
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((post) => (
              <article
                key={post.slug}
                className="border border-border rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-medium text-muted uppercase tracking-wider">
                  {formatDate(post.publishedAt)} &middot; {post.readTime}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink leading-snug">
                  <Link to={`/${post.slug}`} className="hover:text-brand">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted-dark leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
