import { Abril_Fatface, Lora } from "next/font/google";
import MotionProvider from "./components/MotionProvider";
import "./globals.css";

const abril = Abril_Fatface({ variable: "--font-abril", subsets: ["latin"], weight: "400" });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"CitaRasa Digital","description":"Solusi digital bisnis kuliner","url":"https://citarasa.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://citarasa.pintuweb.com"),
  title: "CitaRasa Digital — Solusi Digital Bisnis Kuliner",
  description: "CitaRasa Digital: transformasikan bisnis kuliner Anda dengan solusi digital inovatif bergaya retro yang menggugah selera.",
  applicationName: "CitaRasa Digital",
  keywords: ["solusi digital kuliner", "bisnis kuliner", "digitalisasi restoran", "marketing kuliner"],
  authors: [{ name: "CitaRasa Digital" }],
  creator: "CitaRasa Digital",
  publisher: "CitaRasa Digital",
  alternates: { canonical: "https://citarasa.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://citarasa.pintuweb.com",
    siteName: "CitaRasa Digital",
    title: "CitaRasa Digital — Solusi Digital Bisnis Kuliner",
    description: "CitaRasa Digital: transformasikan bisnis kuliner Anda dengan solusi digital inovatif bergaya retro yang menggugah selera.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "CitaRasa Digital — Solusi Digital Bisnis Kuliner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitaRasa Digital — Solusi Digital Bisnis Kuliner",
    description: "CitaRasa Digital: transformasikan bisnis kuliner Anda dengan solusi digital inovatif bergaya retro yang menggugah selera.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${abril.variable} ${lora.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
