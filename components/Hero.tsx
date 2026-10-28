import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Smartphone, Monitor } from "lucide-react";
import desktop from "@/public/projects/farm-pro/desktop.jpg";
import mobile from "@/public/projects/medlearna/home.jpg";

export default function Hero() {
  return <section className="studio-hero reference-hero" aria-labelledby="hero-heading">
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
      <div className="product-stage">
        <div className="stage-label"><span>BUILT BY OUR TEAM</span><span>01 / 02</span></div>
        <Link href="/projects/farm-pro" className="stage-desktop"><span className="device-toolbar"><i /><i /><i /><span>Farm Pro · Windows & Android</span></span><Image src={desktop} alt="Farm Pro desktop application dashboard" sizes="(max-width: 800px) 85vw, 620px" priority /></Link>
        <Link href="/projects/meadlearna" className="stage-phone"><Image src={mobile} alt="Medlearna mobile learning application" sizes="(max-width: 800px) 27vw, 180px" priority /></Link>
        <p className="stage-caption">Real applications.<br /><strong>Made for daily use.</strong></p>
      </div>
    </div>
    <nav className="studio-container service-shortcuts" aria-label="Explore development services">
      {[{ label: "Web development", href: "#web-development", icon: Code2 }, { label: "Android & iOS", href: "#android-ios-development", icon: Smartphone }, { label: "Desktop applications", href: "#desktop-app-development", icon: Monitor }].map(({ label, href, icon: Icon }, index) => <a key={href} href={href}><span className="shortcut-number">0{index + 1}</span><Icon size={22} /><span>{label}</span><ArrowUpRight size={18} /></a>)}
    </nav>
  </section>;
}
