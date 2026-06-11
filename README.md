# WEB Francisco Explora

> **NOTA PARA CLAUDE:** Este README es el punto de partida obligatorio de cada conversación sobre este proyecto. Léelo siempre antes de empezar a trabajar. Contiene el historial completo, las decisiones tomadas y los próximos pasos.

---

## ¿Quién es Francisco?

Francisco es el hermano de Ignacio (el usuario). Un hombre lleno de vida, espíritu explorador, humilde, honesto, divertido y sumamente sociable. Brilla en cualquier lugar en el que se encuentra y hace feliz a cualquier persona que tenga enfrente.

Quiere convertirse en **influencer** en Instagram y otras redes sociales, siendo conocido por su espíritu aventurero y su autenticidad. Su perfil de Instagram es [@franciscoexplora](https://www.instagram.com/franciscoexplora).

**Estado:** Francisco ya está al tanto de la web (antes era sorpresa). Participa activamente y da feedback constante sobre el sitio.

---

## Objetivo del proyecto

Crear un sitio web personal para Francisco que:
- Refleje su personalidad: explorador, humilde, auténtico, divertido
- Acompañe su crecimiento como influencer
- Documente su desafío principal: **correr un Medio Ironman (70.3) de forma independiente el 28 de junio de 2026**, con una propuesta abierta para que otros se sumen a correrlo con él
- Sirva como hub central de su presencia digital (Instagram y otras redes)

---

## Referencia de diseño

- **Sitio de referencia:** https://www.project226.xyz/ — sitio sobre el camino de dos personas hacia un Ironman 70.3. Concepto similar: viaje personal + deporte extremo + documentación de proceso.

---

## Stack tecnológico

**Astro + Tailwind CSS**

- Astro para la estructura y generación de páginas (`.astro`)
- Tailwind CSS para los estilos
- Despliegue: Vercel (gratis)

Estructura de carpetas:
```
src/
  pages/
    index.astro        ← página principal (única)
  components/
    Navbar.astro
    Hero.astro
    SobreMi.astro
    Desafio.astro
    Galeria.astro
    Marcas.astro       ← NUEVO: marcas que se suman a su comunidad
    Contacto.astro
  layouts/
    Base.astro
public/
  images/
```

---

## Identidad visual

**Estética:** "Petróleo y arena" (ajustada) — **fondo arena claro y brillante** con TODO el acento (texto destacado, líneas y botones) en la familia **azul petróleo**, sin restos terracota. Elegida el 2026-06-11 a pedido de Francisco (era el boceto 10, con el fondo aclarado y los acentos unificados al azul).

**Modo oscuro:** paleta **"Noche y siena"** (el último boceto: fondo carbón cálido + siena). Toggle luna/sol en el Navbar, elección persistida en `localStorage` (clave `tema`), default claro. Se implementa con la clase `.dark` en `<html>` que sobreescribe las variables CSS (`html.dark` en `global.css`); en `/bocetos` no aplica porque cada boceto fuerza su propia paleta.

> Nota técnica: por estabilidad del código los tokens CSS conservan sus nombres, pero su rol cambió. `--color-selva` = FONDO CLARO, `--color-crema` = TEXTO OSCURO, `--color-musgo` = petróleo (acento 1) y `--color-tierra` = petróleo azulado (acento 2 / líneas).

| Elemento | Token | Claro (actual) | Oscuro (Noche y siena) |
|----------|-------|----------------|------------------------|
| Fondo principal | `--color-selva` | `#F8F4EB` (arena muy clara) | `#211D18` |
| Fondo secundario | `--color-selva-2` | `#FDFBF6` | `#2A251F` |
| Panel / hover | `--color-selva-3` | `#EBE5D6` | `#38312A` |
| Acento 1 | `--color-musgo` | `#2F6E66` (petróleo) | `#C25A37` (siena) |
| Acento 1 hover | `--color-hoja` | `#224F49` | `#A8492B` |
| Acento 2 / líneas | `--color-tierra` | `#41707A` (petróleo azulado) | `#C99A66` |
| Texto principal | `--color-crema` | `#1E2B2A` (petróleo casi negro) | `#F0E9DE` |
| Texto suave | `--color-suave` | `#54696B` | `#A99C8B` |
| Tipografía (única) | — | Inter en todo el sitio (títulos en black 900; el token `--font-serif` quedó apuntando a Inter por estabilidad) | — |
| Fotos galería | — | Blanco y negro por defecto, color al hover | — |

> 🎨 **Bocetos de color:** hay una galería de variantes de paleta en `/bocetos` (ruta `src/pages/bocetos/`) para mostrarle opciones a Francisco. Cada boceto re-skinea la página completa sobreescribiendo las variables CSS. "Petróleo y arena" es la actual del sitio y "Noche y siena" es el modo oscuro.

---

## Estructura del sitio

**Tipo:** Una sola página con scroll continuo

| Sección | Importancia | Descripción |
|---------|-------------|-------------|
| Hero | ★★★★★ | Presentación impactante de Francisco, foto protagonista, tipografía enorme |
| Sobre mí | ★★★★★ | Quién es Francisco, sus valores, su filosofía de vida |
| El Desafío ("Explora") | ★★★★★ | **Sección prioritaria.** La carrera se llama **"Explora"**, es el **28 de junio de 2026 en Potrerillos (Mendoza)** — 1.9km nado · 90km ciclismo · 21.1km carrera. Motivación real de Francisco: "fue la excusa perfecta para empezar, el origen". Objetivo: "terminarlo y pasarla bien". Incluye botón **"Sumate al desafío"** (→ grupo de WhatsApp, link confirmado) y **"Sos una marca"** (→ su WhatsApp, número pendiente; interino: email) |
| Galería | ★★★★☆ | Fotos de sus aventuras y entrenamientos |
| Marcas | ★★★★☆ | Las marcas que se van sumando a su comunidad / sponsors |
| Contacto | ★★★★★ | TODAS sus redes sociales + info para colaboraciones |

**Idea futura:** Bitácora / Blog — actualizaciones de aventuras y entrenamiento. Segunda etapa.

---

## Datos de contacto pendientes de completar

> ⚠️ **FALTA INFORMACIÓN** — Hay que pedirle a Francisco (o averiguar) todos sus datos de contacto y redes sociales antes de terminar la sección Contacto.

> ✅ **Confirmado (2026-06-09):** el usuario en TODAS las redes es `franciscoexplora`. Red prioritaria a crecer: **Instagram**.

| Plataforma | Estado | Valor |
|------------|--------|-------|
| Instagram (prioritaria) | ✅ Confirmado | [@franciscoexplora](https://www.instagram.com/franciscoexplora) |
| TikTok | ✅ Confirmado | [@franciscoexplora](https://www.tiktok.com/@franciscoexplora) |
| YouTube | ✅ Confirmado | [@franciscoexplora](https://www.youtube.com/@franciscoexplora) |
| Facebook | ✅ Confirmado | [franciscoexplora](https://www.facebook.com/franciscoexplora) |
| Strava | ✅ Confirmado | [strava.com/athletes/176997103](https://www.strava.com/athletes/176997103) (perfil "Francisco explora") |
| Email de contacto | ⚠️ Provisional | `aventureate@gmail.com` (Francisco lo quiere cambiar) |
| WhatsApp grupo "Explora" | ✅ Confirmado | Link del grupo (botón "Sumate al desafío") |
| WhatsApp personal (marcas) | ❌ Pendiente | Número para el botón "Sos una marca" |

---

## Marcas / Sponsors

> La sección de marcas mostrará los logos de las marcas que se van sumando a la comunidad de Francisco.

- **Estado actual:** Sin marcas confirmadas todavía
- **Diseño:** Grilla de logos sobre fondo oscuro, con hover effect
- **Flujo:** Cuando Francisco confirme una marca, Ignacio agrega el logo a `public/images/marcas/` y se actualiza el componente `Marcas.astro`

---

## Imágenes pendientes de cargar

> ⚠️ Todas las fotos deben colocarse en `public/images/`

| Archivo | Uso | Estado |
|---------|-----|--------|
| `hero.jpg` | Foto de fondo del Hero (pantalla completa) | ❌ Falta |
| `sobre-mi.jpg` | Foto de Francisco en "Sobre mí" | ❌ Falta |
| `galeria-1.jpg` | Galería — foto destacada (grande) | ❌ Falta |
| `galeria-2.jpg` a `galeria-6.jpg` | Galería — fotos secundarias | ❌ Falta |
| `public/images/marcas/` | Logos de marcas sponsors | ❌ Falta (sin marcas aún) |

---

## Pendiente / TODO

- [x] Conseguir todas las redes sociales de Francisco (usuario `franciscoexplora` en todas)
- [x] Conseguir el **URL real de Strava** → `strava.com/athletes/176997103`
- [ ] Conseguir el **número de WhatsApp personal** de Francisco para el botón "Sos una marca"
- [ ] Confirmar email definitivo (el actual `aventureate@gmail.com` es provisional)
- [ ] Cargar todas las fotos (`hero.jpg`, `sobre-mi.jpg`, `galeria-1` al `6`) — Francisco las pasa
- [x] Agregar navegación móvil (menú hamburguesa)
- [x] Revisar y personalizar todos los textos con info real de Francisco
- [ ] Marcas/Sponsors: ninguna confirmada aún (Francisco "lo tiene que hablar con ellos"). Sección no construida; el botón "Sos una marca" cubre el contacto por ahora.
- [ ] Videos: Francisco confirmó que tiene, los tiene que buscar
- [ ] Desplegar en Vercel
- [ ] Definir dominio (¿franciscoexplora.com o similar?)
- [ ] Segunda etapa: Bitácora / Blog

---

## Comandos útiles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza el build antes de subir |

---

## Historial de decisiones y cambios

| Fecha | Descripción |
|-------|-------------|
| 2026-06-05 | Inicio del proyecto. Creación del repositorio Git y GitHub. README y documentación base. |
| 2026-06-05 | Definición de stack (Astro + Tailwind), identidad visual, estructura (1 sola página) y secciones. |
| 2026-06-05 | Inicialización del proyecto Astro. Instalación de Tailwind. Todos los componentes creados. |
| 2026-06-05 | Cambio de estética de "Explorador terroso" a "Aventurero oscuro" (fondo negro + naranja). |
| 2026-06-05 | Decisión: agregar sección Marcas/Sponsors. Pendiente de construir. |
| 2026-06-08 | Vuelta a la estética "Explorador terroso" (crema/marrón/oliva, tipografía serif en títulos). |
| 2026-06-08 | Toma de requerimientos detallada (`docs/toma-de-requerimientos.md`). Confirmado con Francisco: ya no es sorpresa; nueva estética **natural/selvática** (verde oscuro + marrón); **El Desafío pasa a ser prioridad #1** con fecha **28-jun-2026** y dos botones ("Sumate al desafío" → WhatsApp, "Sos una marca" → contacto). Una sola versión final con feedback continuo de Francisco. |
| 2026-06-09 | Iteración de paleta (varias versiones probadas: selvática verde, tierra marrón, atardecer ámbar, salvia, clara verde/oliva/bronce/greige, arcilla terracota). **Elegida: "Piedra y siena"** (fondo claro de piedra + siena + nogal). **El Desafío pasa a ser la sección principal:** el Hero ahora lidera con la carrera "Explora" (fecha, lugar, "Sumate") y la sección Desafío sube al 2º lugar. Creada galería de **bocetos de color** en `/bocetos` para mostrarle opciones a Francisco. |
| 2026-06-11 | **Strava confirmado:** Francisco pasó su link (`strava.app.link`), resuelto al perfil real `strava.com/athletes/176997103`. Cargado en Contacto. |
| 2026-06-11 | **Refinamientos:** fondo claro aún más luminoso (`#F8F4EB`); tipografía unificada a una sola familia (Inter, se quitó Playfair Display); título de Sobre mí más chico (`4xl/5xl`); cursor pointer en el toggle de tema y el menú hamburguesa; navbar con secciones + toggle agrupados a la derecha (colapso móvil intacto); al hacer hover sobre el toggle de tema, la luna se rellena con el color de acento (y el centro del sol en modo oscuro). |
| 2026-06-11 | **Rediseño de paleta + modo oscuro:** la paleta principal pasa a "Petróleo y arena" ajustada (fondo arena más claro/brillante, todas las letras y líneas en azul petróleo). Se agrega **modo oscuro** con paleta "Noche y siena" y toggle luna/sol en el Navbar (persistido en localStorage). Bloques "¿Por qué este desafío?" y "Mi objetivo" centrados (antes tenían borde izquierdo tipo callout, eliminado). Se quitó la frase "Gracias por un día más en el planeta Tierra" de Sobre mí y el indicador de Scroll del Hero. Badge "Actual" en `/bocetos` movido a Petróleo y arena. |
| 2026-06-11 | **Feedback de Francisco aplicado** (revisó la página sin imágenes): "Explora" del Hero más chico; subtítulo "Un triatlón personal: 1,9 km nadando, 90 km pedaleando y 21,1 km corriendo"; "¿Querés participar?" sobre los botones del Hero (botón 2 pasa de "Conocé a Francisco" a "¿Sos una marca?"); nueva intro del Desafío ("Me enfrento a mi primer objetivo del año... Y vos estás invitado"); tarjetas natación/carrera retocadas; "¿Por qué este desafío?" reescrito en su voz (decisión 100% impulsiva, "la excusa para arrancar a hacer contenido"); "Mi objetivo" reescrito (terminar el desafío y que todos la pasen bien); bloque final "Hacemos deporte juntos. ¡Entrá al grupo de WhatsApp y mantenete informado!"; Sobre mí reescrito completo con título "Persiguiendo mis sueños"; Galería retitulada "Recuerdos". Números con coma decimal (1,9 / 21,1). |
| 2026-06-09 | Francisco respondió la toma de requisitos (`Preguntas_y_Respuestas_Francisco_Explora.pdf`). **Página construida con su info real:** paleta selvática implementada (hex definidos), historia real (nacido 18-dic-2000), lema ("Gracias por un día más en el planeta Tierra" / "Movimiento trae más movimiento"), carrera **"Explora" en Potrerillos**, motivación y objetivo en su voz auténtica ("la excusa perfecta para empezar" / "terminarlo y pasarla bien"), redes (`franciscoexplora` en todas), menú móvil hamburguesa. Build OK. Pendientes: WhatsApp personal (marcas), URL de Strava, fotos y videos. |

---

## Repositorio

- **GitHub:** https://github.com/IgnacioMorichetti/WEB-Francisco-Explora
- **Rama principal:** main
