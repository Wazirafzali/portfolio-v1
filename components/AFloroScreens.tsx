import Image from "next/image";
import home from "@/public/projects/afloro/home.jpg";
import collection from "@/public/projects/afloro/collection.jpg";
import navigation from "@/public/projects/afloro/navigation.jpg";
import footer from "@/public/projects/afloro/footer.jpg";

const screens = [
  { image: home, label: "Storefront", alt: "AFloro storefront with collection and ordering links" },
  { image: collection, label: "Product discovery", alt: "AFloro collection with category, search and sorting controls" },
  { image: navigation, label: "Mobile navigation", alt: "AFloro mobile menu with collection, cart and ordering information" },
  { image: footer, label: "Store information", alt: "AFloro footer with contact and shopping information" },
];

export default function AFloroScreens({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "afloro-screens afloro-screens-compact" : "studio-container afloro-screens"}>
    {(compact ? screens.slice(0, 2) : screens).map(screen => <figure key={screen.label}>
      <Image src={screen.image} alt={compact ? "" : screen.alt} sizes={compact ? "(max-width: 800px) 40vw, 400px" : "(max-width: 600px) 85vw, (max-width: 1000px) 42vw, 300px"} />
      {!compact && <figcaption>{screen.label}</figcaption>}
    </figure>)}
  </div>;
}
