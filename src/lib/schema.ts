export const ORG_NAME = "Wolstein Putts Expert Consulting";
export const ORG_URL = "https://wpec.expert";
export const ORG_PHONE = "+1-917-979-2040";
export const ORG_EMAIL = "contact@wpec.expert";
export const ORG_COUNTRY = "US";
export const ORG_LOGO = "https://wpec.expert/images/wp-logo-horizontal.svg";

export const ORG_ID = `${ORG_URL}/#org`;
export const WEBSITE_ID = `${ORG_URL}/#website`;

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: ORG_NAME,
    alternateName: "WPEC",
    url: ORG_URL,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    areaServed: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: ORG_COUNTRY,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ORG_PHONE,
      email: ORG_EMAIL,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.linkedin.com/company/wolstein-putts/",
      "https://kwvrs.com",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Kincaid Wolstein Vocational and Rehabilitation Services",
      url: "https://kwvrs.com",
    },
    knowsAbout: [
      "Vocational Expert Services",
      "Employment Law",
      "Matrimonial Law",
      "Earning Capacity Assessment",
      "Transferable Skills Analysis",
      "Expert Witness Testimony",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: ORG_URL,
    name: ORG_NAME,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}): JsonLd {
  return {
    "@type": "Article",
    "@id": `${args.url}#article`,
    headline: args.title,
    description: args.description,
    url: args.url,
    mainEntityOfPage: args.url,
    image: args.image ?? ORG_LOGO,
    ...(args.datePublished ? { datePublished: args.datePublished } : {}),
    ...(args.dateModified ? { dateModified: args.dateModified } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function blogPostingSchema(args: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  wordCount?: number;
}): JsonLd {
  return {
    ...articleSchema(args),
    "@type": "BlogPosting",
    ...(args.wordCount ? { wordCount: args.wordCount } : {}),
  };
}

export function personSchema(args: {
  slug: string;
  name: string;
  jobTitle: string;
  credentials: string[];
  specialties: string[];
  imageUrl?: string;
  bio: string;
  sameAs?: string[];
}): JsonLd {
  return {
    "@type": "Person",
    "@id": `${ORG_URL}/about#person-${args.slug}`,
    name: args.name,
    jobTitle: args.jobTitle,
    description: args.bio,
    worksFor: { "@id": ORG_ID },
    hasCredential: args.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    knowsAbout: args.specialties,
    ...(args.imageUrl
      ? { image: args.imageUrl.startsWith("http") ? args.imageUrl : `${ORG_URL}${args.imageUrl}` }
      : {}),
    ...(args.sameAs && args.sameAs.length ? { sameAs: args.sameAs } : {}),
  };
}

export function graphSchema(entities: JsonLd[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": entities,
  };
}
