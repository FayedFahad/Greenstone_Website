import { CtaBand } from "@/components/cta-band";
import { EmployeeCard } from "@/components/employee-card";
import { NamedIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { COMPANY, TEAM, VALUES } from "@/data/site-data";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Greenstone Solutions" },
      {
        name: "description",
        content:
          "Greenstone Solutions LLC is a Texas-based consulting firm, registered in 2024 and headquartered in Austin. Learn about our mission and team.",
      },
    ],
  }),
});

const SNAPSHOT = [
  ["Legal Name", COMPANY.legal],
  ["Entity Type", COMPANY.entity],
  ["Founded", COMPANY.founded],
  ["Headquarters", COMPANY.hq],
  ["Industry", COMPANY.industry],
];

const FOUNDER_MARKS = [
  "14 years in software",
  "AWS & Azure architect",
  "PMP · Security+ · ITIL",
  "Member-managed",
];

function About() {
  const founder = TEAM[0];
  const team = TEAM.slice(1);

  return (
    <main id="main">
      <PageHero
        eyebrow="About Us"
        title="Consulting built on clarity and results."
        lede="Greenstone Solutions LLC was formed in Texas to help businesses navigate complex challenges with clarity, strategy, and confidence."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section" aria-labelledby="story-heading">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 id="story-heading" className="mt-3 text-3xl sm:text-4xl">
              Founded on a simple idea
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Greenstone Solutions LLC was officially registered as a Texas Limited Liability
                Company on {COMPANY.foundedFull}, and is headquartered at {COMPANY.address},{" "}
                {COMPANY.city}.
              </p>
              <p>
                We started Greenstone around a simple idea: businesses deserve consulting partners
                who communicate clearly, follow through on commitments, and stay accountable long
                after an engagement begins — not just through the initial project. As a
                member-managed company, we operate with a hands-on, client-focused approach,
                emphasizing integrity, accountability, and results.
              </p>
              <p>
                Our services are grounded in strong analytical practices, sound financial insight,
                and a commitment to delivering practical, actionable solutions aligned with each
                client's unique goals. With a flexible and adaptive business model, we're positioned
                to engage in consulting and other lawful business activities that create long-term
                value for our clients and partners.
              </p>
              <p>
                That idea is where our tagline comes from:{" "}
                <strong className="text-fg">{COMPANY.tagline}</strong>
              </p>
            </div>
          </Reveal>
          <Reveal variant="right">
            <TiltCard className="p-7">
              <h3 className="mb-5 text-2xl">Company Snapshot</h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm">
                {SNAPSHOT.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="font-semibold text-muted">{k}</dt>
                    <dd className="m-0">{v}</dd>
                  </div>
                ))}
              </dl>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]" aria-labelledby="values-heading">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">What We Believe</span>
            <h2 id="values-heading" className="mt-3 text-3xl sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <TiltCard className="h-full p-6">
                  <div className="icon-well">
                    <NamedIcon name={v.icon} />
                  </div>
                  <h3 className="mb-2 text-xl">{v.title}</h3>
                  <p className="text-sm text-muted">{v.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="leadership-heading">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">The Team</span>
            <h2 id="leadership-heading" className="mt-3 text-3xl sm:text-4xl">
              People you can actually reach
            </h2>
            <p className="lede mx-auto mt-4">
              Greenstone is member-managed. Strategy, finance, and engineering sit with a small
              group who stay on the work — not a bench that gets swapped after the kickoff call.
            </p>
          </div>

          <Reveal>
            <TiltCard className="leader-card">
              <div className="leader-photo">
                <img src={founder.photo} alt={founder.name} />
              </div>
              <div>
                <h3 className="text-3xl">{founder.name}</h3>
                <div className="leader-role">
                  {founder.role} · {founder.department}
                </div>
                <p className="text-muted">
                  Bwalya founded Greenstone Solutions in 2024 and still runs the work himself —
                  company strategy, client relationships, and day-to-day operations. With 14 years
                  across software architecture, cloud, and automation, he built a member-managed
                  firm so clients get the people doing the work, not a handoff.
                </p>
                <div className="leader-meta">
                  {FOUNDER_MARKS.map((mark) => (
                    <span key={mark}>{mark}</span>
                  ))}
                </div>
                <div className="leader-actions flex flex-wrap gap-3">
                  <Link
                    to="/team/$slug"
                    params={{ slug: founder.slug }}
                    className="btn btn-primary"
                  >
                    View Full Profile
                  </Link>
                  <a href={`mailto:${founder.email}`} className="btn btn-ghost">
                    Email {founder.first}
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="mt-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Everyone else on the work</span>
                <h3 className="mt-3 text-2xl sm:text-3xl">Finance and engineering</h3>
              </div>
              <Link to="/team" className="btn btn-ghost">
                All profiles
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person, i) => (
                <EmployeeCard key={person.slug} person={person} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to work together?"
        body="Reach out and tell us about your project — we'll respond within one business day."
        primary={{ to: "/contact", label: "Contact Us" }}
        secondary={{ to: "/team", label: "Meet the Team" }}
      />
    </main>
  );
}
