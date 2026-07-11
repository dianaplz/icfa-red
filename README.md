# ICFA RED — Landing Page de Redes Sociales

Landing page tipo Linktree para **ICFA RED — Familia de Amor**.  
Diseño moderno con la identidad visual oficial, modo oscuro automático y 100% compatible con GitHub Pages.

---

## Identidad Visual

### Paleta oficial de colores

| Color          | HEX       | Uso                                    |
|----------------|-----------|----------------------------------------|
| Azul principal | `#162C54` | Encabezados, títulos, elementos clave  |
| Amarillo       | `#FFDE59` | Acentos, resaltes, detalles importantes|
| Negro apagado  | `#1E1C1C` | Texto principal                        |
| Gris claro     | `#F1F1F1` | Fondo de página                        |
| Blanco         | `#FFFFFF` | Tarjetas, superficie                   |

### Tipografía

**Poppins** (Google Fonts) en todos los textos:
- 700 → títulos
- 600 → subtítulos
- 400 → texto normal

---

## Vista previa

```
┌─────────────────────────┐
│         LOGO            │
│       ICFA RED          │
│  "Conéctate con..."     │
│                         │
│  📘  Facebook           │
│  📷  Instagram          │
│  ▶️  YouTube            │
│  🎵  Spotify            │
│                         │
│   © 2025 ICFA RED       │
└─────────────────────────┘
```

---

## Estructura del proyecto

```
ICFA-RED/
├── index.html          → Página principal (no tocar)
├── manifest.json       → PWA — instalable desde el navegador
├── css/
│   └── styles.css      → Estilos (no tocar)
├── js/
│   ├── config.js       → ✏️  ÚNICO ARCHIVO QUE DEBES EDITAR
│   ├── render.js       → Genera las tarjetas (no tocar)
│   └── app.js          → Coordina el render (no tocar)
└── img/
    ├── logo.png        → Logo de la iglesia  (400×400 px, PNG transparente)
    ├── favicon.png     → Ícono del navegador (64×64 px)
    └── og-image.png    → Imagen para WhatsApp/Facebook (1200×630 px)
```

---

## Cómo editar el contenido

**Solo necesitas abrir `js/config.js`.**

### Cambiar nombre o descripción

```js
nombre: "ICFA RED",
descripcion: "Tu nuevo texto aquí...",
```

### Actualizar un enlace de red social

```js
{
  nombre:  "Facebook",
  usuario: "Iglesia RED",
  icono:   "fa-brands fa-facebook-f",
  url:     "https://www.facebook.com/TU-PAGINA"   // ← pega tu enlace aquí
},
```

### Agregar una nueva red social

Copia este bloque y pégalo dentro del arreglo `redes: [ ]`:

```js
{
  nombre:  "Twitter",
  usuario: "@icfared",
  icono:   "fa-brands fa-x-twitter",
  url:     "https://twitter.com/icfared"
},
```

Iconos disponibles en → [fontawesome.com/icons](https://fontawesome.com/icons?f=brands)

---

## Probar localmente

### Opción 1 — VS Code (recomendado)

1. Instala la extensión **Live Server** en VS Code
2. Abre la carpeta del proyecto
3. Clic derecho sobre `index.html` → **"Open with Live Server"**
4. Se abrirá en `http://127.0.0.1:5500`

### Opción 2 — Python

```bash
python -m http.server 8000
```
Luego abre `http://localhost:8000` en el navegador.

> ⚠️ No abras `index.html` directamente con doble clic (`file://`).  
> Usa siempre un servidor para que los scripts carguen correctamente.

---

## Publicar en GitHub Pages — paso a paso

### 1. Preparar los assets

Coloca estos archivos en la carpeta `img/`:

| Archivo         | Tamaño recomendado | Descripción                      |
|-----------------|--------------------|----------------------------------|
| `logo.png`      | 400 × 400 px       | Logo con fondo transparente      |
| `favicon.png`   | 64 × 64 px         | Ícono en la pestaña del navegador|
| `og-image.png`  | 1200 × 630 px      | Previsualización en WhatsApp/FB  |

### 2. Actualizar la URL en config.js

```js
meta: {
  siteUrl: "https://TU-USUARIO.github.io/ICFA-RED",  // ← cambia esto
  ...
}
```

### 3. Subir a GitHub

```bash
git init
git add .
git commit -m "Primer deploy ICFA RED"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ICFA-RED.git
git push -u origin main
```

### 4. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En "Branch" selecciona `main` y carpeta `/ (root)`
4. Clic en **Save**
5. En 1–2 minutos tu sitio estará en:  
   `https://TU-USUARIO.github.io/ICFA-RED`

### 5. Generar el código QR

1. Copia la URL de tu sitio
2. Ve a [qr-code-generator.com](https://www.qr-code-generator.com/)
3. Pega la URL y descarga el QR en alta calidad (PNG o SVG)

---

## Tecnologías usadas

- HTML5 semántico
- CSS3 (variables, grid, animaciones, modo oscuro automático)
- JavaScript puro (ES6+), sin frameworks
- Font Awesome 6 (CDN)
- PWA manifest

---

## Licencia

Proyecto privado — ICFA RED © 2025
