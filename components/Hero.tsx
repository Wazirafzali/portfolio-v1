import { ArrowDown, ArrowUpRight, Code2, Smartphone, Film, Monitor } from "lucide-react";
import LogoMark from "@/components/LogoMark";

export default function Hero() {
  return <section className="studio-hero sculpted-hero" aria-labelledby="hero-heading">
    <div className="studio-container hero-layout">
      <div className="hero-copy">
        <span className="availability"><span /> Available for new projects</span>
        <p className="eyebrow">APPFOLOR / DIGITAL STUDIO</p>
        <h1 id="hero-heading">Websites and apps.<br /><em>Built around your work.</em></h1>
        <p className="hero-description">AppFolor builds for businesses, teams, and independent creators. Bring us a website, Android or iOS app, desktop tool, or video editing brief.</p>
        <div className="hero-actions">
          <a className="studio-button primary-button" href="#contact">Discuss your project <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#projects">See our work <ArrowDown size={16} /></a>
        </div>
        <div className="hero-note"><span>Clear scope</span><span>Regular reviews</span><span>Agreed deliverables</span></div>
      </div>
      <div className="sculpture-stage" aria-label="Explore our web, mobile, desktop and video services">
        <div className="sculpture-orbit" aria-hidden="true" />
        <div className="clay-sphere" aria-hidden="true" />
        <div className="clay-ring" aria-hidden="true" />
        <div className="clay-brand" aria-hidden="true"><LogoMark size={105} /><span>AppFolor studio</span></div>
        <a href="#web-development" className="floating-service floating-web"><span className="clay-icon"><Code2 size={24} /></span><span><small>01 / WEB</small><strong>Websites & web apps</strong></span><ArrowUpRight size={17} /></a>
        <a href="#android-development" className="floating-service floating-mobile"><span className="clay-icon"><Smartphone size={24} /></span><span><small>02 / ANDROID &amp; iOS</small><strong>Mobile applications</strong></span><ArrowUpRight size={17} /></a>
        <a href="#desktop-app-development" className="floating-service floating-desktop"><span className="clay-icon"><Monitor size={24} /></span><span><small>03 / DESKTOP APPS</small><strong>Tools for your team</strong></span><ArrowUpRight size={17} /></a>
        <a href="#video-editing" className="floating-service floating-video"><span className="clay-icon"><Film size={24} /></span><span><small>04 / VIDEO</small><strong>Edits for your audience</strong></span><ArrowUpRight size={17} /></a>
        <span className="sculpture-caption">WEB / MOBILE / DESKTOP / VIDEO</span>
      </div>
    </div>
    <div className="discipline-strip"><div className="studio-container"><span>WEB EXPERIENCES</span><i>·</i><span>ANDROID &amp; iOS</span><i>·</i><span>DESKTOP APPS</span><i>·</i><span>VIDEO EDITING</span><i>·</i><span>ONE CONNECTED STUDIO</span></div></div>
  </section>;
}
