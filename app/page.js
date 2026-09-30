import Hero from "./components/hero/Hero";
import Masalah from "./components/Masalah";
import Layanan from "./components/Layanan";
import KasusTeaser from "./components/KasusTeaser";
import Proses from "./components/Proses";
import LeadForm from "./components/leadform/LeadForm";
import FAQ from "./components/FAQ";
import { LAYANAN, SITE } from "@/lib/citarasa";

const ld = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CitaRasa Digital",
  url: SITE,
  description: "Jasa digitalisasi menu, foto menu, profil peta, dan pesanan WhatsApp untuk rumah makan yang sudah lama berdiri.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan",
    itemListElement: LAYANAN.map((l) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: l.judul } })),
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Masalah />
      <Layanan />
      <KasusTeaser />
      <Proses />
      <LeadForm />
      <FAQ />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
