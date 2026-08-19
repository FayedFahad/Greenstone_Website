import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { COMPANY } from "@/data/site-data";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | Greenstone Solutions" },
      {
        name: "description",
        content:
          "Get in touch with Greenstone Solutions LLC in Austin, Texas. Email info@greenstonesolutions.net.",
      },
    ],
  }),
});

function Contact() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your project"
        lede="Reach out directly — we typically respond within one business day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-tight">
        <div className="wrap grid min-w-0 gap-10">
          <Reveal className="min-w-0">
            <h2 className="text-3xl">Contact Information</h2>
            <p className="mt-3 text-muted">
              Prefer email or want to visit our office? Here's how to reach Greenstone Solutions.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <TiltCard className="flex items-start gap-4 p-5">
                <div className="icon-well mb-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-lg">Office Address</h3>
                  <p className="text-sm text-muted">
                    {COMPANY.address}
                    <br />
                    {COMPANY.city}
                  </p>
                </div>
              </TiltCard>
              <TiltCard className="flex items-start gap-4 p-5">
                <div className="icon-well mb-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-lg">Email</h3>
                  <p className="text-sm">
                    <a className="text-moss-ink hover:underline" href={`mailto:${COMPANY.email}`}>
                      {COMPANY.email}
                    </a>
                  </p>
                  <p className="text-sm text-muted">
                    <a className="hover:text-moss-ink" href={`mailto:${COMPANY.careers}`}>
                      {COMPANY.careers}
                    </a>{" "}
                    — careers
                  </p>
                </div>
              </TiltCard>
              <TiltCard className="flex items-start gap-4 p-5">
                <div className="icon-well mb-0">
                  <Linkedin />
                </div>
                <div>
                  <h3 className="text-lg">LinkedIn</h3>
                  <p className="text-sm">
                    <a
                      className="text-moss-ink hover:underline"
                      href={COMPANY.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Greenstone Solutions LLC
                    </a>
                  </p>
                </div>
              </TiltCard>
            </div>
          </Reveal>
        </div>
        <div className="wrap mt-10 min-w-0">
          <div className="overflow-hidden rounded-[20px]">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps?q=5900+Balcones+Drive,+Suite+100,+Austin,+TX+78731&output=embed"
              title="Map showing Greenstone Solutions office at 5900 Balcones Drive, Suite 100, Austin, TX 78731"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
