import Image from "next/image";
import desktop from "@/public/projects/farm-pro/desktop.jpg";
import android from "@/public/projects/farm-pro/android.jpg";

export default function FarmProScreens({ compact = false }: { compact?: boolean }) {
  const screens = [
    { image: desktop, label: "Windows desktop", alt: "Farm Pro Windows dashboard with stock, flock, sales and cash summaries" },
    { image: android, label: "Android app", alt: "Farm Pro Android dashboard with financial summaries and farm operations" },
  ];
  return <div className={compact ? "farm-screens farm-screens-compact" : "studio-container farm-screens farm-screens-detail"}>
    {screens.map(({ image, label, alt }) => <figure key={label}>
      {compact ? <Image src={image} alt="" sizes="(max-width: 800px) 60vw, 720px" /> :
        <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${label} screenshot`}>
          <Image src={image} alt={alt} sizes={label === "Android app" ? "(max-width: 700px) 85vw, 320px" : "(max-width: 700px) 90vw, 920px"} />
        </a>}
      <figcaption>{label}</figcaption>
    </figure>)}
  </div>;
}
