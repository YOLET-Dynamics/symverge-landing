import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Industries } from "@/components/industries";
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
        "SYMVERGE designs the workflow behind your business — workflow design, automation, CRM systems, dashboards, and custom software that help businesses get more customers, save time, and grow revenue.",
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
      name: "SYMVERGE Platforms | We Design the Workflow Behind Your Business",
      isPartOf: { "@id": "https://symverge.tech/#website" },
      about: { "@id": "https://symverge.tech/#organization" },
      description:
        "Workflow design, automation, CRM systems, dashboards, and custom software for businesses that want to run smoother. Based in Laurel, Maryland.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://symverge.tech/#service-workflow",
      name: "Workflow Design & Automation",
      provider: { "@id": "https://symverge.tech/#organization" },
      description:
        "We map how your business runs, redesign the workflow, and automate repetitive tasks like follow-ups, reminders, and intake.",
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": ["ProfessionalService", "SoftwareApplication"],
      "@id": "https://symverge.tech/#service-software",
      name: "Custom Software & Systems",
      provider: { "@id": "https://symverge.tech/#organization" },
      description:
        "Bespoke web applications, internal tools, CRM systems, dashboards, and integrations engineered from scratch around how you work.",
      areaServed: { "@type": "Country", name: "United States" },
      applicationCategory: "BusinessApplication",
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
        <Problem />
        <Solution />
        <Services />
        <Process />
        <Industries />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
