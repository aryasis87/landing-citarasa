import { KASUS, SITE } from "@/lib/citarasa";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/studi-kasus`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...KASUS.map((k) => ({ url: `${SITE}/studi-kasus/${k.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 })),
  ];
}
