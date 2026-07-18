import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/saboreq/Navigation";
import { Hero } from "@/components/saboreq/Hero";
import {
  WorkSection,
  CapabilitiesSection,
  AboutSection,
  ExperienceSection,
  Footer,
} from "@/components/saboreq/Sections";
import { ContactSection } from "@/components/saboreq/Contact";
import { BackToTop, EasterEgg, SkipLink } from "@/components/saboreq/Extras";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-sab-bg text-sab-text sab-noise selection:bg-sab-purple/40">
      <SkipLink />
      <Navigation />
      <main id="main">
        <Hero />
        <WorkSection />
        <CapabilitiesSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <EasterEgg />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
