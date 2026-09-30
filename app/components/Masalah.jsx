import { MASALAH } from '@/lib/citarasa';

export default function Masalah() {
  return (
    <section className="bg-cream-2 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="sign-label mb-4 text-enamel">Yang biasanya hilang</p>
          <h2 className="text-[2rem] leading-[1.1] text-soot md:text-[2.8rem]">
            Rasanya tidak berubah. Cara orang menemukannya yang berubah.
          </h2>
        </div>
        <ul className="grid gap-px bg-soot/15 sm:grid-cols-2">
          {MASALAH.map(([j, d], i) => (
            <li key={j} className="bg-cream-2 p-7">
              <span className="font-[family-name:var(--font-abril)] text-3xl text-enamel">{i + 1}.</span>
              <h3 className="mt-3 text-xl text-soot">{j}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
