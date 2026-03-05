import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://symverge.tech/#organization",
      name: "SYMVERGE Platforms LLC",
      url: "https://symverge.tech",
      description:
        "Software engineering and EdTech SaaS company building custom software and education technology platforms.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Laurel",
        addressRegion: "MD",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-571-235-6218",
        email: "contact@symverge.tech",
        contactType: "sales",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://symverge.tech/#website",
      url: "https://symverge.tech",
      name: "SYMVERGE Platforms",
      publisher: { "@id": "https://symverge.tech/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://symverge.tech/#webpage",
      url: "https://symverge.tech",
      name: "SYMVERGE Platforms | Solutions Engineered For You",
      isPartOf: { "@id": "https://symverge.tech/#website" },
      about: { "@id": "https://symverge.tech/#organization" },
      description:
        "Custom software development and EdTech SaaS platforms built for the education sector. Based in Laurel, Maryland.",
      inLanguage: "en-US",
    },
    {
      "@type": ["ProfessionalService", "SoftwareApplication"],
      "@id": "https://symverge.tech/#service-software",
      name: "Custom Software Development",
      provider: { "@id": "https://symverge.tech/#organization" },
      description:
        "Bespoke web applications, internal tools, and complex integrations engineered from scratch.",
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": ["ProfessionalService", "SoftwareApplication"],
      "@id": "https://symverge.tech/#service-edtech",
      name: "EdTech SaaS Platforms",
      provider: { "@id": "https://symverge.tech/#organization" },
      description:
        "Purpose-built SaaS platforms for education: student engagement, administrative tools, and learning analytics.",
      areaServed: { "@type": "Country", name: "United States" },
      applicationCategory: "EducationalApplication",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
