import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title,
  body,
  primary = { to: "/contact", label: "Get in Touch" },
  secondary,
}: {
  title: string;
  body: string;
  primary?: { to: string; label: string };
  secondary?: { href: string; label: string } | { to: string; label: string };
}) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal>
          <div className="cta-band">
            <div className="orb orb-a !top-auto !right-0 !opacity-40" aria-hidden="true" />
            <h2 className="relative max-w-2xl text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="relative mt-3 max-w-xl text-mist/80">{body}</p>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <Link to={primary.to} className="btn btn-primary">
                {primary.label}
              </Link>
              {secondary && "href" in secondary ? (
                <a href={secondary.href} className="btn btn-on-dark">
                  {secondary.label}
                </a>
              ) : secondary && "to" in secondary ? (
                <Link to={secondary.to} className="btn btn-on-dark">
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
