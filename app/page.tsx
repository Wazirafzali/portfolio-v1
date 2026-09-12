import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Accessibility */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-zinc-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div id="main-content">

        {/* Hero */}
        <Hero />

        {/* About */}
        <section
          id="about"
          className="border-t border-white/10 bg-zinc-900/30 py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">

              <div>
                <p className="mb-4 font-medium text-cyan-400">
                  About Me
                </p>

                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Creating useful products,

                  <span className="block text-zinc-500">
                    not just beautiful websites.
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-zinc-400">
                <p>
                  I&apos;m a developer focused on building clean, fast,
                  responsive, and practical digital experiences.
                </p>

                <p>
                  I enjoy turning ideas into real products using modern web
                  technologies such as Next.js, React, TypeScript, and
                  artificial intelligence.
                </p>

                <p>
                  My goal is to create websites and applications that look
                  professional, perform well, and solve real problems.
                </p>
              </div>

            </div>
          </div>
        </section>

         <Services />
          
          <Team />

        {/* Technologies */}
        <TechStack />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

      </div>

      {/* Footer */}
      <Footer />

    </main>
  );
}