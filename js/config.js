/**
 * config.js — ICFA RED
 * =====================
 * Toda la información editable está aquí.
 * Para actualizar un enlace, usuario o descripción,
 * solo modifica este archivo. No toques nada más.
 */

const CONFIG = {

  // ── Información general de la iglesia ──────────────────────────────────────
  nombre: "Bienvenido a ICFA RED",
  descripcion:
    "Conéctate con nosotros y descubre todo lo que Dios está haciendo en Familia de Amor RED. Encuentra nuestras redes sociales, enseñanzas y contenido para crecer juntos en la fe.",
  logo: "img/LOGO_RED_AZUL.png",

  // ── Metadatos SEO / Open Graph ──────────────────────────────────────────────
  meta: {
    siteUrl:       "https://dianaplz.github.io/icfa-red/",
    ogImage:       "img/og-image.png",                       // ← imagen 1200×630 px
    themeColor:    "#162C54",
    twitterHandle: ""                                        // ← ej. "@icfared" (opcional)
  },

  // ── Redes sociales ──────────────────────────────────────────────────────────
  // icono  → clase Font Awesome  (https://fontawesome.com/icons?f=brands)
  // imagen → ruta a la imagen del logo (opcional, se usa si existe)
  redes: [
    {
      nombre:  "Facebook",
      usuario: "Iglesia RED",
      icono:   "fa-brands fa-facebook-f",
      imagen:  "img/Facebook_Logo.png",
      url:     "https://www.facebook.com/share/1GQyv6REmB/"
    },
    {
      nombre:  "Instagram",
      usuario: "Iglesia RED",
      icono:   "fa-brands fa-instagram",
      imagen:  "img/Instagram_Logo.png",
      url:     "https://www.instagram.com/icfa_red"
    },
    {
      nombre:  "YouTube",
      usuario: "Familia de Amor RED",
      icono:   "fa-brands fa-youtube",
      imagen:  "img/Youtube_Logo.png",
      url:     "https://www.youtube.com/channel/UCsDDy1GRGox0VDzZjsj6mzg"
    },
    {
      nombre:  "Spotify",
      usuario: "Familia de Amor RED",
      icono:   "fa-brands fa-spotify",
      imagen:  "img/Spotify_Logo.png",
      url:     "https://open.spotify.com/user/31bb2yipn5csyivvk5tnsclebyxe"
    }
  ]

};
