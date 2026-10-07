import { ArrowDown, ArrowUpRight, Code2, Smartphone, Film } from "lucide-react";
import LogoMark from "@/components/LogoMark";

export default function Hero() {
  return <section className="studio-hero sculpted-hero" aria-labelledby="hero-heading">
    <div className="studio-container hero-layout">
      <div className="hero-copy">
        <span className="availability"><span /> Available for new projects</span>
        <p className="eyebrow">APPFOLOR / DIGITAL STUDIO</p>
        <h1 id="hero-heading">Great ideas.<br /><em>Simply</em><br />beautiful.</h1>
        <p className="hero-description">Websites, mobile apps, and video.<br />Made with purpose. Refined to the essentials.</p>
        <div className="hero-actions">
          <a className="studio-button primary-button" href="#contact">Let’s create something <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#projects">Discover our work <ArrowDown size={16} /></a>
        </div>
        <div className="hero-note"><span>Clear scope</span><span>Thoughtful design</span><span>Careful delivery</span></div>
      </div>
      <div className="sculpture-stage" aria-label="Explore our web, mobile and video services">
        <div className="sculpture-orbit" aria-hidden="true" />
        <div className="clay-sphere" aria-hidden="true" />
        <div className="clay-ring" aria-hidden="true" />
        <div className="clay-brand" aria-hidden="true"><LogoMark size={105} /><span>Ideas take shape.</span></div>
        <a href="#services" className="floating-service floating-web"><span className="clay-icon"><Code2 size={24} /></span><span><small>01 / WEB</small><strong>Built to connect.</strong></span><ArrowUpRight size={17} /></a>
        <a href="#services" className="floating-service floating-mobile"><span className="clay-icon"><Smartphone size={24} /></span><span><small>02 / ANDROID &amp; iOS</small><strong>Made to move.</strong></span><ArrowUpRight size={17} /></a>
        <a href="#services" className="floating-service floating-video"><span className="clay-icon"><Film size={24} /></span><span><small>03 / VIDEO</small><strong>Stories that stay.</strong></span><ArrowUpRight size={17} /></a>
        <span className="sculpture-caption">LESS NOISE. MORE POSSIBILITY.</span>
      </div>
    </div>
    <div className="discipline-strip"><div className="studio-container"><span>WEB EXPERIENCES</span><i>·</i><span>ANDROID &amp; iOS</span><i>·</i><span>VIDEO EDITING</span><i>·</i><span>ONE CONNECTED STUDIO</span></div></div>
  </section>;
}
