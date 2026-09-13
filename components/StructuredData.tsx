import { profile } from "@/data/profile";
import { teamInfo } from "@/data/team";

export default function StructuredData() {
  const organizationId = `${profile.siteUrl}/#organization`;
  const personId = `${profile.siteUrl}/#wazir-afzali`;
  const websiteId = `${profile.siteUrl}/#website`;

  const socialLinks = [
    profile.github,
    profile.linkedin,
  ].filter(Boolean);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,

    name: teamInfo.brandName,

    url: profile.siteUrl,

    description:
      "A specialized digital team providing web development, Android development, iOS development, and professional video editing services.",

    founder: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: "Web Developer & Team Lead",
      url: profile.siteUrl,
    },

    sameAs: socialLinks,
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,

    name: profile.name,

    jobTitle: "Web Developer & Team Lead",

    url: profile.siteUrl,

    worksFor: {
      "@id": organizationId,
    },

    sameAs: socialLinks,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,

    name: teamInfo.brandName,

    url: profile.siteUrl,

    description:
      "Web development, Android development, iOS development, and professional video editing services.",

    publisher: {
      "@id": organizationId,
    },
  };

  const jsonLd = [
    organizationJsonLd,
    personJsonLd,
    websiteJsonLd,
  ];

  return (
    <>
      {jsonLd.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      ))}
    </>
  );
}