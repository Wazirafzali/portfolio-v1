"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const links = [{name:"Work",href:"/#projects"},{name:"Services",href:"/#services"},{name:"Our approach",href:"/#process"},{name:"Studio",href:"/#about"}];

export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="studio-header"><nav className="studio-container studio-nav" aria-label="Main navigation">
    <Link href="/" className="studio-brand" aria-label="AppFolor home"><BrandLogo /></Link>
    <div className="desktop-links">{links.map(link=><Link key={link.href} href={link.href}>{link.name}</Link>)}</div>
    <Link href="/#contact" className="nav-contact">Let’s talk <ArrowUpRight size={17} /></Link>
    <button className="menu-toggle" aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X />:<Menu />}</button>
  </nav>{open&&<nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" onKeyDown={event=>{if(event.key==="Escape"){setOpen(false);document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();}}}>{links.map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.name}<ArrowUpRight size={18} /></Link>)}<Link href="/#contact" onClick={()=>setOpen(false)}>Start a project<ArrowUpRight size={18} /></Link></nav>}</header>;
}
