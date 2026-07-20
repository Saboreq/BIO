import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/saboreq/Hero";
import {
  WorkSection,
  ServicesSection,
  PricingSection,
  AboutSection,
} from "@/components/saboreq/Sections";
import { ContactSection } from "@/components/saboreq/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main id="main">
      <Hero />
      <WorkSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
