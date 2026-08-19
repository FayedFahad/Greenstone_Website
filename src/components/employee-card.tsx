import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import type { Employee } from "@/data/site-data";
import { Link } from "@tanstack/react-router";

export function EmployeeCard({ person, delay = 0 }: { person: Employee; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        to="/team/$slug"
        params={{ slug: person.slug }}
        className="employee-card-link"
        aria-label={`View profile for ${person.name}`}
      >
        <TiltCard className="employee-card">
          <div className="photo-wrap">
            <img src={person.photo} alt={person.name} />
          </div>
          <div className="info">
            <h3>{person.name}</h3>
            <div className="role">{person.role}</div>
            <span className="view-link">
              View Profile
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </TiltCard>
      </Link>
    </Reveal>
  );
}
