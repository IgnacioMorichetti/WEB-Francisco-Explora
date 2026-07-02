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
- Documente su desafío principal: **correr su propio triatlón ("Explora") de forma independiente el domingo 5 de julio de 2026**, con una propuesta abierta para que otros se sumen a correrlo con él
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
| Fotos galería | — | A color por defecto (zoom suave al hover). Antes era B&N → color al hover; cambiado el 2026-06-26 porque la mayoría entra desde el celular y no hace hover | — |

> 🎨 **Bocetos de color:** en `/bocetos` (ruta `src/pages/bocetos/`) quedan solo las dos paletas definitivas: "Petróleo y arena" (la actual, modo claro) y "Noche y siena" (el modo oscuro). Cada una re-skinea la página completa sobreescribiendo las variables CSS. Los otros 10 bocetos exploratorios se eliminaron el 2026-06-11 una vez elegida la paleta.

---

## Estructura del sitio

**Tipo:** Una sola página con scroll continuo

| Sección | Importancia | Descripción |
|---------|-------------|-------------|
| Hero | ★★★★★ | Presentación impactante de Francisco, foto protagonista, tipografía enorme |
| Sobre mí | ★★★★★ | Quién es Francisco, sus valores, su filosofía de vida |
| El Desafío ("Explora") | ★★★★★ | **Sección prioritaria.** Rótulo "El desafío" + título grande **"Explora"**. Es el **domingo 5 de julio de 2026 en Potrerillos, Mendoza, Argentina** — **1,9 km natación · 90 km ciclismo · 21 km carrera a pie**. Tres tarjetas de disciplinas con horario y clima. Incluye la sub-sección **"Recorridos"** (ver abajo) y los botones **"Sumate al desafío"** (→ grupo de WhatsApp) y **"¿Sos una marca?"** (→ su WhatsApp). |
| └ Recorridos (dentro del Desafío) | ★★★★★ | Sub-sección con los **mapas del recorrido** que Francisco va a hacer. Intro de **3 párrafos**: (1) cada persona puede hacer la disciplina/distancias que quiera y el evento NO tiene organización de premiación/hidratación/comida/ambulancias/seguridad (jornada en conjunto pero 100% independiente, cada uno se hace cargo de sí mismo); (2) la "base" del evento es el **bar Mother focca** —las palabras "Mother focca" son link a su ubicación en Maps— donde se puede comer/tomar/descansar; (3) "estos son los recorridos que yo voy a hacer…". Leyenda de **Referencias** (📍 partida, 🏁 finalización, miniatura del Bar "Mother Focca" = punto de encuentro). Por disciplina: **Natación** (comienzo 9:00, autorizados por "Nadadores de montaña"; punto de encuentro Mirador 2 + link Maps; foto del circuito de 900 m ×2 = 1,9 km). **Ciclismo** (comienzo 10:30; mismo punto de encuentro; 6 mapas de tramos con descripción y "Total: X km", suman 90 km). **Carrera a pie** (comienzo 15-16 hs; punto de encuentro Bar Mother Focca + link Maps; 5 mapas con descripción y total, suman 21 km). Imágenes en `public/images/recorridos/`. |
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
| Facebook | ✅ Confirmado | [Francisco Explora](https://www.facebook.com/people/Francisco-Explora/61578235027790/) — la página NO tiene usuario `franciscoexplora`, usa URL de perfil con ID |
| Strava | ✅ Confirmado | [strava.com/athletes/176997103](https://www.strava.com/athletes/176997103) (perfil "Francisco explora") |
| Email de contacto | ✅ Confirmado | `explorafrancisco@gmail.com` (definitivo desde 2026-06-26; antes era el provisional `aventureate@gmail.com`) |
| WhatsApp grupo "Explora" | ✅ Confirmado | Link del grupo (botón "Sumate al desafío") |
| WhatsApp personal (marcas) | ✅ Confirmado | `+54 9 2613 657 527` → [wa.me/5492613657527](https://wa.me/5492613657527), sin mensaje predeterminado (pedido de Ignacio) |

---

## Marcas / Sponsors

> La sección de marcas mostrará los logos de las marcas que se van sumando a la comunidad de Francisco.

- **Estado actual:** Sin marcas confirmadas todavía
- **Diseño:** Grilla de logos sobre fondo oscuro, con hover effect
- **Flujo:** Cuando Francisco confirme una marca, Ignacio agrega el logo a `public/images/marcas/` y se actualiza el componente `Marcas.astro`

---

## Imágenes pendientes de cargar

> ⚠️ Todas las fotos deben colocarse en `public/images/`

> ℹ️ Set **provisional** cargado el 2026-06-26 (Francisco todavía tiene que pasar las fotos finales).

| Archivo | Uso | Estado |
|---------|-----|--------|
| `hero.jpg` | Foto de fondo del Hero (pantalla completa) | 🟡 Provisional (Francisco en una roca mirando el cañón) |
| `sobre-mi.jpg` | Foto de Francisco en "Sobre mí" | 🟡 Provisional (selfie con sombrero en la selva) |
| `galeria-1.jpg` | Galería — foto destacada (grande) | 🟡 Provisional (atardecer rosa, brazos en alto) |
| `galeria-2.jpg` a `galeria-5.jpg` | Galería — fotos secundarias | 🟡 Provisional (túnel, nieve, bote, playa) |
| `galeria-6.jpg` | Galería — 6ta foto | ❌ Falta (hay lugar para una más) |
| `public/images/marcas/` | Logos de marcas sponsors | ❌ Falta (sin marcas aún) |

---

## Pendiente / TODO

- [x] Conseguir todas las redes sociales de Francisco (usuario `franciscoexplora` en todas)
- [x] Conseguir el **URL real de Strava** → `strava.com/athletes/176997103`
- [x] Conseguir el **número de WhatsApp personal** de Francisco para el botón "¿Sos una marca?" → `wa.me/5492613657527`
- [x] Confirmar email definitivo → `explorafrancisco@gmail.com`
- [~] Cargar todas las fotos (`hero.jpg`, `sobre-mi.jpg`, `galeria-1` al `6`) — **set provisional cargado el 2026-06-26** (7 fotos que pasó Francisco: hero, sobre-mí y 5 de galería). Faltan las **fotos finales** y una 6ta de galería
- [x] Agregar navegación móvil (menú hamburguesa)
- [x] Revisar y personalizar todos los textos con info real de Francisco
- [ ] Marcas/Sponsors: ninguna confirmada aún (Francisco "lo tiene que hablar con ellos"). Sección no construida; el botón "Sos una marca" cubre el contacto por ahora.
- [ ] Videos: Francisco confirmó que tiene, los tiene que buscar
- [x] Desplegar en Vercel → **https://web-francisco-explora.vercel.app** (cuenta Vercel `ignaciomorichetti`, proyecto `web-francisco-explora`, deploy por CLI)
- [x] Dominio definitivo: **`franciscoexplora.com`** — **CONECTADO Y LIVE el 2026-06-26** (registrado en **Squarespace**). `franciscoexplora.com` (apex, principal) y `www` agregados/verificados en Vercel; `www` **redirige al apex** (308). DNS cargados en Squarespace (Método A): `A @ 216.198.79.1`, `A @ 64.29.17.1`, `CNAME www cname.vercel-dns.com`. SSL del apex emitido OK; el de `www` se emite automático poco después. El sitio sirve en https://franciscoexplora.com (los visitantes ya no ven `vercel.app`). Sin cambios de código. El deploy sigue siendo manual por CLI (`npx vercel --prod`).
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
| 2026-07-02 | **Reescritura de la intro de "Recorridos"** (`Desafio.astro`). El párrafo único anterior se reemplazó por **3 párrafos**: (1) cada uno hace la disciplina/distancias que quiera y el evento no dispone de organización (premiación, hidratación, comida, ambulancias, seguridad) — jornada en conjunto pero 100% independiente, cada uno se hace cargo de sí mismo; (2) la "base" es el **bar Mother focca** con las palabras "Mother focca" como **link a Maps**, donde comer/tomar/descansar junto al fuego y los paisajes; (3) el cierre "estos son los recorridos que yo voy a hacer…". Referencias intactas. |
| 2026-07-02 | **Cambio de fecha del desafío: de sábado 4 → domingo 5 de julio de 2026.** Actualizado en los 4 lugares del sitio: `Hero.astro` (`04 · 07 · 2026` → `05 · 07 · 2026`), `Desafio.astro` (intro "Sábado 4 de julio" → "Domingo 5 de julio" y cierre "participá el Sábado" → "participá el Domingo") y `Base.astro` (meta description SEO). Sin otros cambios de contenido. |
| 2026-07-01 | **Sesión grande de contenido con Francisco (sobre `npm run dev`, sin deploy hasta el final).** **Hero:** antetítulo "El desafío de Francisco" → **"Desafío"**; locación de la fecha ahora "Potrerillos, **Mendoza, Argentina**". **Desafío:** rótulo "La carrera" → "El desafío" y título → **"Explora"**; nueva descripción ("Sábado 4 de julio… Una carrera de 3 disciplinas… solo por el honor"); **distancias vuelven a 1,9 / 90 / 21** y la 3ª disciplina pasa a **"Carrera a pie"**; nuevas descripciones de cada tarjeta (horario 9:00, agua a 10°, etc.); se eliminaron los bloques "Mi objetivo" y "¿Por qué este desafío?"; cierre "Hacemos" → **"Hagamos deporte juntos… ¡participá el Sábado!"**. **Nueva sub-sección "Recorridos"** (títulos de disciplina agrandados; intro; leyenda de Referencias con la miniatura del Bar Mother Focca; info de horario/punto de encuentro/link Maps por disciplina; **foto del circuito de natación** y **11 mapas de tramos** —6 de ciclismo, 5 de carrera a pie— cada uno con descripción y "Total: X km"; las sumas cierran 90 km y 21 km). **Contacto:** se quitó el rótulo "Seguime y escribime" (reemplazado por una línea divisoria igual a la de abajo, simétrica); descripción → "…proponer nuevas ideas…" y cierre "**Siempre con ganas de explorar :)**". **Sobre mí:** título → **"¿Quién soy?"** y los 5 párrafos reescritos en la voz de Francisco. Imágenes nuevas en `public/images/recorridos/`. |
| 2026-06-29 | **Galería reordenada + foto nueva.** `galeria-3.jpg` se reemplazó por una foto nueva (Francisco en la nieve con bastones frente a una montaña nevada) y pasó a ser la **foto destacada (grande)**; la que era destacada (`galeria-1.jpg`, el atardecer) bajó a la grilla chica. Solo cambió el orden del array en `Galeria.astro` (la primera del array es la destacada) + los `alt`. Modo oscuro intacto. |
| 2026-06-29 | **Fotos nuevas de Francisco (siguen siendo un set en evolución).** Se reemplazaron 3 imágenes con fotos reales que pasó: `sobre-mi.jpg` → foto en un mirador sobre el mar ("playa"); `galeria-2.jpg` (antes la del túnel) → Francisco tocando la guitarra entre palmeras; `galeria-5.jpg` (antes la de playa) → Francisco frente a un dique al atardecer. Actualizados los `alt` correspondientes en `Galeria.astro`. |
| 2026-06-29 | **Cambios pedidos por Francisco (fecha, distancias y textos).** Nueva fecha de la carrera: **sábado 4 de julio de 2026** (Hero, intro del Desafío y meta description). Nuevas distancias: **1,75 km nado · 60 km bici · 15 km carrera** (antes 1,9/90/21,1). En el Hero se **eliminaron el subtítulo con las distancias y el lema** "Y la mejor parte: no lo corro solo". En el Desafío: intro pasa de "correr un triatlón de larga distancia" a **"correr mi propio triatlón"** (mismo final); descripción de la tarjeta Carrera ya no dice "media maratón" (15 km) → "Los últimos kilómetros para terminar con el desafío"; en "¿Por qué este desafío?" se quitó "No lo tenía planeado."; "Mi objetivo" → "terminar el desafío e intentar que todos la pasemos bien"; cierre "Hacemos deporte juntos" → **"Hagamos deporte juntos"**. |
| 2026-06-05 | Inicio del proyecto. Creación del repositorio Git y GitHub. README y documentación base. |
| 2026-06-05 | Definición de stack (Astro + Tailwind), identidad visual, estructura (1 sola página) y secciones. |
| 2026-06-05 | Inicialización del proyecto Astro. Instalación de Tailwind. Todos los componentes creados. |
| 2026-06-05 | Cambio de estética de "Explorador terroso" a "Aventurero oscuro" (fondo negro + naranja). |
| 2026-06-05 | Decisión: agregar sección Marcas/Sponsors. Pendiente de construir. |
| 2026-06-08 | Vuelta a la estética "Explorador terroso" (crema/marrón/oliva, tipografía serif en títulos). |
| 2026-06-08 | Toma de requerimientos detallada (`docs/toma-de-requerimientos.md`). Confirmado con Francisco: ya no es sorpresa; nueva estética **natural/selvática** (verde oscuro + marrón); **El Desafío pasa a ser prioridad #1** con fecha **28-jun-2026** y dos botones ("Sumate al desafío" → WhatsApp, "Sos una marca" → contacto). Una sola versión final con feedback continuo de Francisco. |
| 2026-06-09 | Iteración de paleta (varias versiones probadas: selvática verde, tierra marrón, atardecer ámbar, salvia, clara verde/oliva/bronce/greige, arcilla terracota). **Elegida: "Piedra y siena"** (fondo claro de piedra + siena + nogal). **El Desafío pasa a ser la sección principal:** el Hero ahora lidera con la carrera "Explora" (fecha, lugar, "Sumate") y la sección Desafío sube al 2º lugar. Creada galería de **bocetos de color** en `/bocetos` para mostrarle opciones a Francisco. |
| 2026-06-11 | **Deploy en Vercel:** el sitio está online en **https://web-francisco-explora.vercel.app** (proyecto `web-francisco-explora` en la cuenta `ignaciomorichetti`, deploy manual por CLI con `npx vercel --prod`). Pendiente: conectar el repo de GitHub en Vercel para deploys automáticos por commit, y el dominio `.com` cuando Francisco lo compre. |
| 2026-06-11 | **Purga del repo:** se eliminaron los 10 bocetos exploratorios de `paletas.js` (quedan solo "Petróleo y arena" y "Noche y siena"), los docs de sesión (`docs/sesion-01/02.md` — su contenido vive en este historial), el cuestionario ya respondido (`docs/preguntas-para-francisco.md` y su PDF) y el boilerplate `.vscode/`. Se conservan `Preguntas_y_Respuestas_Francisco_Explora.pdf` (respuestas originales de Francisco) y `docs/toma-de-requerimientos.md`. |
| 2026-06-11 | **WhatsApp personal confirmado:** `+54 9 2613 657 527`. Los botones "¿Sos una marca?" (Hero y Desafío) ahora abren `wa.me/5492613657527` sin mensaje predeterminado (antes era un mailto interino). |
| 2026-06-11 | **Facebook corregido:** Francisco pasó su link de share; el perfil real es `facebook.com/people/Francisco-Explora/61578235027790` (no existe el usuario `franciscoexplora` en Facebook). Actualizado en Contacto. |
| 2026-06-11 | **Strava confirmado:** Francisco pasó su link (`strava.app.link`), resuelto al perfil real `strava.com/athletes/176997103`. Cargado en Contacto. |
| 2026-06-11 | **Refinamientos:** fondo claro aún más luminoso (`#F8F4EB`); tipografía unificada a una sola familia (Inter, se quitó Playfair Display); título de Sobre mí más chico (`4xl/5xl`); cursor pointer en el toggle de tema y el menú hamburguesa; navbar con secciones + toggle agrupados a la derecha (colapso móvil intacto); al hacer hover sobre el toggle de tema, la luna se rellena con el color de acento (y el centro del sol en modo oscuro). |
| 2026-06-11 | **Rediseño de paleta + modo oscuro:** la paleta principal pasa a "Petróleo y arena" ajustada (fondo arena más claro/brillante, todas las letras y líneas en azul petróleo). Se agrega **modo oscuro** con paleta "Noche y siena" y toggle luna/sol en el Navbar (persistido en localStorage). Bloques "¿Por qué este desafío?" y "Mi objetivo" centrados (antes tenían borde izquierdo tipo callout, eliminado). Se quitó la frase "Gracias por un día más en el planeta Tierra" de Sobre mí y el indicador de Scroll del Hero. Badge "Actual" en `/bocetos` movido a Petróleo y arena. |
| 2026-06-11 | **Feedback de Francisco aplicado** (revisó la página sin imágenes): "Explora" del Hero más chico; subtítulo "Un triatlón personal: 1,9 km nadando, 90 km pedaleando y 21,1 km corriendo"; "¿Querés participar?" sobre los botones del Hero (botón 2 pasa de "Conocé a Francisco" a "¿Sos una marca?"); nueva intro del Desafío ("Me enfrento a mi primer objetivo del año... Y vos estás invitado"); tarjetas natación/carrera retocadas; "¿Por qué este desafío?" reescrito en su voz (decisión 100% impulsiva, "la excusa para arrancar a hacer contenido"); "Mi objetivo" reescrito (terminar el desafío y que todos la pasen bien); bloque final "Hacemos deporte juntos. ¡Entrá al grupo de WhatsApp y mantenete informado!"; Sobre mí reescrito completo con título "Persiguiendo mis sueños"; Galería retitulada "Recuerdos". Números con coma decimal (1,9 / 21,1). |
| 2026-06-26 | **Ajustes:** Francisco reemplazó la foto de nieve de la galería (`galeria-3.jpg`, sigue siendo provisional). **Hero más protagonista:** la foto de fondo ahora se ve a opacidad completa (antes 60%) y se suavizó la veladura (`from-selva/55 via-selva/30 to-selva`, antes `/80 /65`) para que la imagen se luzca más sin perder legibilidad del texto. |
| 2026-06-26 | **Legibilidad del Hero sobre la foto.** Como la foto de fondo se ve más, se ajustaron los colores de los textos para que se lean bien en **modo claro** (el oscuro ya se veía bien). Se habilitó el variant `dark:` ligado a la clase `.dark` (`@custom-variant dark (&:where(.dark, .dark *))` en `global.css`) para poder dar colores distintos por modo. Quedó así: **FECHA** → claro `crema`/#1E2B2A (igual que el TÍTULO "Explora"), oscuro `musgo`/siena (igual que el ANTETÍTULO); **SUBTÍTULO** ("Un triatlón personal…") → blanco con sombra; **LEMA** ("Y la mejor parte: no lo corro solo") → claro **blanco** con sombra, oscuro `musgo`/siena. Se le agregó un **desenfoque leve** (`blur-[3px] scale-105`) a la foto del Hero. Se **nombraron los textos del Hero** con comentarios en el código para referirse a ellos por rol y no por contenido: **ANTETÍTULO** ("El desafío de Francisco"), **TÍTULO** ("Explora"), **FECHA**, **SUBTÍTULO**, **LEMA** (frase en itálica) y **LLAMADO** ("¿Querés participar?"). |
| 2026-06-26 | **Email definitivo + fotos provisionales + galería en color.** Email de contacto cambiado a `explorafrancisco@gmail.com` (antes `aventureate@gmail.com`). Cargado un set provisional de 7 fotos reales de Francisco (`hero.jpg` = roca/cañón, `sobre-mi.jpg` = selfie selva, `galeria-1..5`). **Galería rediseñada:** las fotos pasan a estar **a color por defecto** (antes B&N con color al hover) porque la mayoría entra desde el celular y no hace hover; queda un zoom suave al hover. La **foto destacada se ve más grande** (layout a 2 columnas: destacada grande a la izquierda + 2×2 a la derecha). "Sobre mí" también a color. Galería con 5 fotos por ahora (hay lugar para una 6ta). Pendiente: fotos finales y deploy al dominio propio. |
| 2026-06-09 | Francisco respondió la toma de requisitos (`Preguntas_y_Respuestas_Francisco_Explora.pdf`). **Página construida con su info real:** paleta selvática implementada (hex definidos), historia real (nacido 18-dic-2000), lema ("Gracias por un día más en el planeta Tierra" / "Movimiento trae más movimiento"), carrera **"Explora" en Potrerillos**, motivación y objetivo en su voz auténtica ("la excusa perfecta para empezar" / "terminarlo y pasarla bien"), redes (`franciscoexplora` en todas), menú móvil hamburguesa. Build OK. Pendientes: WhatsApp personal (marcas), URL de Strava, fotos y videos. |

---

## Repositorio

- **GitHub:** https://github.com/IgnacioMorichetti/WEB-Francisco-Explora
- **Rama principal:** main
