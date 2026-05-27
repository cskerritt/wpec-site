import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="bg-white border border-border rounded-2xl p-7 h-full flex flex-col shadow-sm">
      <span aria-hidden className="text-brand text-5xl font-display leading-none">
        &ldquo;
      </span>
      <blockquote className="mt-2 text-body italic leading-relaxed flex-1">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 pt-4 border-t border-border text-sm font-medium text-ink">
        {testimonial.author}
      </figcaption>
    </figure>
  );
}
