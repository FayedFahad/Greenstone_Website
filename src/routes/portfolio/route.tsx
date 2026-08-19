import { CtaBand } from "@/components/cta-band";
import { NamedIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { PORTFOLIO } from "@/data/site-data";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type CSSProperties } from "react";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio | Greenstone Solutions" },
      {
        name: "description",
        content:
          "Selected software, platforms, and systems Greenstone Solutions has designed and built for clients across industries.",
      },
    ],
  }),
});

function Portfolio() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const items = active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);

  return (
    <main id="main">
      <PageHero
        eyebrow="Our Work"
        title="Consulting backed by things we've actually built"
        lede="A selection of the platforms, systems, and applications our team has designed and delivered for clients across industries."
        crumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={active === c ? "btn btn-primary !min-h-10 px-4 text-sm" : "btn btn-ghost !min-h-10 px-4 text-sm"}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i * 50, 250)}>
                <TiltCard className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="icon-well mb-0">
                      <NamedIcon name={p.icon} />
                    </div>
                    <span className="chip is-static">{p.category}</span>
                  </div>
                  <h3 className="mb-3 text-xl">{p.title}</h3>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tags.map((tag, ti) => (
                      <span
                        key={tag}
                        className="chip"
                        style={{ "--tag-delay": `${ti * 40}ms` } as CSSProperties}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted">{p.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        body="Tell us what you're building and we'll get back to you within one business day."
        primary={{ to: "/contact", label: "Start a Project" }}
        secondary={{ to: "/services", label: "Explore Services" }}
      />
    </main>
  );
}
