import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="paper-texture flex min-h-[80vh] items-center bg-cream px-6 pt-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="plate px-8 py-12">
          <p className="sign-label text-[#f2c36a]">404</p>
          <h1 className="mt-3 text-4xl text-cream md:text-5xl">Papan ini belum dipasang</h1>
        </div>
        <p className="mt-8 leading-relaxed text-soot">Halaman yang Anda cari tidak ada. Mungkin alamatnya salah ketik.</p>
        <Link href="/" className="mt-6 inline-flex bg-enamel px-7 py-3.5 font-bold text-cream hover:bg-enamel-2">Kembali ke beranda</Link>
      </div>
    </main>
  );
}
