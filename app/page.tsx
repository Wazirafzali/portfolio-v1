import CodeAtmosphere from "@/components/CodeAtmosphere";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LogoMark from "@/components/LogoMark";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return <div id="top" className="studio-site"><StructuredData /><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content"><Hero /><Projects /><Services /><Process />
    <section id="about" className="studio-section about-section motion-section"><CodeAtmosphere /><div className="studio-container about-layout"><div className="about-art" aria-hidden="true"><span>APPFOLOR / THE STUDIO</span><LogoMark size={180} /><div className="about-art-bottom"><span>Different disciplines.</span><span>A shared direction. ↗</span></div></div><div><p className="eyebrow">04 / MEET THE STUDIO</p><h2>A team you can<br /><em>work with directly.</em></h2><p className="about-lead">We bring web, mobile, and desktop development into one project conversation.</p><p className="about-body">Tell us what you need and how it will be used. We’ll help define the work, discuss the tradeoffs, and keep you involved in the decisions.</p><div className="studio-values copy-benefits"><div><strong>Start with the people using it.</strong><span>Plan the screens, content, and actions around the tasks that matter.</span></div><div><strong>Connect the work.</strong><span>Coordinate your website, mobile apps, and desktop tools through one studio.</span></div><div><strong>Put the scope in writing.</strong><span>Agree on scope, timelines, and deliverables before work begins.</span></div></div><a href="#contact" className="text-link">Discuss your requirements <ArrowUpRight size={17} /></a></div></div></section>
    <FAQ /><div className="contact-layout studio-container"><aside className="contact-intro"><p className="eyebrow">PROJECT INQUIRIES</p><h2>Tell us what<br /><em>you need.</em></h2><p>Share the task, the people it needs to serve, and any deadlines. It’s fine if you don’t have a complete brief yet.</p><div className="contact-expectations"><h3>What happens next</h3><ol><li>We review your project details.</li><li>We discuss your goals and questions.</li><li>We agree on a clear way forward.</li></ol></div><span className="contact-small">No commitment until we agree on the scope.</span></aside><Contact /></div>
  </main><Footer /></div>;
}
