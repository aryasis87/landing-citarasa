export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://landing-citarasa.vercel.app/sitemap.xml",
    host: "https://landing-citarasa.vercel.app",
  };
}
