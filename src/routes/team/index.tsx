import { EmployeeCard } from "@/components/employee-card";
import { PageHero } from "@/components/page-hero";
import { TEAM } from "@/data/site-data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team/")({
  component: Team,
  head: () => ({
    meta: [
      { title: "Our Team | Greenstone Solutions" },
      {
        name: "description",
        content: "Meet the Greenstone Solutions team — an Austin, Texas business consulting firm.",
      },
    ],
  }),
});

function Team() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our Team"
        title="Meet the people behind Greenstone"
        lede="Select a team member to view their full profile, including role, department, and current employment status."
        crumbs={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />
      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <EmployeeCard key={m.slug} person={m} delay={i * 80} />
          ))}
        </div>
      </section>
    </main>
  );
}
