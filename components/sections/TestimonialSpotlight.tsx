import { SectionWrapper } from "@/components/ui";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialSpotlightProps {
  testimonial: Testimonial;
  image?: string;
}

export default function TestimonialSpotlight({
  testimonial,
  image,
}: TestimonialSpotlightProps) {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-2xl border border-border bg-surface p-10 md:p-14">
          {image ? (
            <img
              alt={testimonial.author}
              loading="lazy"
              width="80"
              height="80"
              decoding="async"
              className="w-[80px] h-[80px] rounded-full object-cover mx-auto mb-6"
              style={{ color: "transparent" }}
              src={image}
            />
          ) : (
            <span className="mb-6 inline-block text-4xl text-primary">"</span>
          )}
          <blockquote className="text-xl font-medium leading-relaxed md:text-2xl">
            {testimonial.quote}
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-text-secondary">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
