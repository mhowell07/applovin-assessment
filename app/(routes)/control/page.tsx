import {
  Header,
  Hero,
  InviteOnly,
  Attention,
  Referral,
  Process,
  Testimonials,
  FinalCta,
  Footer,
} from "@/components/sections";
import content from "@/lib/content.json";

const data = content.control;
const shared = content.shared;

export default function ControlPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header pageVariant="control" />

      <Hero
        headline={data.hero.headline}
        headlineGradient={data.hero.headlineGradient}
        subhead={data.hero.subhead}
        cta={data.hero.cta}
        pageVariant="control"
        videoSrc={data.hero.videoSrc}
      />

      <InviteOnly
        headline={data.inviteOnly.headline}
        headlineGradient={data.inviteOnly.headlineGradient}
        descriptionBold={data.inviteOnly.descriptionBold}
        description={data.inviteOnly.description}
        videoSrc={data.inviteOnly.videoSrc}
        brandLogos={shared.brandLogos}
      />

      <Attention
        headline={data.attention.headline}
        descriptionBold={data.attention.descriptionBold}
        description={data.attention.description}
        videoSrc={data.attention.videoSrc}
      />

      <Referral
        headline={shared.referral.headline}
        description={shared.referral.description}
        cta={shared.referral.cta}
        pageVariant="control"
      />

      <Process
        headline={shared.process.headline}
        subhead={shared.process.subhead}
        steps={shared.process.steps}
      />

      <Testimonials testimonials={shared.testimonials} />

      <FinalCta
        headline={data.finalCta.headline}
        subhead={data.finalCta.subhead}
        cta={data.finalCta.cta}
        pageVariant="control"
      />

      <Footer />
    </main>
  );
}
