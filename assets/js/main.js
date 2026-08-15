(function () {
  "use strict";

  /* Dark mode toggle (theme itself is already applied by the inline
     head script, before first paint — this just wires up the button) */
  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    var syncLabel = function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      themeBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      themeBtn.setAttribute("aria-pressed", String(isDark));
    };
    syncLabel();
    themeBtn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("gs-theme", next); } catch (e) {}
      syncLabel();
    });
  }

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  /* Mark the current page's nav link */
  var here = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".nav-links a[href]").forEach(function (a) {
    var target = a.getAttribute("href");
    if (!target) return;
    if (target === here || (target !== "/" && here.indexOf(target) === 0)) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* Scroll reveal (skipped entirely under prefers-reduced-motion) */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Current year in footer */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
