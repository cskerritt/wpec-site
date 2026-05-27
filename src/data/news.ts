export interface NewsPost {
  slug: string;
  title: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export const news: NewsPost[] = [
  {
    slug: "5-questions-attorneys-should-ask-when-retaining-a-vocational-expert-in-employment-law-cases",
    title:
      "5 Questions Attorneys Should Ask When Retaining a Vocational Expert in Employment Law Cases",
    publishedAt: "2025-06-16",
    readTime: "2 min read",
    excerpt:
      "When litigating employment law matters like wrongful termination, discrimination, and failure to accommodate cases, vocational experts can play a critical role in assessing employability, labor market access, and earning capacity.",
    body: [
      "When litigating employment law matters like wrongful termination, discrimination, and failure to accommodate cases, vocational experts can play a critical role in assessing employability, labor market access, and earning capacity. However, not all vocational experts are equally equipped to opine on employment law matters.",
      "Here are key questions employment attorneys should ask when reaching out to a vocational expert witness to ensure they're suited for handling your matter:",
      "1. How often have you worked on employment law matters? Many vocational experts have strong backgrounds in personal injury but relatively limited exposure to the unique standards and legal questions in employment litigation. Be sure to ask: \"How often have you testified or issued opinions in wrongful termination, discrimination, or ADA accommodation matters?\" The ideal vocational expert for employment law cases will regularly be retained on such cases and will have experience testifying in both plaintiff and defense matters. Look for experience with both plaintiff and defense perspectives, and familiarity with relevant statutes (e.g., Title VII, ADA, ADEA).",
      "2. What is your approach to vocational analysis in this context? A skilled expert should be able to describe how they analyze employability and transferable skills, factors impacting placeability, labor market access interpreted within the unique facts of the case, mitigation efforts and job search documentation, and future earning capacity.",
      "3. How do you handle mitigation? Mitigation is often a pivotal issue in employment law. Ask questions like: \"How do you assess whether a plaintiff has made reasonable efforts to secure commensurate replacement employment?\" An experienced expert will be able to describe how they review job search materials, past and current labor market conditions, networking efforts, and offer insight on whether mitigation efforts were diligent and realistic.",
      "4. How do you explain your methodology? The reliability of an expert's conclusions is only as strong as the methods and data they rely on. The expert's ability to explain these methodologies in an understandable and concise way will give you a sense of their comfort level with employment law cases and how they might sound in deposition or in front of a jury. The expert should be able to easily convey their methods and explain why they are reliable and valid. If the vocational expert also does personal injury work, they should be able to articulate how their methods are different, or account for the differences, between personal injury and employment law matters.",
      "5. Can you assist beyond the report? An experienced employment law vocational expert will be able to help with more than a report and testimony. For example, they may help you craft deposition questions for the plaintiff, evaluate opposing expert reports and write critiques, and identify vocational red flags or gaps in documentation. Don't overlook your expert's ability to assist throughout the various phases of litigation.",
      "In employment law litigation, choosing the right vocational expert can be a critical decision to the success of the case. By asking these targeted questions, you ensure that your expert is not only qualified for vocational matters but can specifically opine on employment law cases. The experts at Wolstein Putts Expert Consulting provide specialized vocational expert services for employment attorneys nationwide. We're always happy to discuss your matter with you. We'd be happy to speak with you by phone at (917) 979-2040 or to hear from you through the Contact Us form on our website.",
    ],
  },
  {
    slug: "aamlny",
    title:
      "Wolstein Putts Expert Consulting Sponsors the AAML NY Chapter Symposium",
    publishedAt: "2025-05-09",
    readTime: "< 1 min read",
    excerpt:
      "Wolstein Putts Expert Consulting is proud to have been a sponsor of last week's American Academy of Matrimonial Lawyers (AAML) New York Chapter annual symposium and dinner dance.",
    body: [
      "Wolstein Putts Expert Consulting is proud to have been a sponsor of last week's American Academy of Matrimonial Lawyers (AAML) New York Chapter annual symposium and dinner dance.",
      "Friday was packed full of continuing legal education, including a fascinating presentation by Dr. Stephen Dewey. In his presentation, Fortnite, Fentanyl, and Frappuccino: The Science of Addiction, Dr. Dewey introduced the neurological bases of addiction from food, to alcohol, to video games. Fascinating data was presented on the impacts of these addictions including the huge increase in dopamine in the brain related to playing certain types of video games, the association between addiction and ADHD, and how triggers work in relapse. Everyone left the presentation not only better informed but, in many cases, with a whole new outlook on addiction.",
      "On Saturday night, the work of New York's matrimonial attorneys and judges was celebrated with dinner, awards, lively conversation, and music.",
      "It's important for companies like Wolstein Putts to sponsor the work of organizations like the AAML New York Chapter. We all improve when we learn, even more so when we learn and discuss together.",
    ],
  },
  {
    slug: "announcing-wpec",
    title:
      "Announcing the Launch of Wolstein Putts Expert Consulting (WPEC)",
    publishedAt: "2025-01-10",
    readTime: "< 1 min read",
    excerpt:
      "We are excited to celebrate the new year by announcing the launch of Wolstein Putts Expert Consulting (WPEC), an affiliate of Kincaid Wolstein Vocational & Rehabilitation Services focusing specifically on employment law and matrimonial matters.",
    body: [
      "We are excited to celebrate the new year by announcing the launch of Wolstein Putts Expert Consulting (WPEC), an affiliate of Kincaid Wolstein Vocational & Rehabilitation Services focusing specifically on employment law and matrimonial matters.",
      "As part of a successful launch, WPEC has acquired Wexler Consulting (The Employability Expert), a highly trusted vocational expert firm in Manhattan under the leadership of Rona Wexler. Rona has joined the WPEC team who are already collectively offering expert vocational and employability evaluations and expert witness services.",
      "As an affiliate of Kincaid Wolstein, WPEC will have significant bandwidth and resources to support the vocational expert needs of employment law and matrimonial attorneys and clients in the New York City area and beyond.",
    ],
  },
];

export const newsBySlug: Record<string, NewsPost> = Object.fromEntries(
  news.map((n) => [n.slug, n]),
);
