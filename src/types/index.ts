export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  /** Default "index,follow,...". Pass "noindex,follow" for thin/transactional pages. */
  robots?: string;
}
