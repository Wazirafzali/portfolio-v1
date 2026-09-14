import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <StructuredData />

      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-zinc-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />

      <div id="main-content">
        <Hero />

        <section
          id="about"
          className="border-t border-white/10 bg-zinc-900/30 py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 font-medium text-cyan-400">
                  About AppFolor
                </p>

                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Specialized people.
                  <span className="block text-zinc-500">
                    One digital team.
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-zinc-400">
                <p>
                  AppFolor is a digital development team led by
                  Wazir Afzali, responsible for web development,
                  client communication, project planning, and team
                  coordination.
                </p>

                <p>
                  The team includes dedicated specialists in Android
                  development, iOS development, and professional
                  video editing.
                </p>

                <p>
                  When a project requires multiple services, the
                  required specialists work together while the client
                  communicates through one coordinated project process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <Team />

        <TechStack />

        <Projects />

        <Process />

        <WhyUs />

        <FAQ />

        <Contact />
      </div>

      <Footer />
    </main>
  );
}