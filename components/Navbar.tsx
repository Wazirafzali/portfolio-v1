"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Search, LayoutGrid, Code2, Users, Route, Mail } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { profile } from "@/data/profile";

const links = [
  { name: "Selected work", href: "#projects", icon: LayoutGrid },
  { name: "Services", href: "#services", icon: Code2 },
  { name: "Our approach", href: "#process", icon: Route },
  { name: "The studio", href: "#about", icon: Users },
  { name: "Contact", href: "#contact", icon: Mail },
];
export default function Navbar() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  function close() { dialog.current?.close(); }
  return <>
    <aside className="announcement-bar" aria-label="Studio announcement">
      <span>Web, mobile and desktop development</span>
      <a href="#contact">Open for project inquiries <ArrowUpRight size={14} /></a>
    </aside>
    <header className="studio-header">
      <nav className="studio-container studio-nav" aria-label="Main navigation">
        <Link href="/" className="studio-brand" aria-label="AppFolor home"><BrandLogo /></Link>
        <div className="desktop-links">{links.slice(0, 4).map(link => <a key={link.href} href={link.href}>{link.name}</a>)}</div>
        <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={17} /></a>
        <button ref={trigger} className="sidebar-trigger" aria-label="Open navigation sidebar" aria-expanded={open} aria-controls="studio-sidebar" onClick={() => { setQuery(""); dialog.current?.showModal(); setOpen(true); }}><Menu size={22} /></button>
      </nav>
    </header>
    <dialog ref={dialog} id="studio-sidebar" className="studio-sidebar" aria-labelledby="sidebar-title"
      onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); close(); } }}
      onClose={() => { setOpen(false); trigger.current?.focus(); }}
      onClick={event => { if (event.target === dialog.current) { const r = dialog.current.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } }}>
      <div className="sidebar-heading"><span id="sidebar-title">Explore AppFolor</span><button autoFocus type="button" aria-label="Close navigation sidebar" onClick={close}><X size={22} /></button></div>
      <label className="sidebar-search"><Search size={18} /><span className="sr-only">Find a section</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find a section" type="search" /></label>
      <nav aria-label="Sidebar navigation">
        {links.filter(link => link.name.toLowerCase().includes(query.toLowerCase())).map(({ name, href, icon: Icon }) => <a key={href} href={href} onClick={close}><Icon size={20} /><span>{name}</span><ArrowUpRight size={16} /></a>)}
        {!links.some(link => link.name.toLowerCase().includes(query.toLowerCase())) && <p className="sidebar-empty" role="status">No matching sections. Try “services” or “work”.</p>}
      </nav>
      <div className="sidebar-contact"><p>Have a brief in mind?</p><a href={`mailto:${profile.email}`}>{profile.email}</a><span>Tell us what you need to build.</span></div>
    </dialog>
  </>;
}
