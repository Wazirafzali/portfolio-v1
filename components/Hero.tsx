import LogoMark from "@/components/LogoMark";
import { teamInfo } from "@/data/team";
import { ArrowUpRight, Code2, Smartphone, Film } from "lucide-react";

const capabilities = [
  { icon: Code2, title: "Web Development", detail: "Websites and web applications built around your business." },
  { icon: Smartphone, title: "Android & iOS", detail: "Platform-specific apps and coordinated mobile projects." },
  { icon: Film, title: "Video Editing", detail: "Clear, engaging content for your brand and audience." },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:min-h-[85vh] lg:grid-cols-[1.2fr_1fr] lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan-400" />{teamInfo.availability}</p>
          <p className="mb-4 font-medium text-cyan-400">AppFolor · Digital Development Studio</p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Your next digital product.<span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">One focused partner.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">Web development, Android and iOS applications, coordinated mobile projects, and professional video editing. AppFolor brings your requirements together through clear planning and focused delivery.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-zinc-950 transition hover:bg-cyan-300">Start Your Project<ArrowUpRight aria-hidden="true" className="h-5 w-5" /></a>
            <a href="#projects" className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400">Explore Our Work</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-zinc-400"><span>Clear scope</span><span>Coordinated delivery</span><span>Remote collaboration</span></div>
        </div>
        <div className="relative rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6 shadow-2xl sm:p-8">
          <div className="flex items-center gap-4 border-b border-white/10 pb-7"><div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10"><LogoMark size={64} /></div><div><p className="text-3xl font-bold">App<span className="text-cyan-400">Folor</span></p><p className="mt-1 text-sm text-zinc-400">Build. Connect. Create.</p></div></div>
          <div className="mt-7 space-y-4">{capabilities.map(({icon: Icon,title,detail}) => <div key={title} className="rounded-2xl border border-white/10 bg-zinc-950/50 p-5"><Icon aria-hidden="true" className="mb-3 h-5 w-5 text-cyan-400" /><h2 className="font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-zinc-400">{detail}</p></div>)}</div>
          <p className="mt-6 text-sm leading-6 text-zinc-400">From the first conversation to the final handover, a shared process keeps your project moving.</p>
        </div>
      </div>
    </section>
  );
}
