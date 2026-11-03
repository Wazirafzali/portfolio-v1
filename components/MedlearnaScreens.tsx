import Image from "next/image";

export default function MedlearnaScreens() {
  return <section className="studio-container medlearna-gallery" aria-labelledby="medlearna-screens">
    <p className="eyebrow">INSIDE THE APPLICATION</p>
    <h2 id="medlearna-screens">Inside Medlearna</h2>
    <p className="medlearna-intro">Updated app screens: the learning overview and account settings.</p>
    <div className="medlearna-screens">
      <figure><a href="/projects/medlearna/overview.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Medlearna home screenshot"><Image src="/projects/medlearna/overview.jpg" alt="Medlearna overview with course search, exams, flashcards and bottom navigation" width={649} height={1280} sizes="(max-width: 640px) 85vw, 420px" /></a><figcaption><strong>01 / Your learning home</strong><span>Course search, practice and learning sections in one overview.</span></figcaption></figure>
      <figure><a href="/projects/medlearna/settings.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Medlearna settings screenshot"><Image src="/projects/medlearna/settings.jpg" alt="Medlearna settings with profile, subscriptions, course purchases, offline videos, appearance and language" width={649} height={1280} sizes="(max-width: 640px) 85vw, 420px" /></a><figcaption><strong>02 / Account and settings</strong><span>Account access, offline videos, appearance and language preferences.</span></figcaption></figure>
    </div>
  </section>;
}
