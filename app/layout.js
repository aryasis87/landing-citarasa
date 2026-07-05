import { Abril_Fatface, Lora } from "next/font/google";
import "./globals.css";

const abril = Abril_Fatface({ variable: "--font-abril", subsets: ["latin"], weight: "400" });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });

export const metadata = {
  title: "CitaRasa Digital — Solusi Digital Bisnis Kuliner",
  description: "CitaRasa Digital: transformasikan bisnis kuliner Anda dengan solusi digital inovatif — sejak 1985 bercita rasa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${abril.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
