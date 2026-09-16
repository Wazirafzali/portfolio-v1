import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="studio-footer"><div className="studio-container"><div className="footer-top"><div><Link href="/" className="studio-brand" aria-label="AppFolor home"><BrandLogo /></Link><p>Thoughtful digital work.<br />Built around your next step.</p></div><div className="footer-links"><Link href="/#projects">Our work</Link><Link href="/#services">Services</Link><Link href="/#process">Our approach</Link><Link href="/#contact">Start a project <ArrowUpRight size={15} /></Link></div><div className="footer-note"><span className="availability"><span /> Let’s make something meaningful.</span><p>Web · Android · iOS · Video</p></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} AppFolor. All rights reserved.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="#top">Back to top ↑</a></div></div></div></footer>;
}
