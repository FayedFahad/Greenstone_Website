import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "sonner";
import { SiteChrome } from "@/components/chrome";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/lib/theme";
import appCss from "../assets/css/style.css?url";

const APP_NAME = "Greenstone Solutions";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: "Austin, TX-based consulting firm helping businesses grow with clarity, strategy, and confidence." },
      { name: "apple-mobile-web-app-title", content: APP_NAME },
      { name: "theme-color", content: "#0c130e" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Greenstone Solutions | Business Consulting" },
      { property: "og:description", content: "Austin, TX-based consulting firm helping businesses grow with clarity, strategy, and confidence." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/assets/images/favicons/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/assets/images/favicons/favicon.svg" },
      { rel: "shortcut icon", href: "/assets/images/favicons/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/images/favicons/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("gs-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <SiteChrome />
            <SiteHeader />
            <Outlet />
            <SiteFooter />
            <Toaster richColors position="top-center" />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main id="main" className="section">
      <div className="wrap max-w-xl text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-3 text-4xl">This page doesn't exist.</h1>
        <p className="lede mx-auto mt-4">The path you followed isn't on the Greenstone site.</p>
        <a href="/" className="btn btn-primary mt-8">
          Back home
        </a>
      </div>
    </main>
  );
}
