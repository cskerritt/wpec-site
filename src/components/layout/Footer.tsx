import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { SITE } from "@/data/site";

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "News", href: "/about#news" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" aria-label={SITE.name}>
              <img
                src="/images/wp-logo-stacked-inverse-textured.png"
                alt={SITE.name}
                className="h-24 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-xs">
              {SITE.subTagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/90 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-white/90 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 text-sm text-white/90 hover:text-white"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-2 text-sm text-white/90 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/70">
          <p>
            &copy; {year} {SITE.name}
          </p>
          <p>
            Affiliate of{" "}
            <a
              href={SITE.affiliate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              {SITE.affiliate.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
