import calendar from "@/public/projects/imperial/admin-calendar.png";
import menus from "@/public/projects/imperial/admin-menus.png";
import Image from "next/image";
import home from "@/public/projects/imperial/home.png";
import hospitality from "@/public/projects/imperial/hospitality.png";
import gallery from "@/public/projects/imperial/gallery.png";

const screens = [
  { image: home, label: "Public website · Welcome", alt: "Imperial Wedding Hall homepage with celebration planning links" },
  { image: hospitality, label: "Public website · Hospitality", alt: "Imperial hospitality section with welcoming copy and service values" },
  { image: gallery, label: "Public website · Gallery", alt: "Imperial gallery layout with illustrative wedding and venue photography" },
];

const adminScreens = [
  { image: calendar, label: "Administration · Booking calendar", alt: "Imperial admin overview with booking totals, deposit summary, pending approvals and availability calendar" },
  { image: menus, label: "Administration · Website and menus", alt: "Imperial catering menu editor with English, Dari and Pashto fields, guest pricing and capacity" },
];

export default function ImperialScreens({ compact = false }: { compact?: boolean }) {
  if (compact) return <Image src={home} alt="" sizes="(max-width: 800px) 90vw, 700px" />;
  return <div className="studio-container imperial-screens">
    <p className="eyebrow">PUBLIC WEBSITE</p>
    {screens.map(screen => <figure key={screen.label}>
      <Image src={screen.image} alt={screen.alt} sizes="(max-width: 800px) 90vw, 1200px" />
      <figcaption>{screen.label}</figcaption>
    </figure>)}
    <section aria-labelledby="imperial-admin-heading">
      <h2 id="imperial-admin-heading">Venue administration</h2>
      <p className="imperial-gallery-note">A separate workspace for reservation oversight and multilingual menu content.</p>
      {adminScreens.map(screen => <figure key={screen.label}>
        <Image src={screen.image} alt={screen.alt} sizes="(max-width: 800px) 90vw, 1200px" />
        <figcaption>{screen.label}</figcaption>
      </figure>)}
    </section>
    <p className="imperial-gallery-note">Screenshots of the public website and administration interface. Venue photography shown in the design is illustrative.</p>
  </div>;
}
