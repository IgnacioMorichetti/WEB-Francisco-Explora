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
- **Estilo buscado:** diario de viaje, cuaderno de explorador — personal, cálido y aventurero

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
    Hero.astro
    SobreMi.astro
    Desafio.astro
    Galeria.astro
    Redes.astro
    Contacto.astro
    Navbar.astro
  layouts/
    Base.astro
public/
  images/
```

---

## Identidad visual

**Estética:** Explorador terroso — diario de viaje, cuaderno de explorador

| Elemento | Valor |
|----------|-------|
| Fondo principal | `#FAF7F2` (crema) |
| Acento 1 | `#8B5E3C` (marrón) |
| Acento 2 | `#4A7C59` (verde oliva) |
| Tipografía títulos | Serif (ej: Playfair Display, Lora) |
| Tipografía cuerpo | Sans-serif (ej: Inter, DM Sans) |
| Vibe | National Geographic · diario de explorador · humano y cercano |

---

## Estructura del sitio

**Tipo:** Una sola página con scroll continuo

| Sección | Importancia | Descripción |
|---------|-------------|-------------|
| Hero | ★★★★★ | Presentación impactante de Francisco, foto protagonista, frase que lo define |
| Sobre mí | ★★★★★ | Quién es Francisco, sus valores, su filosofía de vida |
| El Desafío (Ironman) | ★★★★★ | El Medio Ironman 70.3 — el camino, el entrenamiento, la meta a finales de junio 2026 |
| Galería | ★★★★☆ | Fotos de sus aventuras y entrenamientos |
| Redes + Contacto | ★★★★★ | Links a Instagram y otras redes. Info de contacto para colaboraciones |

**Idea futura (no incluida ahora):** Bitácora / Blog — Francisco podría escribir actualizaciones de sus aventuras y entrenamiento. A implementar en una segunda etapa si Ignacio y Francisco lo desean.

---

## Historial de decisiones y cambios

| Fecha | Descripción |
|-------|-------------|
| 2026-06-05 | Inicio del proyecto. Creación del repositorio Git y GitHub. README y documentación base. |
| 2026-06-05 | Definición de stack (Astro + Tailwind), identidad visual (terroso), estructura (1 sola página) y secciones. |

---

## Próximos pasos

1. Inicializar el proyecto Astro en la carpeta del repo
2. Configurar Tailwind CSS
3. Crear el layout base (`Base.astro`) con la paleta de colores
4. Desarrollar la sección Hero
5. Ir construyendo sección por sección
6. Ver referencia visual de project226.xyz en el navegador para tomar más inspiración

---

## Repositorio

- **GitHub:** https://github.com/IgnacioMorichetti/WEB-Francisco-Explora
- **Rama principal:** main
