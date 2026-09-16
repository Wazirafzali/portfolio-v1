import { profile } from "@/data/profile";
import { teamInfo } from "@/data/team";
export default function StructuredData() {
  const organizationId = profile.siteUrl + "/#organization";
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": organizationId, name: "AppFolor", url: profile.siteUrl, logo: profile.siteUrl + "/brand/appfolor-mark.png", description: teamInfo.shortDescription,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "AppFolor Services", itemListElement: ["Web Development", "Android Development", "iOS Development", "Coordinated Android & iOS Projects", "Video Editing"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, provider: { "@id": organizationId } } })) } },
    { "@type": "WebSite", "@id": profile.siteUrl + "/#website", name: "AppFolor", url: profile.siteUrl, publisher: { "@id": organizationId } }
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }} />;
}
