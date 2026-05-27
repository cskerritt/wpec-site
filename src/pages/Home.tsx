import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SITE } from "@/data/site";
import { news } from "@/data/news";
import TestimonialSection from "@/components/TestimonialSection";
import SchemaOrg from "@/components/SchemaOrg";
import { graphSchema, organizationSchema, websiteSchema } from "@/lib/schema";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  usePageMeta({
    title: `${SITE.name} | Vocational Experts for Employment Law & Matrimonial Matters`,
    description: SITE.subTagline,
    canonical: `${SITE.baseUrl}/`,
  });

  return (
    <>
      <SchemaOrg data={graphSchema([organizationSchema(), websiteSchema()])} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-4">
              {SITE.name}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-ink leading-tight">
              {SITE.tagline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-dark leading-relaxed">
              {SITE.subTagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand text-white font-medium px-6 py-3 rounded-md hover:bg-brand-dark transition-colors"
              >
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-brand text-brand font-medium px-6 py-3 rounded-md hover:bg-brand hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic / pillars band */}
      <section className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/80">
            {SITE.serviceArea}
          </p>
          <p className="mt-4 text-center font-display text-2xl md:text-3xl font-semibold">
            {SITE.pillars.join("  •  ")}
          </p>
        </div>
      </section>

      {/* Company News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Company News
            </h2>
            <Link
              to="/about#news"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-border rounded-2xl p-7 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-medium text-muted uppercase tracking-wider">
                  {formatDate(post.publishedAt)} &middot; {post.readTime}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink leading-snug">
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

      <TestimonialSection />

      {/* Contact CTA */}
      <section className="bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Discuss your matter with our team
          </h2>
          <p className="mt-4 text-muted-dark">
            Call us directly or send a note through our contact form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 bg-brand text-white font-medium px-6 py-3 rounded-md hover:bg-brand-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-brand text-brand font-medium px-6 py-3 rounded-md hover:bg-brand hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
