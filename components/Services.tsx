import { ArrowUpRight, Code2, Smartphone, Apple, Layers3, Film } from "lucide-react";

const services = [
  {number:"01",title:"Web Development",icon:Code2,description:"A better home for your business online. From focused landing pages to custom web applications.",tags:["Business websites","Web applications","Landing pages"]},
  {number:"02",title:"Android Development",icon:Smartphone,description:"Thoughtful Android experiences, shaped around your users and the way your business works.",tags:["Android apps","API integration","App maintenance"]},
  {number:"03",title:"iOS Development",icon:Apple,description:"Considered iPhone and iPad applications with clear navigation and a polished experience.",tags:["iPhone & iPad","Service platforms","API integration"]},
  {number:"04",title:"Android & iOS, together",icon:Layers3,description:"Two platforms. One coordinated project. Shared planning with development tailored to each platform.",tags:["Aligned design","Shared milestones","Coordinated delivery"]},
  {number:"05",title:"Video Editing",icon:Film,description:"Turn your footage into a story worth watching. Clear cuts, thoughtful pacing, and platform-ready delivery.",tags:["Social content","Brand videos","Promotional campaigns"]},
];

export default function Services() {
  return <section id="services" className="studio-section services-section"><div className="studio-container">
    <div className="section-heading"><div><p className="eyebrow">02 / WHAT WE DO</p><h2>The right expertise.<br /><em>All in one place.</em></h2></div><p>Start with one service, or bring them together. We build a clear plan around what your project actually needs.</p></div>
    <div className="service-list">{services.map(({number,title,icon:Icon,description,tags})=><article key={number} className="service-row"><span className="service-number">{number}</span><div className="service-title"><Icon size={23} aria-hidden="true" /><h3>{title}</h3></div><div className="service-description"><p>{description}</p><div className="service-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><a href="#contact" className="service-arrow" aria-label={`Discuss ${title}`}><ArrowUpRight size={22} /></a></article>)}</div>
  </div></section>;
}
