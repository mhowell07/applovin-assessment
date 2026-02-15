import {
  Header,
  Hero,
  InviteOnly,
  Attention,
  InventoryClarity,
  UseCases,
  Referral,
  Process,
  Testimonials,
  FinalCta,
  Footer,
} from "@/components/sections";
import content from "@/lib/content.json";

const data = content.variant1;
const controlData = content.control;
const shared = content.shared;

export default function Variant1Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header pageVariant="v1" />

      <Hero
        headline={data.hero.headline}
        headlineGradient={data.hero.headlineGradient}
        subhead={data.hero.subhead}
        bullets={data.hero.bullets}
        cta={data.hero.cta}
        pageVariant="v1"
        videoSrc={data.hero.videoSrc}
      />

      <InviteOnly
        headline={controlData.inviteOnly.headline}
        headlineGradient={controlData.inviteOnly.headlineGradient}
        descriptionBold={controlData.inviteOnly.descriptionBold}
        description={controlData.inviteOnly.description}
        videoSrc={controlData.inviteOnly.videoSrc}
        brandLogos={shared.brandLogos}
      />

      <Attention
        headline={controlData.attention.headline}
        descriptionBold={controlData.attention.descriptionBold}
        description={controlData.attention.description}
        videoSrc={controlData.attention.videoSrc}
      />

      <InventoryClarity
        heading={data.inventoryClarity.heading}
        subhead={data.inventoryClarity.subhead}
        items={data.inventoryClarity.items}
      />

      <UseCases
        heading={data.useCases.heading}
        items={data.useCases.items}
      />

      <Referral
        headline={shared.referral.headline}
        description={shared.referral.description}
        cta={data.hero.cta}
        pageVariant="v1"
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
        pageVariant="v1"
      />

      <Footer />
    </main>
  );
}
