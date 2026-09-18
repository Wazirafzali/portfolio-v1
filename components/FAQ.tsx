import CodeAtmosphere from "@/components/CodeAtmosphere";
const faqs = [
  ["What does a project cost?","Every project has a different scope. Share your goals, requirements, and an optional budget range. We’ll discuss a project estimate and agree on scope and pricing before work starts."],
  ["Can you build for both Android and iOS?","Yes. We coordinate Android and iOS as one project, aligning requirements, design direction, and milestones while addressing each platform’s needs."],
  ["How will we work together?","You’ll have a single project contact for planning, updates, and reviews. Our workflow supports remote collaboration, including clients in different countries."],
  ["How long will it take?","Timing depends on the features, complexity, content, and review process. We’ll agree on milestones and a delivery schedule after reviewing your requirements."],
  ["What if the scope changes?","We can discuss changes throughout the project. If they affect the agreed scope, we explain the impact on time and cost before continuing."],
  ["What happens after delivery?","We hand over the files, access, or deployment agreed for your project. Maintenance, updates, and post-delivery support can be included in your agreement."],
];
export default function FAQ() {
  return <section id="faq" className="studio-section motion-section faq-section"><CodeAtmosphere /><div className="studio-container faq-layout"><div><p className="eyebrow">A FEW GOOD QUESTIONS</p><h2>Before we<br /><em>get started.</em></h2><p className="faq-intro">Something else on your mind?<br /><a className="text-link" href="#contact">Let’s talk about it ↗</a></p></div><div className="faq-items">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>;
}
