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
    <section id="about" className="studio-section about-section"><div className="studio-container about-layout"><div className="about-art" aria-hidden="true"><span>APPFOLOR / THE STUDIO</span><LogoMark size={180} /><div className="about-art-bottom"><span>Different disciplines.</span><span>A shared direction. ↗</span></div></div><div><p className="eyebrow">04 / MEET THE STUDIO</p><h2>Different skills.<br /><em>One shared focus.</em></h2><p className="about-lead">Making digital experiences that feel right — for your business and the people who use them.</p><p className="about-body">AppFolor brings web development, Android, iOS, and video editing into one coordinated studio. We combine specialist expertise with clear communication, practical planning, and attention to the details.</p><div className="studio-values"><div><strong>Built around you</strong><span>Scope shaped by your goals.</span></div><div><strong>Connected expertise</strong><span>The right skills, working together.</span></div></div><a href="#contact" className="text-link">Tell us what you’re thinking <ArrowUpRight size={17} /></a></div></div></section>
    <FAQ /><div className="contact-layout studio-container"><aside className="contact-intro"><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>Something <br />in mind?<br /><em>Let’s make <br />it happen.</em></h2><p>A new idea, a better website, or a product ready for its next step. Tell us where you want to go.</p><div className="contact-expectations"><h3>What happens next</h3><ol><li>We review your project details.</li><li>We discuss your goals and questions.</li><li>We agree on a clear way forward.</li></ol></div><span className="contact-small">No commitment until we agree on the scope.</span></aside><Contact /></div>
  </main><Footer /></div>;
}
