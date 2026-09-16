import { Code2, Smartphone, Apple, Film } from "lucide-react";
import { teamMembers } from "@/data/team";
const icons = [Code2, Smartphone, Apple, Film];
export default function Team() {
  return <section id="team" className="border-t border-white/10 py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="max-w-3xl"><p className="mb-4 font-medium text-cyan-400">Our Expertise</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Specialized capabilities.<span className="block text-zinc-500">One coordinated studio.</span></h2><p className="mt-6 text-lg leading-8 text-zinc-400">AppFolor brings web, mobile, and video expertise into a shared project process, with clear communication and agreed milestones.</p></div>
    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{teamMembers.map((member,index) => {const Icon = icons[index]; return <article key={member.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><Icon aria-hidden="true" className="h-8 w-8 text-cyan-400" /><h3 className="mt-6 text-xl font-bold">{member.name}</h3><p className="mt-4 leading-7 text-zinc-400">{member.description}</p></article>;})}</div>
    <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8"><h3 className="text-2xl font-bold">Android and iOS, planned together.</h3><p className="mt-4 max-w-3xl leading-7 text-zinc-400">For projects spanning both platforms, we coordinate requirements, design direction, and delivery milestones while addressing the needs of each platform.</p><a href="#contact" className="mt-6 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950 hover:bg-cyan-300">Discuss Your Project</a></div>
  </div></section>;
}
