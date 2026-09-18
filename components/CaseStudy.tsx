import CodeAtmosphere from "@/components/CodeAtmosphere";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import ProductVisual from "@/components/ProductVisual";
import Footer from "@/components/Footer";
import type { Project } from "@/data/projects";

export default function CaseStudy({project}:{project:Project}) {
  const isConcept = project.type === "CONCEPT PROJECT";
  return <div className="studio-site" id="top"><header className="studio-header"><nav className="studio-container studio-nav" aria-label="Project navigation"><Link href="/" className="studio-brand" aria-label="AppFolor home"><BrandLogo /></Link><Link href="/#projects" className="text-link"><ArrowLeft size={16} />Back to work</Link></nav></header><main>
    <div className="interior-motion"><CodeAtmosphere /><section className="case-heading studio-container"><p className="eyebrow">{project.category.toUpperCase()} / {isConcept?"CONCEPT EXPLORATION":"STUDIO PROJECT"}</p><h1>{project.title}</h1><p>{project.description}</p><div className="case-actions">{project.liveUrl&&<a className="studio-button primary-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={17} /></a>}<Link href="/#contact" className="text-link">Discuss a similar project <ArrowUpRight size={17} /></Link></div></section></div>
    <div className="studio-container case-cover"><ProductVisual variant={project.category==="Video"?"video":project.category==="Android"||project.category==="iOS"?"mobile":project.slug==="developer-portfolio"?"studio":"dashboard"} /><p>{isConcept?"Illustrative concept visualization. This is an exploration, not a completed client engagement.":"AppFolor brand exploration. Visit the live website to explore the implemented experience."}</p></div>
    <section className="studio-section case-story"><div className="studio-container"><div className="section-heading"><div><p className="eyebrow">THE THINKING BEHIND THE WORK</p><h2>From the challenge<br /><em>to the details.</em></h2></div><p>{project.shortDescription}</p></div><div className="case-story-grid">{[{label:"01 / THE CHALLENGE",title:"Where it started.",text:project.challenge},{label:"02 / THE APPROACH",title:isConcept?"An idea takes shape.":"A considered approach.",text:project.solution},{label:"03 / THE OUTCOME",title:isConcept?"A direction to explore.":"What came together.",text:project.result}].map(item=><article key={item.label}><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="case-tools"><span>Tools &amp; technologies</span><div>{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></div></div></section>
    <section className="studio-container case-next"><p className="eyebrow">YOUR PROJECT COULD BE NEXT</p><h2>Have something<br /><em>in mind?</em></h2><Link href="/#contact" className="studio-button primary-button">Let’s talk about it <ArrowUpRight size={18} /></Link></section>
  </main><Footer /></div>;
}
