// Paletas del sitio: la actual (modo claro) y la del modo oscuro.
// Cada una re-skinea la página completa en /bocetos sobreescribiendo las variables CSS.
// Orden de vars: selva (fondo), selva2, selva3, musgo (acento 1), hoja (hover acento 1),
//                tierra (acento 2), crema (texto), suave (texto suave).

export const paletas = [
  {
    slug: 'petroleo-y-arena',
    nombre: 'Petróleo y arena',
    descripcion: 'La actual del sitio (ajustada): fondo arena muy claro y brillante, y todo el acento — letras y líneas — en azul petróleo.',
    actual: true,
    vars: { selva: '#F8F4EB', selva2: '#FDFBF6', selva3: '#EBE5D6', musgo: '#2F6E66', hoja: '#224F49', tierra: '#41707A', crema: '#1E2B2A', suave: '#54696B' },
  },
  {
    slug: 'noche-y-siena',
    nombre: 'Noche y siena',
    descripcion: 'El modo oscuro del sitio (toggle en el navbar). Fondo carbón cálido + siena.',
    vars: { selva: '#211D18', selva2: '#2A251F', selva3: '#38312A', musgo: '#C25A37', hoja: '#A8492B', tierra: '#C99A66', crema: '#F0E9DE', suave: '#A99C8B' },
  },
]
