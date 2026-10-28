import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return <footer className="studio-footer reference-footer">
    <div className="studio-container">
      <div className="footer-invitation"><p>Have a project to discuss?</p><Link href="/#contact">Let’s plan the next step <ArrowUpRight size={24} /></Link></div>
      <div className="footer-columns">
        <div><Link href="/" className="studio-brand" aria-label="AppFolor home"><BrandLogo /></Link><p>Websites and applications.<br />From a defined brief to delivery.</p><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a></div>
        <nav aria-label="Footer studio links"><h2>Studio</h2><Link href="/#projects">Selected work</Link><Link href="/#process">Our approach</Link><Link href="/#about">About AppFolor</Link><Link href="/#contact">Contact</Link></nav>
        <nav aria-label="Footer services"><h2>Development</h2><Link href="/#web-development">Websites & web apps</Link><Link href="/#android-development">Android apps</Link><Link href="/#ios-development">iOS apps</Link><Link href="/#desktop-app-development">Desktop applications</Link></nav>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} AppFolor. All rights reserved.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="#top">Back to top ↑</a></div></div>
    </div>
  </footer>;
}
