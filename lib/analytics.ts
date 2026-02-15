import posthog from "posthog-js";

type Variant = "control" | "v1" | "v2";
type CtaLocation = "hero" | "footer" | "final";

/**
 * Track a signup CTA click event in PostHog.
 *
 * @param variant  - Which page variant fired the event
 * @param location - Where on the page the CTA was clicked
 */
export function trackSignup(variant: Variant, location: CtaLocation): void {
  posthog.capture("signed_up", {
    variant,
    location,
  });
}

/**
 * Build the signup redirect URL with the appropriate ref parameter.
 *
 * @param variant - Which page variant to attribute
 * @returns Full signup URL with ?ref= query parameter
 */
export function getSignupUrl(variant: Variant): string {
  return `https://ads.axon.ai/auth/signup?ref=${variant}`;
}
