import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            What Attorneys Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
