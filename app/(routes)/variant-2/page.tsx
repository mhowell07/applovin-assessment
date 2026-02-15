import {
  Header,
  Hero,
  InviteOnly,
  TestimonialSpotlight,
  PerformanceMetrics,
  ProductOverview,
  Process,
  Referral,
  Testimonials,
  FinalCta,
  Footer,
} from "@/components/sections";
import content from "@/lib/content.json";

const data = content.variant2;
const controlData = content.control;
const shared = content.shared;

export default function Variant2Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header pageVariant="v2" />

      <Hero
        headline={data.hero.headline}
        headlineGradient={data.hero.headlineGradient}
        subhead={data.hero.subhead}
        cta={data.hero.cta}
        pageVariant="v2"
        videoSrc={data.hero.videoSrc}
      />

      <InviteOnly
        headline=""
        headlineGradient=""
        descriptionBold=""
        description=""
        videoSrc=""
        brandLogos={shared.brandLogos}
      />

      <TestimonialSpotlight 
        testimonial={data.testimonialSpotlight}
        image="/testimonials/img-headshot-prose@2x.png"
      />

      <PerformanceMetrics
        heading={data.performanceMetrics.heading}
        metrics={data.performanceMetrics.metrics}
      />

      <ProductOverview
        heading={data.productOverview.heading}
        features={data.productOverview.features}
      />

      <Process
        headline={shared.process.headline}
        subhead={shared.process.subhead}
        steps={shared.process.steps}
      />

      <Referral
        headline={shared.referral.headline}
        description={shared.referral.description}
        cta={data.hero.cta}
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
