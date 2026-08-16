(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  var body = document.body;

  /* ---------- Theme ---------- */
  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    var syncLabel = function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      themeBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      themeBtn.setAttribute("aria-pressed", String(isDark));
    };
    syncLabel();
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("gs-theme", next); } catch (e) {}
      syncLabel();
    });
  }

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      links.classList.toggle("is-open", open);
      body.classList.toggle("nav-open", open);
    };
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMenu(!open);
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !links.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    }, { passive: true });
  }

  /* ---------- Current page nav link ---------- */
  var here = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".nav-links a[href]").forEach(function (a) {
    var target = a.getAttribute("href");
    if (!target) return;
    if (target === here || (target !== "/" && here.indexOf(target) === 0)) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Universal visual layers ---------- */
  var progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  body.appendChild(progress);

  var backTop = document.createElement("button");
  backTop.className = "back-to-top";
  backTop.type = "button";
  backTop.setAttribute("aria-label", "Back to top");
  backTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>';
  body.appendChild(backTop);
  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });

  if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    body.appendChild(glow);

    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 3;
    var pointerRAF = 0;
    document.addEventListener("pointermove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!pointerRAF) {
        pointerRAF = requestAnimationFrame(function () {
          root.style.setProperty("--mouse-x", mouseX + "px");
          root.style.setProperty("--mouse-y", mouseY + "px");
          pointerRAF = 0;
        });
      }
    }, { passive: true });
  }

  /* ---------- Scroll state ---------- */
  var navbar = document.querySelector(".navbar");
  var onScroll = function () {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    root.style.setProperty("--scroll-progress", pct.toFixed(2) + "%");
    if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 18);
    backTop.classList.toggle("is-visible", window.scrollY > 520);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Hero enhancement ---------- */
  var hero = document.querySelector(".hero");
  if (hero && !reduce) {
    var heroGrid = document.createElement("div");
    heroGrid.className = "hero-grid";
    heroGrid.setAttribute("aria-hidden", "true");
    hero.prepend(heroGrid);

    var particles = document.createElement("div");
    particles.className = "hero-particles";
    particles.setAttribute("aria-hidden", "true");
    var particleCount = hero.classList.contains("hero-simple") ? 8 : 14;
    for (var p = 0; p < particleCount; p++) {
      var dot = document.createElement("span");
      dot.className = "hero-particle";
      var size = 3 + (p % 5);
      dot.style.setProperty("--size", size + "px");
      dot.style.setProperty("--x", ((p * 17 + 8) % 94) + "%");
      dot.style.setProperty("--y", ((p * 29 + 9) % 88) + "%");
      dot.style.setProperty("--dx", (((p % 2 ? 1 : -1) * (16 + (p % 4) * 9))) + "px");
      dot.style.setProperty("--dy", (-(28 + (p % 5) * 10)) + "px");
      dot.style.setProperty("--duration", (6.5 + (p % 6) * 1.1) + "s");
      dot.style.setProperty("--delay", (-p * 0.47) + "s");
      dot.style.setProperty("--opacity", (0.22 + (p % 4) * 0.09).toFixed(2));
      particles.appendChild(dot);
    }
    hero.prepend(particles);

    var homeTitle = hero.querySelector("h1");
    if (!hero.classList.contains("hero-simple") && homeTitle && homeTitle.textContent.indexOf("solutions") !== -1) {
      homeTitle.innerHTML = homeTitle.innerHTML.replace("solutions", '<span class="gradient-word">solutions</span>');
    }

    var visual = hero.querySelector(".hero-visual");
    if (visual) {
      ["Cloud", "Web", "Mobile", "AI"].forEach(function (label, i) {
        var chip = document.createElement("span");
        chip.className = "tech-chip";
        chip.textContent = label;
        chip.setAttribute("aria-hidden", "true");
        chip.style.setProperty("--chip-duration", (4.7 + i * 0.8) + "s");
        chip.style.setProperty("--chip-delay", (-i * 0.75) + "s");
        visual.appendChild(chip);
      });

      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        hero.addEventListener("pointermove", function (e) {
          var rect = hero.getBoundingClientRect();
          var nx = (e.clientX - rect.left) / rect.width - 0.5;
          var ny = (e.clientY - rect.top) / rect.height - 0.5;
          visual.style.setProperty("--hero-x", (nx * 12).toFixed(1) + "px");
          visual.style.setProperty("--hero-y", (ny * 9).toFixed(1) + "px");
        });
        hero.addEventListener("pointerleave", function () {
          visual.style.setProperty("--hero-x", "0px");
          visual.style.setProperty("--hero-y", "0px");
        });
      }
    }
  }

  /* ---------- Staggered hero stats ---------- */
  document.querySelectorAll(".hero-stats .stat").forEach(function (stat, i) {
    stat.style.setProperty("--delay", (450 + i * 90) + "ms");
  });

  /* ---------- Scroll reveals with varied directions ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  revealEls.forEach(function (el, i) {
    var grid = el.parentElement && el.parentElement.classList.contains("grid") ? el.parentElement : null;
    if (grid) {
      var siblings = Array.prototype.filter.call(grid.children, function (child) { return child.classList.contains("reveal"); });
      var pos = siblings.indexOf(el);
      el.style.setProperty("--reveal-delay", Math.min(pos * 90, 360) + "ms");
    } else if (el.classList.contains("service-visual")) {
      el.classList.add(i % 2 ? "reveal-right" : "reveal-left");
    } else if (i % 7 === 2) {
      el.classList.add("reveal-scale");
    }
  });

  if (!reduce && "IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 3D tilt cards + pointer spotlight ---------- */
  var tiltTargets = document.querySelectorAll(".glass-card.card, .employee-card, .service-visual, .contact-info-item, .form-card, .hero-stats .stat");
  tiltTargets.forEach(function (card) {
    card.classList.add("tilt-card");
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      var ry = (px - 0.5) * 6.5;
      var rx = (0.5 - py) * 6.5;
      card.style.setProperty("--rx", rx.toFixed(2) + "deg");
      card.style.setProperty("--ry", ry.toFixed(2) + "deg");
      card.style.setProperty("--spot-x", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--spot-y", (py * 100).toFixed(1) + "%");
    });
    card.addEventListener("pointerleave", function () {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--spot-x", "50%");
      card.style.setProperty("--spot-y", "50%");
    });
  });

  /* portfolio-specific visual hooks */
  document.querySelectorAll("/portfolio/" === here ? ".glass-card.card" : "__none__").forEach(function (card) {
    card.classList.add("portfolio-card-live");
  });

  /* ---------- Skill chip stagger ---------- */
  document.querySelectorAll(".skill-tags").forEach(function (group) {
    group.querySelectorAll(".skill-tag").forEach(function (tag, i) {
      tag.style.setProperty("--tag-delay", Math.min(i * 34, 300) + "ms");
    });
  });

  /* ---------- Numeric counter animation ---------- */
  var counterTargets = document.querySelectorAll(".stat-card b, .hero-stats .stat b");
  var animateCounter = function (el) {
    if (el.dataset.counted === "true") return;
    var original = el.textContent.trim();
    var match = original.match(/^(\d+)(.*)$/);
    if (!match) return;
    var target = parseInt(match[1], 10);
    var suffix = match[2] || "";
    if (target > 10000) return;
    el.dataset.counted = "true";
    if (reduce) return;
    var duration = 1050;
    var start = performance.now();
    var from = target > 300 ? Math.max(0, target - 24) : 0;
    var step = function (now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = Math.round(from + (target - from) * eased);
      el.textContent = value + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = original;
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterTargets.forEach(function (el) { counterIO.observe(el); });
  } else {
    counterTargets.forEach(animateCounter);
  }

  /* ---------- Button ripple ---------- */
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (reduce) return;
      var r = btn.getBoundingClientRect();
      var ripple = document.createElement("span");
      ripple.className = "ripple";
      var size = Math.max(r.width, r.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX ? e.clientX - r.left : r.width / 2) + "px";
      ripple.style.top = (e.clientY ? e.clientY - r.top : r.height / 2) + "px";
      btn.appendChild(ripple);
      window.setTimeout(function () { ripple.remove(); }, 700);
    });
  });

  /* ---------- Smooth internal page transition ---------- */
  if (!reduce) {
    document.querySelectorAll('a[href]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (a.target === "_blank" || a.hasAttribute("download")) return;
        var href = a.getAttribute("href");
        if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0 || href.indexOf("javascript:") === 0) return;
        var url;
        try { url = new URL(a.href, window.location.href); } catch (err) { return; }
        if (url.origin !== window.location.origin) return;
        if (url.pathname === window.location.pathname && url.hash) return;
        e.preventDefault();
        body.classList.add("is-leaving");
        window.setTimeout(function () { window.location.href = url.href; }, 200);
      });
    });
  }

  /* ---------- Current year ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* trigger intro choreography after setup */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { body.classList.add("motion-ready"); });
  });
})();
