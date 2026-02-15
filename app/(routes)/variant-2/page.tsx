import {
  Header,
  Hero,
  SocialProof,
  TestimonialSpotlight,
  PerformanceMetrics,
  Process,
  ProductOverview,
  Referral,
  Testimonials,
  FinalCta,
  Footer,
} from "@/components/sections";
import content from "@/lib/content.json";

const data = content.variant2;
const shared = content.shared;

export default function Variant2Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header pageVariant="v2" />

      <Hero
        headline={data.hero.headline}
        subhead={data.hero.subhead}
        cta={data.hero.cta}
        pageVariant="v2"
        videoSrc={data.hero.videoSrc}
      />

      <SocialProof
        heading={data.socialProof.heading}
        logos={shared.brandLogos.map((l: { src: string; alt: string }) => l.alt)}
      />

      <TestimonialSpotlight testimonial={data.testimonialSpotlight} />

      <PerformanceMetrics
        heading={data.performanceMetrics.heading}
        metrics={data.performanceMetrics.metrics}
      />

      <Process
        headline={shared.process.headline}
        subhead={shared.process.subhead}
        steps={shared.process.steps}
      />

      <ProductOverview
        heading={data.productOverview.heading}
        features={data.productOverview.features}
      />

      <Referral
        headline={shared.referral.headline}
        description={shared.referral.description}
        cta={shared.referral.cta}
        pageVariant="v2"
      />

      <Testimonials testimonials={shared.testimonials} />

      <FinalCta
        headline={data.finalCta.headline}
        subhead={data.finalCta.subhead}
        cta={data.finalCta.cta}
        pageVariant="v2"
      />

      <Footer />
    </main>
  );
}
