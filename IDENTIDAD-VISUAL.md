# Guía de Identidad Visual — ICFA RED

Este documento describe la identidad visual oficial de ICFA RED aplicada en la landing page.

---

## Paleta de Colores Oficial

| Variable CSS         | HEX       | Color            | Uso                                          |
|----------------------|-----------|------------------|----------------------------------------------|
| `--color-primary`    | `#162C54` | Azul principal   | Títulos, encabezados, elementos corporativos |
| `--color-accent`     | `#FFDE59` | Amarillo         | Acentos, resaltes, botones hover            |
| `--color-dark`       | `#1E1C1C` | Negro apagado    | Texto principal, íconos                      |
| `--color-light`      | `#F1F1F1` | Gris claro       | Fondo de página                              |
| `--color-white`      | `#FFFFFF` | Blanco           | Tarjetas, superficies, texto sobre oscuro    |

### Aplicación de colores

#### Azul principal (`#162C54`)
- Título "ICFA RED"
- Textos de marca (footer)
- Borde sutil en hover de tarjetas
- Flechas en estado normal
- Color de tema del navegador

#### Amarillo (`#FFDE59`)
- Línea decorativa bajo el título
- Flechas en hover
- Fondo de flechas al pasar el mouse
- Acentos de enfoque (focus outline)

#### Negro apagado (`#1E1C1C`)
- Texto principal
- Nombres de las redes sociales en las tarjetas

#### Gris claro (`#F1F1F1`)
- Fondo general de la página
- Fondo de las flechas en estado normal

#### Blanco (`#FFFFFF`)
- Tarjetas de redes sociales
- Texto sobre fondos oscuros (iconos)

---

## Tipografía

### Fuente: Poppins

Importada desde Google Fonts:
```
https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700
```

### Jerarquía tipográfica

| Elemento           | Peso | Tamaño   | Uso                              |
|--------------------|------|----------|----------------------------------|
| Título principal   | 700  | 2.25rem  | "ICFA RED"                       |
| Nombre de red      | 600  | 1rem     | "Facebook", "Instagram", etc.    |
| Descripción        | 400  | 0.975rem | Texto descriptivo de la iglesia  |
| Usuario            | 400  | 0.825rem | "@icfa.red", "Iglesia RED", etc. |
| Footer             | 400  | 0.825rem | Copyright y marca                |

---

## Espaciado y Diseño

### Radios de borde
- Tarjetas: `16px`
- Logo: `50%` (círculo completo)
- Iconos de redes: `12px`
- Flechas: `50%` (círculo completo)

### Sombras (muy suaves)

| Nivel        | Uso                               | Valor                                |
|--------------|-----------------------------------|--------------------------------------|
| `shadow-sm`  | Tarjetas en reposo                | `0 2px 6px rgba(22,44,84,0.04)`      |
| `shadow-md`  | Tarjetas en hover, logo           | `0 4px 12px rgba(22,44,84,0.08)`     |
| `shadow-lg`  | Logo en hover                     | `0 8px 24px rgba(22,44,84,0.12)`     |

### Espaciado interno (padding)
- Tarjetas (móvil): `1.125rem × 1.375rem`
- Tarjetas (escritorio): `1.375rem × 1.75rem`

### Espaciado entre elementos (gap)
- Entre tarjetas: `0.875rem`
- Dentro de tarjetas: `1rem`

---

## Transiciones y Animaciones

### Duración
- Transición estándar: `250ms`
- Curva de tiempo: `cubic-bezier(0.4, 0, 0.2, 1)`

### Animaciones de entrada
- Header: fade-in desde arriba, `500ms`
- Tarjetas: fade-in + translateY, escalonado cada `80ms`
- Footer: fade-in, `500ms` con delay de `500ms`

### Efectos hover
- Tarjeta: desplazamiento vertical `-2px`, sombra más intensa
- Icono: escala `1.08`
- Flecha: desplazamiento horizontal `3px`, cambio de color a amarillo

### Efectos active (móvil)
- Tarjeta: escala `0.978`
- Sombra reducida a `shadow-sm`

---

## Modo Oscuro Automático

Se activa según la preferencia del sistema (`prefers-color-scheme: dark`).

### Adaptaciones en modo oscuro

| Variable         | Modo claro  | Modo oscuro |
|------------------|-------------|-------------|
| `--bg`           | `#F1F1F1`   | `#0D0D0D`   |
| `--surface`      | `#FFFFFF`   | `#1A1A1A`   |
| `--surface-hover`| `#FAFAFA`   | `#242424`   |
| `--text-main`    | `#1E1C1C`   | `#F1F1F1`   |
| `--text-sub`     | `#5A5A5A`   | `#A0A0A0`   |

> Los colores corporativos (azul y amarillo) **no cambian** en modo oscuro para mantener la identidad de marca.

---

## Accesibilidad

### Contraste
- Texto principal sobre blanco: AAA (más de 7:1)
- Azul principal sobre blanco: AA (más de 4.5:1)
- Amarillo sobre blanco: se usa solo como acento decorativo, no como fondo de texto

### Focus visible
- Borde amarillo de `3px` con offset de `3px`
- Se activa solo con navegación por teclado (`:focus-visible`)

### Movimiento reducido
- Detecta `prefers-reduced-motion: reduce`
- Desactiva todas las animaciones y transiciones

### ARIA
- Todas las tarjetas tienen `aria-label` descriptivo
- Fallback del logo tiene `aria-hidden="true"`
- Iconos de Font Awesome tienen `aria-hidden="true"`

---

## Cómo editar colores

**Todos los colores están centralizados en `css/styles.css`, líneas 7-12.**

Si necesitas cambiar la paleta oficial:

1. Abre `css/styles.css`
2. Modifica las variables en `:root`:
   ```css
   :root {
     --color-primary: #TU-NUEVO-AZUL;
     --color-accent:  #TU-NUEVO-AMARILLO;
     /* etc. */
   }
   ```
3. Todo el sitio se actualizará automáticamente

**No edites valores HEX sueltos en el CSS.** Todo debe usar variables para mantener la coherencia visual.

---

## Referencia rápida de uso

### ¿Qué color usar para...?

| Elemento                              | Variable            |
|---------------------------------------|---------------------|
| Título principal                      | `--color-primary`   |
| Línea bajo el título                  | `--color-accent`    |
| Descripción                           | `--text-sub`        |
| Nombre de la red (tarjeta)            | `--color-dark`      |
| Usuario (tarjeta)                     | `--text-sub`        |
| Flecha normal                         | `--color-primary`   |
| Flecha en hover                       | `--color-accent`    |
| Fondo de flecha en hover              | `--color-accent`    |
| Fondo de tarjeta                      | `--surface`         |
| Fondo de página                       | `--bg`              |

---

## Archivos que deben respetar la identidad

| Archivo            | Qué contiene                          |
|--------------------|---------------------------------------|
| `css/styles.css`   | Toda la paleta y estilos              |
| `js/config.js`     | `themeColor` en meta                  |
| `manifest.json`    | `theme_color` y `background_color`    |
| `index.html`       | Meta tag `theme-color`                |
| `assets/logo.png`  | Logo oficial de ICFA RED              |
| `assets/og-image.png` | Imagen con colores corporativos    |

---

## Notas finales

- La identidad visual es **consistente** en todo el sitio
- Los colores corporativos **no se modifican** sin autorización
- Toda modificación debe mantener el **contraste accesible**
- El diseño es **Mobile First**, optimizado para dispositivos móviles
- El código es **modular**: editas `config.js`, no HTML
