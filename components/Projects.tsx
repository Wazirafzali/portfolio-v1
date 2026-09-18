"use client";
import CodeAtmosphere from "@/components/CodeAtmosphere";


import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProductVisual from "@/components/ProductVisual";

const categories = ["All","Web","Android","iOS","Video"] as const;
type Category = typeof categories[number];

export default function Projects() {
  const [category,setCategory] = useState<Category>("All");
  const [expanded,setExpanded] = useState(false);
  const filtered = projects.filter(project=>category==="All"||project.category===category);
  const shown = category==="All"&&!expanded ? [projects[0],projects[3],projects[5]] : filtered;
  return <section id="projects" className="studio-section motion-section work-section"><CodeAtmosphere /><div className="studio-container">
    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK &amp; EXPLORATIONS</p><h2>A little of<br /><em>what’s possible.</em></h2></div><p>Our studio website, alongside concepts exploring web, mobile, and video. Concept projects are clearly labeled.</p></div>
    <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{categories.map(item=><button key={item} type="button" aria-pressed={category===item} onClick={()=>{setCategory(item);setExpanded(false);}}>{item}</button>)}</div><span className="project-count" role="status">{shown.length} {shown.length===1?"project":"projects"}</span></div>
    <div className={`work-grid ${category==="All"&&!expanded?"curated-grid":""}`}>
      {shown.map((project,index)=><article key={project.slug} className={`work-card ${index===0&&category==="All"&&!expanded?"featured-work":""}`}>
        <Link href={`/projects/${project.slug}`} className="work-visual-link" tabIndex={-1} aria-hidden="true"><ProductVisual variant={project.category==="Video"?"video":project.category==="Android"||project.category==="iOS"?"mobile":project.slug==="developer-portfolio"?"studio":"dashboard"} /></Link>
        <div className="work-meta"><span>{project.category=== "Web"?"WEB EXPERIENCE":project.category=== "Video"?"VIDEO EDITING":"MOBILE EXPERIENCE"}</span><span className={project.type==="REAL PROJECT"?"project-badge live-badge":"project-badge"}>{project.type==="REAL PROJECT"?"Studio project":"Concept exploration"}</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}<ArrowUpRight size={23} aria-hidden="true" /></Link></h3><p>{project.shortDescription}</p>
      </article>)}
    </div>
    {category==="All"&&!expanded&&<div className="work-more"><button className="studio-button outline-button" onClick={()=>setExpanded(true)}>View all {projects.length} projects <ArrowUpRight size={17} /></button><p>Ideas, experiments, and work in the real world.</p></div>}
  </div></section>;
}
