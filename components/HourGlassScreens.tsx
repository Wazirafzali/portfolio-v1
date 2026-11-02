import Image from "next/image";
import home from "@/public/projects/hourglass/home.png";
import demo from "@/public/projects/hourglass/demo.png";
import navigation from "@/public/projects/hourglass/navigation.png";
import templates from "@/public/projects/hourglass/templates.png";
import previews from "@/public/projects/hourglass/previews.png";
import contact from "@/public/projects/hourglass/contact.png";
const screens = [{image:home,label:"Website welcome"},{image:demo,label:"Task planning demo"},{image:navigation,label:"Section navigation"},{image:templates,label:"Starter templates"},{image:previews,label:"App preview gallery"},{image:contact,label:"Contact and support"}];
export default function HourGlassScreens({compact=false}:{compact?:boolean}) {
if(compact) return <Image src={home} alt="" sizes="(max-width:800px) 90vw, 700px" />;
return <div className="studio-container imperial-screens"><p className="eyebrow">HOURGLASS · DEVELOPMENT PREVIEW</p>{screens.map(s=><figure key={s.label}><Image src={s.image} alt={"HourGlass — "+s.label} sizes="(max-width:800px) 90vw, 1200px" /><figcaption>{s.label}</figcaption></figure>)}<p className="imperial-gallery-note">Website screenshots supplied by the creator. Demo tasks use sample data; app screens show development previews.</p></div>;
}
