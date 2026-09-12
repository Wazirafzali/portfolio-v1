import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

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
                I&apos;m a developer focused on building clean, fast, and
                practical digital experiences.
              </p>

              <p>
                I enjoy turning ideas into real products using modern web
                technologies and combining programming with artificial
                intelligence.
              </p>

              <p>
                My goal is to build websites and applications that look
                professional, perform well, and solve real problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium text-cyan-400">
              My Skills
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technologies I work with
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I use a modern development stack to create fast, scalable, and
              responsive web applications.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-400">
                  {index + 1}
                </div>

                <p className="font-semibold text-zinc-200">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temporary Projects */}
     <Projects />

      {/* Temporary Contact */}
      <Contact />
      {/* Temporary Footer */}
      <Footer />
    </main>
  );
}