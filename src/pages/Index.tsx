import { lazy, Suspense } from "react";
import Navigation, { ScrollProgress } from "@/components/portfolio/navigation";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Footer, { BackToTop } from "@/components/portfolio/footer";

const Skills = lazy(() => import("@/components/portfolio/skills"));
const Experience = lazy(() => import("@/components/portfolio/experience"));
const Projects = lazy(() => import("@/components/portfolio/projects"));
const FeaturedProject = lazy(() =>
  import("@/components/portfolio/projects").then((m) => ({ default: m.FeaturedProject })),
);
const Timeline = lazy(() => import("@/components/portfolio/journey").then((m) => ({ default: m.Timeline })));
const Certifications = lazy(() =>
  import("@/components/portfolio/journey").then((m) => ({ default: m.Certifications })),
);
const Stats = lazy(() => import("@/components/portfolio/journey").then((m) => ({ default: m.Stats })));
const Highlights = lazy(() => import("@/components/portfolio/journey").then((m) => ({ default: m.Highlights })));
const Services = lazy(() => import("@/components/portfolio/services").then((m) => ({ default: m.Services })));
const WhyHireMe = lazy(() => import("@/components/portfolio/services").then((m) => ({ default: m.WhyHireMe })));
const Testimonials = lazy(() =>
  import("@/components/portfolio/services").then((m) => ({ default: m.Testimonials })),
);
const ResumeSection = lazy(() => import("@/components/portfolio/resume-section"));
const Contact = lazy(() => import("@/components/portfolio/contact"));

const Fallback = () => <div className="h-40" aria-hidden="true" />;

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Suspense fallback={<Fallback />}>
          <Stats />
          <Skills />
          <Experience />
          <FeaturedProject />
          <Projects />
          <Timeline />
          <Certifications />
          <Highlights />
          <Services />
          <WhyHireMe />
          <Testimonials />
          <ResumeSection />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
