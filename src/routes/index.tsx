import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/saboreq/Hero";
import {
  WorkSection,
  CapabilitiesSection,
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
      <CapabilitiesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
