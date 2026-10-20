import CodeAtmosphere from "@/components/CodeAtmosphere";
import { ArrowUpRight, Code2, Smartphone, Apple, Layers3, Monitor } from "lucide-react";

const services = [
  {id:"web-development",number:"01",title:"Web Development",icon:Code2,description:"Business websites, landing pages, and web applications. We plan the pages and features around what your visitors need to do.",tags:["Business websites","Web applications","Landing pages"]},
  {id:"android-development",number:"02",title:"Android Development",icon:Smartphone,description:"Android apps for customer services and business tasks, with API connections and maintenance scoped to your project.",tags:["Android apps","API integration","App maintenance"]},
  {id:"ios-development",number:"03",title:"iOS Development",icon:Apple,description:"iPhone and iPad apps, from screen design to service integration. We define the devices and features your project needs.",tags:["iPhone & iPad","Service platforms","API integration"]},
  {id:"android-ios-development",number:"04",title:"Android & iOS, together",icon:Layers3,description:"Launch an Android and iOS project with shared requirements, aligned design, and coordinated reviews for both platforms.",tags:["Aligned design","Shared milestones","Coordinated delivery"]},
  {id:"desktop-app-development",number:"05",title:"Desktop App Development",icon:Monitor,description:"Custom desktop tools for business tasks, workflow automation, and API integration. We agree on operating systems and installation needs before development.",tags:["Business tools","Workflow automation","API integration"]},
];

export default function Services() {
  return <section id="services" className="studio-section motion-section services-section"><CodeAtmosphere /><div className="studio-container">
    <div className="section-heading"><div><p className="eyebrow">02 / WHAT WE DO</p><h2>What do you need<br /><em>to build?</em></h2></div><p>Choose a single service or combine them in one brief. We agree on the deliverables before work begins.</p></div>
    <div className="service-list">{services.map(({id,number,title,icon:Icon,description,tags})=><article key={id} id={id} className="service-row"><span className="service-number">{number}</span><div className="service-title"><Icon size={23} aria-hidden="true" /><h3>{title}</h3></div><div className="service-description"><p>{description}</p><div className="service-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><a href="#contact" className="service-arrow" aria-label={`Discuss ${title}`}><ArrowUpRight size={22} /></a></article>)}</div>
  </div></section>;
}
