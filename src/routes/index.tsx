import { CtaBand } from "@/components/cta-band";
import { EmployeeCard } from "@/components/employee-card";
import { NamedIcon } from "@/components/icons";
import { LiveBorder } from "@/components/live-border";
import { Reveal } from "@/components/reveal";
import { SplitWords } from "@/components/split-words";
import { TiltCard } from "@/components/tilt-card";
import { MARQUEE, SERVICES, SKILL_GROUPS, TEAM, WHY } from "@/data/site-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useRef, type CSSProperties, type PointerEvent } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Greenstone Solutions" },
      {
        name: "description",
        content:
          "Greenstone Solutions LLC is a Texas-based consulting firm helping businesses navigate complex challenges with clarity, strategy, and confidence.",
      },
    ],
  }),
});

const STATS = [
  { value: "2024", label: "Texas-Registered LLC" },
  { value: "100%", label: "Client-Focused Partnership" },
  { value: "Full-Stack", label: "Engineering Team" },
  { value: "AI-Ready", label: "Modern, Secure Technology" },
];

const PARTICLES = Array.from({ length: 14 }, (_, p) => ({
  size: 3 + (p % 5),
  x: (p * 17 + 8) % 94,
  y: (p * 29 + 9) % 88,
  dx: (p % 2 ? 1 : -1) * (16 + (p % 4) * 9),
  dy: -(28 + (p % 5) * 10),
  duration: 6.5 + (p % 6) * 1.1,
  delay: -p * 0.47,
  opacity: 0.22 + (p % 4) * 0.09,
}));

function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <Services />
      <Why />
      <Skills />
      <Team />
      <CtaBand
        title="Ready to start your project?"
        body="Tell us what you're building and we'll get back to you within one business day."
        secondary={{ href: "mailto:info@greenstonesolutions.net", label: "Email Us Directly" }}
      />
    </main>
  );
}

function Hero() {
  const visual = useRef<HTMLDivElement>(null);

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = visual.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--hero-x", `${(nx * 12).toFixed(1)}px`);
    el.style.setProperty("--hero-y", `${(ny * 9).toFixed(1)}px`);
  }

  function onLeave() {
    const el = visual.current;
    if (!el) return;
    el.style.setProperty("--hero-x", "0px");
    el.style.setProperty("--hero-y", "0px");
  }

  return (
    <section className="hero" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={
              {
                "--size": `${p.size}px`,
                "--x": `${p.x}%`,
                "--y": `${p.y}%`,
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                "--duration": `${p.duration}s`,
                "--delay": `${p.delay}s`,
                "--opacity": p.opacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">Business Consulting · Austin, TX · Est. 2024</span>
          <h1 className="mt-4 max-w-xl text-4xl sm:text-5xl lg:text-6xl">
            <SplitWords text="Building tomorrow's solutions, today." highlight="solutions," />
          </h1>
          <p className="lede mt-6">
            Greenstone Solutions LLC is a Texas-based consulting firm dedicated to helping
            businesses navigate complex challenges with clarity, strategy, and confidence. We
            provide tailored consulting services designed to support sustainable growth,
            operational efficiency, and informed decision-making across a wide range of industries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Explore Services
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <TiltCard
                key={s.label}
                className="p-4 text-center"
              >
                <b className="stat-num block" style={{ animationDelay: `${450 + i * 90}ms` } as CSSProperties}>
                  {s.value}
                </b>
                <span className="text-xs text-muted">{s.label}</span>
              </TiltCard>
            ))}
          </div>
        </div>

        <div
          ref={visual}
          className="hero-visual"
          style={{ transform: "translate3d(var(--hero-x, 0), var(--hero-y, 0), 0)" }}
        >
          <div className="why-card">
            <LiveBorder />
            <span className="why-badge">
              <span className="pulse-dot" /> Currently accepting new projects
            </span>
            <h3>Why teams choose Greenstone</h3>
            <ul>
              {[
                "Direct access to the people building your software",
                "Solutions scoped around your business goals, not templates",
                "U.S.-based team, headquartered in Austin, Texas",
              ].map((item) => (
                <li key={item}>
                  <Check className="size-5 shrink-0 text-moss" strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {["Cloud", "Web", "Mobile", "AI"].map((label, i) => (
            <span
              key={label}
              className="tech-chip"
              style={
                {
                  "--chip-duration": `${4.7 + i * 0.8}s`,
                  "--chip-delay": `${-i * 0.75}s`,
                } as CSSProperties
              }
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <LiveBorder />
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              <span>+</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="wrap">
        <div className="section-head mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow justify-center">What We Do</span>
          <h2 id="services-heading" className="mt-3 text-3xl sm:text-4xl">
            Our Services
          </h2>
          <p className="lede mx-auto mt-4">
            From custom applications to cloud infrastructure, we help businesses design and ship
            reliable software.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <TiltCard className="h-full p-6">
                <div className="icon-well">
                  <NamedIcon name={s.icon} />
                </div>
                <h3 className="mb-2 text-xl">{s.title}</h3>
                <p className="text-sm text-muted">{s.short}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn btn-ghost">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow justify-center">Why Greenstone</span>
          <h2 id="why-heading" className="mt-3 text-3xl sm:text-4xl">
            A team you can actually reach
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <TiltCard className="h-full p-6">
                <div className="icon-well">
                  <NamedIcon name={w.icon} />
                </div>
                <h3 className="mb-2 text-xl">{w.title}</h3>
                <p className="text-sm text-muted">{w.body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" aria-labelledby="skills-heading">
      <div className="wrap">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow justify-center">What We Bring</span>
          <h2 id="skills-heading" className="mt-3 text-3xl sm:text-4xl">
            Technical Skills
          </h2>
          <p className="lede mx-auto mt-4">
            Consulting backed by real engineering depth — the technologies our team designs, builds,
            and delivers with.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <TiltCard className="h-full p-6">
                <h4 className="mb-4 font-sans text-sm font-bold tracking-wide">{g.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className="chip"
                      style={{ "--tag-delay": `${Math.min(ti * 28, 280)}ms` } as CSSProperties}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="btn btn-ghost">
            See It In Action — View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]" aria-labelledby="team-heading">
      <div className="wrap">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow justify-center">Meet the Team</span>
          <h2 id="team-heading" className="mt-3 text-3xl sm:text-4xl">
            The people behind Greenstone
          </h2>
          <p className="lede mx-auto mt-4">
            Small, hands-on, and directly accountable for the work we deliver.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <EmployeeCard key={m.slug} person={m} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
