import CodeAtmosphere from "@/components/CodeAtmosphere";
import LogoMark from "@/components/LogoMark";
import { ArrowDown, ArrowUpRight, Code2, Smartphone, Monitor } from "lucide-react";

export default function Hero() {
  return <section className="studio-hero reference-hero" aria-labelledby="hero-heading">
    <CodeAtmosphere />
    <div className="studio-container reference-hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">APPFOLOR / DEVELOPMENT STUDIO</p>
        <h1 id="hero-heading">Software for<br /><em>the way you work.</em></h1>
        <p className="hero-description">Websites, Android and iOS apps, and desktop tools for businesses and teams. From the first brief to the finished product, we keep the work clear and the conversation open.</p>
        <div className="hero-actions">
          <a className="studio-button primary-button" href="#contact">Discuss your project <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#projects">Explore our work <ArrowDown size={16} /></a>
        </div>
        <div className="hero-note"><span>Clear scope</span><span>Regular reviews</span><span>Agreed deliverables</span></div>
      </div>
      <div className="sculpture-stage" aria-label="Explore our web, mobile and desktop services">
        <div className="sculpture-orbit" aria-hidden="true" />
        <div className="clay-sphere" aria-hidden="true" />
        <div className="clay-ring" aria-hidden="true" />
        <div className="clay-brand" aria-hidden="true"><LogoMark size={105} /><span>AppFolor studio</span></div>
        <a href="#web-development" className="floating-service floating-web"><span className="clay-icon"><Code2 size={24} /></span><span><small>01 / WEB</small><strong>Websites & web apps</strong></span><ArrowUpRight size={17} /></a>
        <a href="#android-development" className="floating-service floating-mobile"><span className="clay-icon"><Smartphone size={24} /></span><span><small>02 / ANDROID &amp; iOS</small><strong>Mobile applications</strong></span><ArrowUpRight size={17} /></a>
        <a href="#desktop-app-development" className="floating-service floating-desktop"><span className="clay-icon"><Monitor size={24} /></span><span><small>03 / DESKTOP APPS</small><strong>Tools for your team</strong></span><ArrowUpRight size={17} /></a>
        <span className="sculpture-caption">WEB / MOBILE / DESKTOP</span>
      </div>
    </div>
    <nav className="studio-container service-shortcuts" aria-label="Explore development services">
      {[{ label: "Web development", href: "#web-development", icon: Code2 }, { label: "Android & iOS", href: "#android-ios-development", icon: Smartphone }, { label: "Desktop applications", href: "#desktop-app-development", icon: Monitor }].map(({ label, href, icon: Icon }, index) => <a key={href} href={href}><span className="shortcut-number">0{index + 1}</span><Icon size={22} /><span>{label}</span><ArrowUpRight size={18} /></a>)}
    </nav>
  </section>;
}



