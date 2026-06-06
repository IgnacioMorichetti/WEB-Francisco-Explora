# WEB Francisco Explora

> **NOTA PARA CLAUDE:** Este README es el punto de partida obligatorio de cada conversación sobre este proyecto. Léelo siempre antes de empezar a trabajar. Contiene el historial completo, las decisiones tomadas y los próximos pasos.

---

## ¿Quién es Francisco?

Francisco es el hermano de Ignacio (el usuario). Un hombre lleno de vida, espíritu explorador, humilde, honesto, divertido y sumamente sociable. Brilla en cualquier lugar en el que se encuentra y hace feliz a cualquier persona que tenga enfrente.

Quiere convertirse en **influencer** en Instagram y otras redes sociales, siendo conocido por su espíritu aventurero y su autenticidad. Su perfil de Instagram es [@franciscoexplora](https://www.instagram.com/franciscoexplora).

**La web es una sorpresa de Ignacio para Francisco. Francisco no sabe que se la están haciendo.**

---

## Objetivo del proyecto

Crear un sitio web personal para Francisco que:
- Refleje su personalidad: explorador, humilde, auténtico, divertido
- Acompañe su crecimiento como influencer
- Documente su desafío principal: **correr un Medio Ironman (70.3) de forma independiente a finales de junio de 2026**
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

**Estética:** Aventurero oscuro — National Geographic meets Nike

| Elemento | Valor |
|----------|-------|
| Fondo principal | `#0a0a0a` (negro) |
| Fondo secundario | `#111111` (negro suave) |
| Acento | `#F97316` (naranja fuego) |
| Texto | `#f5f5f5` (blanco) |
| Tipografía | Sans-serif black/900, uppercase, impacto visual |
| Vibe | Bold, dramático, energético, aventurero |
| Fotos galería | Blanco y negro por defecto, color al hover |

---

## Estructura del sitio

**Tipo:** Una sola página con scroll continuo

| Sección | Importancia | Descripción |
|---------|-------------|-------------|
| Hero | ★★★★★ | Presentación impactante de Francisco, foto protagonista, tipografía enorme |
| Sobre mí | ★★★★★ | Quién es Francisco, sus valores, su filosofía de vida |
| El Desafío (Ironman) | ★★★★★ | El Medio Ironman 70.3 — 1.9km nado · 90km ciclismo · 21.1km carrera. Solo, a finales de junio 2026 |
| Galería | ★★★★☆ | Fotos de sus aventuras y entrenamientos |
| Marcas | ★★★★☆ | Las marcas que se van sumando a su comunidad / sponsors |
| Contacto | ★★★★★ | TODAS sus redes sociales + info para colaboraciones |

**Idea futura:** Bitácora / Blog — actualizaciones de aventuras y entrenamiento. Segunda etapa.

---

## Datos de contacto pendientes de completar

> ⚠️ **FALTA INFORMACIÓN** — Hay que pedirle a Francisco (o averiguar) todos sus datos de contacto y redes sociales antes de terminar la sección Contacto.

| Plataforma | Estado | Valor |
|------------|--------|-------|
| Instagram | ✅ Confirmado | [@franciscoexplora](https://www.instagram.com/franciscoexplora) |
| TikTok | ❓ Desconocido | Por confirmar |
| YouTube | ❓ Desconocido | Por confirmar |
| Strava | ❓ Desconocido | Por confirmar (muy relevante para el Ironman) |
| Email de contacto | ❓ Desconocido | Para colaboraciones con marcas |
| Otras redes | ❓ Desconocido | Por confirmar |

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

- [ ] Conseguir todas las redes sociales de Francisco (ver tabla arriba)
- [ ] Conseguir email de contacto para colaboraciones
- [ ] Cargar todas las fotos (`hero.jpg`, `sobre-mi.jpg`, `galeria-1` al `6`)
- [ ] Construir el componente `Marcas.astro`
- [ ] Agregar navegación móvil (menú hamburguesa)
- [ ] Revisar y personalizar todos los textos con info real de Francisco
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

---

## Repositorio

- **GitHub:** https://github.com/IgnacioMorichetti/WEB-Francisco-Explora
- **Rama principal:** main
