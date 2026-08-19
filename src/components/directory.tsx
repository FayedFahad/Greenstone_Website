import { Link } from "@tanstack/react-router";
import { ChevronRight, House } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Directory({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="directory" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={`${crumb.label}-${i}`}>
              {i > 0 ? (
                <span className="directory-sep" aria-hidden="true">
                  <ChevronRight size={16} strokeWidth={2.4} />
                </span>
              ) : null}
              {crumb.to && !last ? (
                <Link to={crumb.to} className="directory-link">
                  {i === 0 ? <House size={15} strokeWidth={2.2} /> : null}
                  {crumb.label}
                </Link>
              ) : (
                <span className="directory-current" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
