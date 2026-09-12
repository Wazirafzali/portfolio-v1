import Navbar from "@/components/Navbar";
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
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* Hero text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Available for new projects
              </div>

              <p className="mb-4 text-lg font-medium text-cyan-400">
                Hello, I&apos;m a Full-Stack Developer
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                I build modern
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I design and develop fast, responsive, and user-friendly web
                applications using modern technologies such as React, Next.js,
                TypeScript, and AI.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-7 py-3.5 text-center font-semibold text-zinc-950 transition hover:bg-cyan-400"
                >
                  View My Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold transition hover:border-white/40 hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-bold">3</p>
                  <p className="mt-1 text-sm text-zinc-500">Projects</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">8+</p>
                  <p className="mt-1 text-sm text-zinc-500">Technologies</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="mt-1 text-sm text-zinc-500">Passion</p>
                </div>
              </div>
            </div>

            {/* Developer card */}
            <div className="hidden justify-center lg:flex">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="relative flex h-96 w-80 flex-col items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                    <span className="text-7xl font-bold text-cyan-400">
                      DEV
                    </span>
                  </div>

                  <p className="mt-8 text-xl font-semibold">
                    Full-Stack Developer
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Building the modern web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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