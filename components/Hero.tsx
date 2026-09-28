import { ArrowDown, ArrowUpRight, Code2, Smartphone, Film } from "lucide-react";
import ProductVisual from "@/components/ProductVisual";
import CodeAtmosphere from "@/components/CodeAtmosphere";

export default function Hero() {
  return <section className="studio-hero" aria-labelledby="hero-heading">
    <CodeAtmosphere />
    <div className="studio-container hero-layout">
      <div className="hero-copy">
        <span className="availability"><span /> Available for new projects</span>
        <p className="eyebrow">APPFOLOR / DIGITAL DESIGN & DEVELOPMENT</p>
        <h1 id="hero-heading">Your next idea.<br /><em>Beautifully</em><br />built.</h1>
        <p className="hero-description">Websites, Android &amp; iOS apps, and video content. Thoughtfully designed. Carefully delivered.</p>
        <div className="hero-actions">
          <a className="studio-button primary-button" href="#contact">Tell us your idea <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#projects">Explore the work <ArrowDown size={16} /></a>
        </div>
        <div className="hero-note"><span>Clear scope</span><span>Shared milestones</span><span>One project contact</span></div>
      </div>
      <div className="hero-art hero-composition">
        <div className="composition-label"><span>THE APPFOLOR APPROACH</span><span>IDEA → EXPERIENCE</span></div>
        <ProductVisual />
        <div className="composition-capabilities">
          <span><Code2 size={17} /> Web</span><span><Smartphone size={17} /> Android &amp; iOS</span><span><Film size={17} /> Video</span>
        </div>
        <div className="hero-art-note"><span>DESIGN WITH INTENTION.</span><span>Build with care. ↗</span></div>
      </div>
    </div>
    <div className="discipline-strip"><div className="studio-container"><span>WEB EXPERIENCES</span><i>✳</i><span>ANDROID &amp; iOS</span><i>✳</i><span>VIDEO EDITING</span><i>✳</i><span>ONE CONNECTED STUDIO</span></div></div>
  </section>;
}
