import { useEffect } from "react";
import type { PageMeta } from "@/types";

const DEFAULT_OG_IMAGE = "https://wpec.expert/images/wp-logo-horizontal.svg";
const DEFAULT_ROBOTS =
  "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title;

    // Normalize canonical - strip trailing slash except for root
    const canonical =
      meta.canonical.endsWith("/") && meta.canonical !== "https://wpec.expert/"
        ? meta.canonical.slice(0, -1)
        : meta.canonical;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;

    setMeta("description", meta.description);
    setMeta("robots", meta.robots ?? DEFAULT_ROBOTS);

    setOg("og:title", meta.title);
    setOg("og:description", meta.description);
    setOg("og:url", canonical);
    setOg("og:type", "website");
    setOg("og:image", ogImage);

    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", ogImage);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // hreflang: en (default), en-US (specific), x-default
    const ensureAlternate = (hreflang: string) => {
      let el = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", canonical);
    };
    ensureAlternate("en");
    ensureAlternate("en-US");
    ensureAlternate("x-default");
  }, [meta.title, meta.description, meta.canonical, meta.ogImage, meta.robots]);
}
