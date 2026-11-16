/* UPONTIS v2 — app.js: filtros de aplicaciones, plataformas, reveal, count-up, nav */

(() => {
  "use strict";

  // JS operativo → quitar marca no-js (las animaciones reveal pueden correr)
  document.documentElement.classList.remove("no-js");

  // ── NAV scrolled ──
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── BURGER (mobile: toggle links) ──
  const burger = document.querySelector(".nav-burger");
  burger.addEventListener("click", () => {
    const links = document.querySelector(".nav-links");
    const cta = document.querySelector(".nav-cta");
    const cls = "nav-open";
    links.classList.toggle(cls);
    cta.classList.toggle(cls);
  });

  // ── PLATAFORMAS (caps) ──
  const capsBox = document.getElementById("caps");
  if (capsBox) {
    capsBox.innerHTML = Object.values(AREAS).map(a =>
      `<article class="cap reveal"><p class="cap-code">${a.code}</p><h3>${a.name}</h3><ul>${a.caps.map(c => `<li>${c}</li>`).join("")}</ul></article>`
    ).join("");
  }

  // ── APLICACIONES ──
  const appsBox = document.getElementById("apps");
  const detailBox = document.getElementById("appDetail");
  let filtro = "TODAS";

  function areaName(code) { return AREAS[code] ? `${code} · ${AREAS[code].name}` : code; }

  function renderApps() {
    if (!appsBox) return;
    const list = filtro === "TODAS" ? APPS : APPS.filter(a => a.a.includes(filtro));
    appsBox.innerHTML = list.map(a => {
      const areas = a.a.map(x => `<span class="area-tag">${x}</span>`).join("");
      return `<article class="app-card" data-code="${a.c}" tabindex="0" role="button" aria-label="${a.n}">
        <p class="app-code">${a.c}</p>
        <h3 class="app-name">${a.n}</h3>
        <div class="app-meta">${areas}</div>
      </article>`;
    }).join("");
    appsBox.querySelectorAll(".app-card").forEach(card => {
      card.addEventListener("click", () => showDetail(card.dataset.code));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showDetail(card.dataset.code); }
      });
    });
    if (filtro === "TODAS" && list.length) {
      // auto-open primera card en TODAS (menos ruido: no abrir)
    }
  }

  function showDetail(code, doScroll) {
    const app = APPS.find(x => x.c === code);
    if (!app || !detailBox) return;
    detailBox.hidden = false;
    detailBox.innerHTML = `
      <p class="app-code" style="font-family:var(--mono);font-size:11px;letter-spacing:.12em;color:var(--orange)">${app.c}</p>
      <h3>${app.n}</h3>
      <div class="dd-grid">
        <div class="dd-item"><p>ÁREAS TÉCNICAS</p><p>${app.a.map(areaName).join(" · ")}</p></div>
        <div class="dd-item"><p>SECTORES</p><p>${app.s.join(" · ")}</p></div>
      </div>
      <p style="margin-top:18px;font-size:13px;color:var(--dim)">¿Ves tu caso acá? Contanos y lo adaptamos a tu industria y tu escala.</p>
      <a class="btn btn-primary" style="display:inline-block;margin-top:12px" href="#contacto">HABLEMOS DE TU PROYECTO</a>`;
    if (doScroll !== false) detailBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Filtros
  document.querySelectorAll(".f-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".f-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filtro = chip.dataset.area;
      detailBox.hidden = true;
      renderApps();
    });
  });

  renderApps();
  // detalle visible por defecto en TODAS (evita sección vacía al cargar)
  showDetail("G1", false);

  // ── REVEAL on scroll ──
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(el => io.observe(el));
    // Fallback de seguridad: nunca dejar secciones invisibles (reveal pendiente) tras el load
    setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach(el => el.classList.add("in"));
    }, 2500);
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }
})();
