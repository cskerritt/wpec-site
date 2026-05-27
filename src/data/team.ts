export interface TeamMember {
  slug: string;
  name: string;
  postNominals: string;
  title?: string;
  bio: string[];
  credentials: string[];
  licenseNumbers?: string[];
}

export const team: TeamMember[] = [
  {
    slug: "dan-wolstein",
    name: "Dan Wolstein",
    postNominals: "Ph.D., CRC, CLCP, IPEC, ABVE/D, LRC, FVE, CVE",
    title: "President / Partner",
    bio: [
      "Dr. Dan Wolstein is President and a founding partner of Wolstein Putts Expert Consulting and is the founder and Chief Executive Officer of Kincaid Wolstein Vocational and Rehabilitation Services, an affiliate company of Wolstein Putts.",
      "He is a highly experienced vocational evaluator who actively contributes to advancing science and professionalism in the vocational field. His research has been published in the Journal of Forensic Vocational Analysis. In 2018, he and Jeff Truthan presented their research regarding the 137 sedentary unskilled occupations in the DOT at the 2018 National Organization of Social Security Claimants' Representatives (NOSSCR) Disability Law Conference, and again in 2019 at the IARP.",
      "Dr. Wolstein is a current board member and Past-President of the American Board of Vocational Experts, and on the same board he previously served as Conference Chair (2022 and 2023).",
      "He completed his doctoral studies in rehabilitation counseling and administration at East Carolina University and his Master of Science in rehabilitation counseling from Rutgers University (formerly the University of Medicine and Dentistry of New Jersey).",
    ],
    credentials: [
      "Certified Rehabilitation Counselor (CRC)",
      "Certified Life Care Planner (CLCP)",
      "International Psychometric Evaluation Certification (IPEC)",
      "Diplomate of the American Board of Vocational Experts (ABVE/D)",
      "Licensed Rehabilitation Counselor (LRC)",
      "Forensic Vocational Expert (FVE)",
      "Certified Vocational Evaluator (CVE)",
    ],
    licenseNumbers: ["NJ LRC: 37RT00580100"],
  },
  {
    slug: "matthew-putts",
    name: "Matthew R. Putts",
    postNominals: "Ph.D., LPC, LRC, NCC, CRC, CLCP, IPEC, CVE",
    title: "Chief Executive Officer / Partner",
    bio: [
      "Dr. Matthew Putts is the Chief Executive Officer and a founding partner of Wolstein Putts Expert Consulting and the Chief of Vocational Services at Kincaid Wolstein Vocational and Rehabilitation Services, an affiliate company of Wolstein Putts.",
      "He is an experienced vocational expert in employment and matrimonial matters and testifies regularly in deposition and trial. Additionally, Dr. Putts is highly experienced as a rehabilitation counseling practitioner, community rehabilitation program administrator, and disability policy expert. He has held multiple roles as a nonprofit executive, including as Chief Executive Officer of a nonprofit community rehabilitation program and Vice President of Government Affairs for a state provider organization.",
      "He is experienced in disability advocacy, policy, legislation, and funding and has testified before legislative bodies on both the state and federal levels. His work has been recognized by Rutgers University, where he was awarded the Distinguished Alumnus Award by the School of Health Professions, and by the Morris County Chamber of Commerce, where he received the Exemplary Nonprofit Leader award (agency with revenue over $1 million).",
      "In addition to providing vocational evaluation reports, Dr. Putts also engages in clinical practice and contributes to the field at large. He is a member of the Education Committee of the American Board of Vocational Experts (ABVE), is board chair of the Workforce Development Board of Northwest New Jersey where he also chairs the Disability Committee, is an executive committee member of the New York State Bar Association's Family Law Section, and a member of the Rutgers University Rehabilitation Council Advisory Committee.",
      "He has a Doctor of Philosophy degree in Rehabilitation Counseling and Administration from East Carolina University and a Master of Science in Rehabilitation Counseling from Rutgers University (formerly the University of Medicine and Dentistry of New Jersey).",
    ],
    credentials: [
      "Licensed Professional Counselor (LPC)",
      "Licensed Rehabilitation Counselor (LRC)",
      "Certified Vocational Evaluation Specialist (CVE)",
      "National Certified Counselor (NCC)",
      "Certified Rehabilitation Counselor (CRC)",
      "Certified Life Care Planner (CLCP)",
      "International Psychometric Evaluation Certification (IPEC)",
    ],
    licenseNumbers: ["NJ LPC: 37PC00955300", "NJ LRC: 37RT00888699"],
  },
  {
    slug: "rona-wexler",
    name: "Rona Wexler",
    postNominals: "M.A., ABVE/D",
    bio: [
      "Rona Wexler is the founder of Wexler Consulting, which was acquired by Wolstein Putts in December of 2024. She is a highly sought-after vocational expert in earning capacity and employability.",
      "She offers litigation support, expert reports, and testimony to labor & employment and family law attorneys nationwide. Ms. Wexler also has a strong focus in New York, Connecticut, New Jersey, Pennsylvania, and Florida. She has been qualified and testified in numerous U.S. District courts and New York Supreme, New Jersey, Pennsylvania, and Florida civil courts, as well as the National Labor Relations Board. She is frequently appointed as a neutral expert in family law matters.",
      "In addition to over two decades of experience as a Vocational Evaluator, Career Advisor, and Employability Expert, Ms. Wexler brings 12 years of experience in executive recruiting as a principal/managing partner and director in two firms, working with employers and candidates to place mid, senior, and C-level professionals and executives. During her years of experience at a Fortune 200 company, she was an award-winning sales manager, account executive, and business consultant with customers in multiple business sectors, middle market through multi-billion-dollar global entities. These experiences provide additional perspective and credibility to her assessments.",
      "Ms. Wexler has been a featured presenter and CLE faculty to various professional and county, state, and national bar associations about forensic assessments of employability, earning capacity, and job search diligence, as well as career transitions and how to execute a successful job search.",
      "Ms. Wexler's articles have been published in the New York Law Journal and the New York State Bar Association Family Law Review, and in Valuing Marital Assets, a national guide from Aspen Publishers (Wolters Kluwer).",
      "Ms. Wexler is certified as a Diplomate by the American Board of Vocational Experts (ABVE/D) and served on the ABVE Board of Directors (2015-2022).",
    ],
    credentials: [
      "Diplomate, American Board of Vocational Experts (ABVE/D)",
      "Master of Arts (M.A.)",
    ],
  },
];
