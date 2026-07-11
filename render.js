/**
 * render.js — ICFA RED
 * =====================
 * Lee CONFIG y construye todos los elementos del DOM.
 * No contiene información editable; solo lógica de presentación.
 */

/* ── Render: cabecera ───────────────────────────────────────────────────────── */
function renderHeader() {
  const logoEl = document.getElementById("logo");
  if (logoEl) {
    logoEl.src = CONFIG.logo;
    logoEl.alt = `Logo ${CONFIG.nombre}`;
    logoEl.addEventListener("error", () => {
      logoEl.style.display = "none";
      const fallback = document.getElementById("logo-fallback");
      if (fallback) fallback.style.display = "flex";
    });
  }

  const titleEl = document.getElementById("site-title");
  if (titleEl) titleEl.textContent = CONFIG.nombre;

  const descEl = document.getElementById("site-description");
  if (descEl) descEl.textContent = CONFIG.descripcion;
}

/* ── Render: tarjetas de redes ─────────────────────────────────────────────── */
function renderCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.redes.forEach((red, index) => {
    const href = red.url && red.url.trim() !== "" ? red.url : "#";

    const card = document.createElement("a");
    card.className = "card";
    card.setAttribute("role", "listitem");
    card.href   = href;
    card.target = "_blank";
    card.rel    = "noopener noreferrer";
    card.setAttribute("aria-label", `Visitar ${red.nombre} — ${red.usuario}`);
    card.style.setProperty("--delay", `${index * 80}ms`);

    // Ícono: usa imagen si está definida, con fallback a Font Awesome
    const iconHtml = red.imagen
      ? `<img
           src="${escAttr(red.imagen)}"
           alt="${escAttr(red.nombre)}"
           class="card__icon-img"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
         >
         <span class="card__icon card__icon--fa" style="display:none;">
           <i class="${escAttr(red.icono)}" aria-hidden="true"></i>
         </span>`
      : `<span class="card__icon card__icon--fa">
           <i class="${escAttr(red.icono)}" aria-hidden="true"></i>
         </span>`;

    card.innerHTML = `
      <div class="card__icon-wrap">
        ${iconHtml}
      </div>
      <div class="card__text">
        <span class="card__name">${escHtml(red.nombre)}</span>
        <span class="card__user">${escHtml(red.usuario)}</span>
      </div>
      <div class="card__arrow" aria-hidden="true">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ── Utilidades ─────────────────────────────────────────────────────────────── */
function escHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function escAttr(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ── Punto de entrada del módulo ───────────────────────────────────────────── */
function renderAll() {
  renderHeader();
  renderCards();
}
