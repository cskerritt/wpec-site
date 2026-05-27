import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/data/site";

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "News", href: "/about#news" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" aria-label={SITE.name}>
            <img
              src="/images/wp-logo-horizontal.svg"
              alt={SITE.name}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-ink hover:text-brand transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-3 rounded-md text-base font-medium text-ink hover:bg-surface-alt hover:text-brand"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="px-3 py-3 rounded-md text-base font-medium text-brand flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
