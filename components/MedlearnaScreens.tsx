import Image from "next/image";

export default function MedlearnaScreens() {
  return <section className="studio-container medlearna-gallery" aria-labelledby="medlearna-screens">
    <p className="eyebrow">INSIDE THE APPLICATION</p>
    <h2 id="medlearna-screens">A closer look at the learning experience.</h2>
    <p className="medlearna-intro">Actual app screens supplied for this case study. The home screen includes a development preview entry.</p>
    <div className="medlearna-screens">
      <figure><a href="/projects/medlearna/home.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Medlearna home screenshot"><Image src="/projects/medlearna/home.jpg" alt="Medlearna home with saved lessons, continue learning, premium subscriptions, course purchases, offline videos and profile navigation" width={1078} height={2054} sizes="(max-width: 640px) 85vw, 420px" /></a><figcaption><strong>01 / Your learning home</strong><span>Study shortcuts and account access in one dashboard.</span></figcaption></figure>
      <figure><a href="/projects/medlearna/learning.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Medlearna learning sections screenshot"><Image src="/projects/medlearna/learning.jpg" alt="Medlearna learning sections showing courses, flashcards, exams with explanations, medical guidelines and calculators" width={1076} height={1913} sizes="(max-width: 640px) 85vw, 420px" /></a><figcaption><strong>02 / Explore and revise</strong><span>Dedicated entry points for lessons, revision and reference tools.</span></figcaption></figure>
    </div>
  </section>;
}
