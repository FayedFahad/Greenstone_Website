import { Directory, type Crumb } from "@/components/directory";
import { SplitWords } from "@/components/split-words";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="hero hero-simple">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="wrap relative">
        <Directory crumbs={crumbs} />
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
          <SplitWords text={title} />
        </h1>
        <p className="lede mt-5">{lede}</p>
      </div>
    </section>
  );
}
