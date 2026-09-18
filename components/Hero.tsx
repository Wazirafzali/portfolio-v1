import { ArrowDown, ArrowUpRight } from "lucide-react";
import ProductVisual from "@/components/ProductVisual";
import CodeAtmosphere from "@/components/CodeAtmosphere";

export default function Hero() {
  return <section className="studio-hero" aria-labelledby="hero-heading">
    <CodeAtmosphere />
    <div className="studio-container hero-layout">
      <div className="hero-copy">
        <span className="availability"><span /> Open for new projects</span>
        <p className="eyebrow">INDEPENDENT DIGITAL STUDIO</p>
        <h1 id="hero-heading">Good ideas.<br />Great digital<br /><em>experiences.</em></h1>
        <p className="hero-description">We build websites, Android &amp; iOS apps, and edit videos that help your business take its next step.</p>
        <div className="hero-actions"><a className="studio-button primary-button" href="#contact">Let’s build something <ArrowUpRight size={18} /></a><a className="text-link" href="#projects">Explore our work <ArrowDown size={16} /></a></div>
        <div className="hero-note"><span>Clear communication.</span><span>Considered design.</span><span>Focused delivery.</span></div>
      </div>
      <div className="hero-art"><ProductVisual /><div className="hero-art-note"><span>01 / FROM IDEA TO INTERFACE</span><span>Designed for real people.</span></div></div>
    </div>
    <div className="discipline-strip"><div className="studio-container"><span>WEB EXPERIENCES</span><i>✳</i><span>ANDROID &amp; iOS</span><i>✳</i><span>VIDEO EDITING</span><i>✳</i><span>ONE CONNECTED STUDIO</span></div></div>
  </section>;
}
