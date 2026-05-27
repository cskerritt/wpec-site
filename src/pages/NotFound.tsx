import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SITE } from "@/data/site";

export default function NotFound() {
  usePageMeta({
    title: `Page Not Found | ${SITE.name}`,
    description: "The page you are looking for could not be found.",
    canonical: `${SITE.baseUrl}/404`,
    robots: "noindex,follow",
  });

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-6xl font-bold text-brand mb-4">404</h1>
      <p className="text-muted-dark text-lg mb-8">Page not found</p>
      <Link
        to="/"
        className="inline-flex bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
