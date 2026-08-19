import { Directory } from "@/components/directory";
import { LiveBorder } from "@/components/live-border";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { getEmployee } from "@/data/site-data";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Linkedin, Mail, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const person = getEmployee(params.slug);
    if (!person) throw notFound();
    return { person };
  },
  component: Profile,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.person.name} – ${loaderData.person.role} | Greenstone Solutions`
          : "Employee | Greenstone Solutions",
      },
      {
        name: "robots",
        content: "noindex, follow",
      },
    ],
  }),
});

function Profile() {
  const { person } = Route.useLoaderData();

  return (
    <main id="main">
      <section className="hero hero-simple page-header !pb-0">
        <div className="wrap relative">
          <Directory
            crumbs={[
              { label: "Home", to: "/" },
              { label: "Team", to: "/team" },
              { label: person.name },
            ]}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="profile-layout wrap">
          <Reveal>
            <aside className="id-card">
              <LiveBorder />
              <div className="id-punch" />
              <div className="id-photo">
                <img src={person.photo} alt={person.name} />
              </div>
              <div className="id-name">
                <h1>{person.name}</h1>
                <div className="id-role">{person.role}</div>
              </div>
              <div className="id-status">
                <span className="badge-status">
                  <span className="pulse-dot" /> Active Employee
                </span>
              </div>
              <dl>
                <dt>Employee ID</dt>
                <dd>{person.id}</dd>
                <dt>Department</dt>
                <dd>{person.department}</dd>
                <dt>Start Date</dt>
                <dd>{person.start}</dd>
              </dl>
              <div className="id-verify">
                <ShieldCheck />
                <span>
                  This page is the official record used to verify current Greenstone Solutions
                  employment when a company ID badge QR code is scanned.
                </span>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={80}>
            <div className="profile-detail">
              <span className="eyebrow">Employee Profile</span>
              <h2 className="mt-3">About {person.first}</h2>
              <p className="mt-4 text-muted">{person.bio}</p>
              {person.bullets ? (
                <ul className="mt-5 flex flex-col gap-3">
                  {person.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-moss" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              <h3 className="mt-8 mb-3 text-xl">Contact</h3>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${person.email}`} className="btn btn-ghost">
                  <Mail size={16} /> {person.email}
                </a>
                {person.linkedin ? (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                ) : null}
              </div>

              {person.placeholder ? (
                <p className="placeholder-note">
                  This profile is a placeholder. Send {person.first}'s real photo, start date, and a
                  short bio to replace the initials avatar and complete this page.
                </p>
              ) : null}

              {person.skills ? (
                <div className="mt-10">
                  <h3 className="mb-5 text-xl">Skills</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {person.skills.map((g) => (
                      <TiltCard key={g.title} className="p-5">
                        <h4 className="mb-3 font-sans text-sm font-bold">{g.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {g.tags.map((tag, i) => (
                            <span
                              key={tag}
                              className="chip"
                              style={{ "--tag-delay": `${i * 30}ms` } as CSSProperties}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </TiltCard>
                    ))}
                  </div>
                </div>
              ) : null}

              {person.certs ? (
                <div className="mt-10">
                  <h3 className="mb-5 text-xl">Certifications</h3>
                  <div className="grid gap-4">
                    {person.certs.map((g) => (
                      <TiltCard key={g.title} className="p-5">
                        <h4 className="mb-3 font-sans text-sm font-bold">{g.title}</h4>
                        <ul className="space-y-2">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted">
                              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-moss" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </TiltCard>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
