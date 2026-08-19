import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { COMPANY } from "@/data/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img src="/assets/images/icon-512.png" width={44} height={44} alt="" />
              <div>
                <div className="font-display text-lg leading-tight text-white">{COMPANY.name}</div>
                <div className="text-xs tracking-wide text-moss">{COMPANY.tagline}</div>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-mist/80">
              Austin, Texas-based consulting firm helping businesses navigate complex challenges
              with clarity, strategy, and confidence.
            </p>
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-moss hover:text-moss"
              aria-label="Greenstone Solutions on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-sm font-bold tracking-wide text-white">Company</h4>
            <ul className="space-y-2 text-sm text-mist/80">
              <li><Link to="/about" className="hover:text-moss">About Us</Link></li>
              <li><Link to="/services" className="hover:text-moss">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-moss">Portfolio</Link></li>
              <li><Link to="/team" className="hover:text-moss">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-moss">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-sm font-bold tracking-wide text-white">Services</h4>
            <ul className="space-y-2 text-sm text-mist/80">
              <li><Link to="/services" hash="custom-software" className="hover:text-moss">Custom Software</Link></li>
              <li><Link to="/services" hash="cloud" className="hover:text-moss">Cloud & Infrastructure</Link></li>
              <li><Link to="/services" hash="mobile" className="hover:text-moss">Mobile Apps</Link></li>
              <li><Link to="/services" hash="consulting" className="hover:text-moss">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-sm font-bold tracking-wide text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-mist/80">
              <li>
                {COMPANY.address}
                <br />
                {COMPANY.city}
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-moss">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-mist/60 sm:flex-row sm:justify-between">
          <span>© {year} {COMPANY.legal}. All rights reserved.</span>
          <span>Registered Limited Liability Company · State of Texas</span>
        </div>
      </div>
    </footer>
  );
}
