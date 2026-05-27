export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  caseType?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nj-trial",
    quote:
      "Matthew Putts testified live in court as a vocational/employability/earning capacity expert (Yes, One Stop Shop) this week and was amazing. Dr. Putts stole the show and was the hands down voted “Best Witness” by counsel and client observers of the trial.",
    author: "New Jersey Trial Attorney",
  },
  {
    id: "ca-trial",
    quote:
      "This case went to mediation a couple of weeks ago. We were able to achieve settlement with a very favorable result for our client. The mediator noted that the work Dr. Putts put in was a major factor in increasing the size of the settlement.",
    author: "California Trial Attorney",
  },
  {
    id: "ct-divorce",
    quote:
      "Just a note to thank you for your expert services on this case. We received the decision, and the judge found Matthew's testimony credible and persuasive. She determined that our client's earning capacity was within our proposed range.",
    author: "Connecticut Divorce Attorney",
  },
  {
    id: "co-trial",
    quote:
      "You were amazing in deposition yesterday, Dr. Putts. The amount of patience you exhibited was incredibly impressive - thank you!",
    author: "Colorado Trial Attorney",
  },
  {
    id: "ny-divorce",
    quote:
      "Dr. Putts, we wanted to let you know that the matter we worked with you on just recently settled, which is great news. Your assistance was monumental in helping us resolve the case.",
    author: "New York Divorce Attorney",
  },
];
