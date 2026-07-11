/**
 * app.js — ICFA RED
 * ==================
 * Punto de entrada principal.
 * Coordina el render y aplica metadatos dinámicos desde CONFIG.
 */

document.addEventListener("DOMContentLoaded", () => {

  // 1. Renderizar contenido
  renderAll();

  // 2. Aplicar metadatos dinámicos (title, theme-color, og:*)
  applyMeta();

  // 3. Activar animaciones de entrada para las tarjetas
  requestAnimationFrame(activateCards);

});

/* ── Metadatos dinámicos ───────────────────────────────────────────────────── */
function applyMeta() {
  document.title = `${CONFIG.nombre} — Familia de Amor`;

  setMeta("name",     "description",          CONFIG.descripcion);
  setMeta("name",     "theme-color",           CONFIG.meta.themeColor);
  setMeta("property", "og:title",              `${CONFIG.nombre} — Familia de Amor`);
  setMeta("property", "og:description",        CONFIG.descripcion);
  setMeta("property", "og:url",               CONFIG.meta.siteUrl);
  setMeta("property", "og:image",
    CONFIG.meta.siteUrl + "/" + CONFIG.meta.ogImage);
  setMeta("name",     "twitter:title",         `${CONFIG.nombre} — Familia de Amor`);
  setMeta("name",     "twitter:description",   CONFIG.descripcion);
  if (CONFIG.meta.twitterHandle) {
    setMeta("name", "twitter:site", CONFIG.meta.twitterHandle);
  }

  // canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = CONFIG.meta.siteUrl;
}

function setMeta(attrName, attrValue, content) {
  const el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (el) el.setAttribute("content", content);
}

/* ── Animaciones de entrada ───────────────────────────────────────────────── */
function activateCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.add("card--visible"));
}
