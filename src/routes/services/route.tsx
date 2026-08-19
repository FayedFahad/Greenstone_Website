import { CtaBand } from "@/components/cta-band";
import { NamedIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { PROCESS, SERVICES } from "@/data/site-data";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | Greenstone Solutions" },
      {
        name: "description",
        content:
          "Custom software development, cloud infrastructure, mobile apps, and IT consulting from Greenstone Solutions LLC, Austin, TX.",
      },
    ],
  }),
});

function Services() {
  return (
    <main id="main">
      <PageHero
        eyebrow="What We Do"
        title="Services built around your business"
        lede="From a single custom tool to full product builds, here's how Greenstone Solutions can help."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {SERVICES.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={flip ? "section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]" : "section"}
            aria-labelledby={`${s.id}-h`}
          >
            <div className="wrap grid items-center gap-10 lg:grid-cols-2">
              <Reveal variant={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                <div className="icon-well">
                  <NamedIcon name={s.icon} />
                </div>
                <h2 id={`${s.id}-h`} className="mt-2 text-3xl sm:text-4xl">
                  {s.id === "custom-software"
                    ? "Custom Software Development"
                    : s.id === "mobile"
                      ? "Mobile App Development"
                      : s.id === "consulting"
                        ? "IT Consulting & Strategy"
                        : s.title}
                </h2>
                <p className="lede mt-4 mb-6">{s.lede}</p>
                <ul className="flex flex-col gap-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-5 shrink-0 text-moss" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal variant={flip ? "left" : "right"} className={flip ? "lg:order-1" : ""}>
                <TiltCard className="grid min-h-[240px] place-items-center p-12">
                  <div className="grid size-28 place-items-center rounded-3xl bg-moss/12 text-moss">
                    <NamedIcon name={s.icon} className="size-14" />
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section" aria-labelledby="process-heading">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">How We Work</span>
            <h2 id="process-heading" className="mt-3 text-3xl sm:text-4xl">
              A straightforward process
            </h2>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="process-line" aria-hidden="true" />
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <TiltCard className="relative h-full p-6">
                  <div className="icon-well font-display text-lg font-semibold">{p.step}</div>
                  <h3 className="mb-2 text-xl">{p.title}</h3>
                  <p className="text-sm text-muted">{p.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        body="Tell us about your project and we'll help you figure out the right approach."
        primary={{ to: "/contact", label: "Get a Free Consultation" }}
      />
    </main>
  );
}
