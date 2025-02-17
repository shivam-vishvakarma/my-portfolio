import { Testimonial } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";
import TestimonialCard from "../molecules/TestimonialCard";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({
  testimonials,
}: TestimonialSectionProps) {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Client" secondary="Testimonials" />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
