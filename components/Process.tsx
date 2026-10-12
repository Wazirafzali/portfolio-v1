import CodeAtmosphere from "@/components/CodeAtmosphere";
const steps = [
  {number:"01",title:"Define the brief",description:"Tell us what you have in mind. We clarify your goals, audience, and the problem you want to solve.",output:"Goals & requirements"},
  {number:"02",title:"Agree on scope",description:"We agree on scope, deliverables, timeline, and price before work begins. Review points are part of that plan.",output:"Scope & milestones"},
  {number:"03",title:"Review the work",description:"We share the work at agreed milestones so you can review it, ask questions, and request changes.",output:"Feedback & revisions"},
  {number:"04",title:"Test and hand over",description:"We test, refine, and hand over the agreed deliverables, with support defined in your project agreement.",output:"Files, access & next steps"},
];
export default function Process() {
  return <section id="process" className="studio-section motion-section process-section"><CodeAtmosphere /><div className="studio-container"><div className="section-heading"><div><p className="eyebrow">03 / HOW WE WORK</p><h2>From brief<br /><em>to handover.</em></h2></div><p>You’ll know what is being delivered, when your feedback is needed, and who to contact.</p></div><div className="process-grid">{steps.map(step=><article key={step.number}><span className="process-number">{step.number}<i /></span><h3>{step.title}</h3><p>{step.description}</p><span className="process-output">{step.output}</span></article>)}</div></div></section>;
}
