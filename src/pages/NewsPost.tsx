import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SITE } from "@/data/site";
import { newsBySlug } from "@/data/news";
import NotFound from "./NotFound";
import SchemaOrg from "@/components/SchemaOrg";
import { graphSchema, organizationSchema, blogPostingSchema } from "@/lib/schema";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPost() {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = newsBySlug[slug];

  if (!post) return <NotFound />;

  const url = `${SITE.baseUrl}/${post.slug}`;

  usePageMeta({
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
    canonical: url,
  });

  return (
    <>
      <SchemaOrg
        data={graphSchema([
          organizationSchema(),
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            url,
            datePublished: post.publishedAt,
          }),
        ])}
      />

      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            to="/about#news"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
          >
            <ArrowLeft className="w-4 h-4" />
            All news
          </Link>

          <p className="mt-8 text-xs font-medium text-muted uppercase tracking-wider">
            {formatDate(post.publishedAt)} &middot; {post.readTime}
          </p>
          <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            {post.title}
          </h1>

          <div className="mt-10 space-y-6 text-lg text-body leading-relaxed">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-white font-medium px-6 py-3 rounded-md hover:bg-brand-dark transition-colors"
            >
              Discuss your matter with us
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
