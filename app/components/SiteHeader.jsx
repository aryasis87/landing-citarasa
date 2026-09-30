import Link from 'next/link';

const NAV = [
  ['/#layanan', 'Layanan'],
  ['/studi-kasus', 'Studi kasus'],
  ['/#proses', 'Proses'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-soot/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-[family-name:var(--font-abril)] text-xl text-enamel">
          CitaRasa <span className="text-soot">Digital</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="sign-label text-soot-soft transition-colors hover:text-enamel">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#audit" className="inline-flex bg-enamel px-4 py-2.5 text-sm font-bold text-cream hover:bg-enamel-2">
          Audit menu gratis
        </Link>
      </div>
    </header>
  );
}
