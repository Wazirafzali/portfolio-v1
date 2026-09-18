import CodeAtmosphere from "@/components/CodeAtmosphere";
const steps = [
  {number:"01",title:"First, we listen.",description:"Tell us what you have in mind. We clarify your goals, audience, and the problem you want to solve.",output:"A shared understanding"},
  {number:"02",title:"Make a clear plan.",description:"We agree on scope, deliverables, timeline, and price before work begins. Everyone knows what comes next.",output:"Scope & milestones"},
  {number:"03",title:"Build. Review. Refine.",description:"The right specialists bring the project to life, with agreed review points to keep you involved.",output:"Visible progress"},
  {number:"04",title:"Ready for the next step.",description:"We test, refine, and hand over the agreed deliverables, with support defined in your project agreement.",output:"A considered handover"},
];
export default function Process() {
  return <section id="process" className="studio-section motion-section process-section"><CodeAtmosphere /><div className="studio-container"><div className="section-heading"><div><p className="eyebrow">03 / HOW WE WORK</p><h2>Good work starts<br /><em>with a clear process.</em></h2></div><p>One project contact. Shared milestones. Enough structure to keep things moving, and room for a real conversation.</p></div><div className="process-grid">{steps.map(step=><article key={step.number}><span className="process-number">{step.number}<i /></span><h3>{step.title}</h3><p>{step.description}</p><span className="process-output">{step.output}</span></article>)}</div></div></section>;
}
