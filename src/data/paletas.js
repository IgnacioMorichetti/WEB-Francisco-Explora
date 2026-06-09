// Bocetos de color para mostrarle a Francisco.
// Cada paleta re-skinea la página completa sobreescribiendo las variables CSS.
// Orden de vars: selva (fondo), selva2, selva3, musgo (acento 1), hoja (hover acento 1),
//                tierra (acento 2), crema (texto), suave (texto suave).

export const paletas = [
  {
    slug: 'piedra-y-siena',
    nombre: 'Piedra y siena',
    descripcion: 'La actual del sitio. Fondo de piedra, siena quemado y nogal. Cálida y editorial.',
    actual: true,
    vars: { selva: '#DBD3C7', selva2: '#E8E2D7', selva3: '#CCC2B3', musgo: '#A8482B', hoja: '#8C3A22', tierra: '#5C4A38', crema: '#241E18', suave: '#6B5F50' },
  },
  {
    slug: 'arena-y-terracota',
    nombre: 'Arena y terracota',
    descripcion: 'Fondo arena más claro y cálido, con terracota viva. Más luminosa.',
    vars: { selva: '#F1ECE2', selva2: '#FBF8F2', selva3: '#E6DCCC', musgo: '#B85C38', hoja: '#9C4A2C', tierra: '#7C5A3C', crema: '#2C241D', suave: '#79695A' },
  },
  {
    slug: 'canon-rojizo',
    nombre: 'Cañón rojizo',
    descripcion: 'Piedra cálida con un siena más rojo, tipo cañón al sol.',
    vars: { selva: '#E3D8C9', selva2: '#EFE7DA', selva3: '#D2C4B0', musgo: '#B14228', hoja: '#95351F', tierra: '#5A4334', crema: '#241B15', suave: '#6E5F4F' },
  },
  {
    slug: 'piedra-y-nogal',
    nombre: 'Piedra y nogal',
    descripcion: 'Acento marrón nogal (menos naranja), apoyo siena. Más sobria y leñosa.',
    vars: { selva: '#DBD4C8', selva2: '#E9E3D9', selva3: '#CDC3B4', musgo: '#7A5740', hoja: '#5F4330', tierra: '#9C6A45', crema: '#221C16', suave: '#6A5E50' },
  },
  {
    slug: 'ladrillo-y-lino',
    nombre: 'Ladrillo y lino',
    descripcion: 'Fondo lino claro, acento ladrillo apagado. Tranquila y prolija.',
    vars: { selva: '#EDE6DA', selva2: '#F7F2E9', selva3: '#DDD2C0', musgo: '#AA4B34', hoja: '#8A3A28', tierra: '#6B5340', crema: '#28211B', suave: '#74665A' },
  },
  {
    slug: 'ocre-y-piedra',
    nombre: 'Ocre y piedra',
    descripcion: 'Acento ocre dorado en vez de rojo. Cálida, soleada, tipo trigo.',
    vars: { selva: '#E2DACD', selva2: '#EEE8DC', selva3: '#CDC2B0', musgo: '#B07A2E', hoja: '#8F6122', tierra: '#5E4A36', crema: '#241E16', suave: '#6B5E4D' },
  },
  {
    slug: 'tierra-tostada',
    nombre: 'Tierra tostada',
    descripcion: 'Fondo más tostado y profundo, siena intenso. Más oscura dentro de lo claro.',
    vars: { selva: '#D8CDBB', selva2: '#E6DDCD', selva3: '#C7B9A2', musgo: '#9E4A2A', hoja: '#82391F', tierra: '#594634', crema: '#221B13', suave: '#685B49' },
  },
  {
    slug: 'greige-y-oxido',
    nombre: 'Greige y óxido',
    descripcion: 'Fondo greige más neutro/gris, acento óxido. Moderna y serena.',
    vars: { selva: '#E3E0D7', selva2: '#EFEDE6', selva3: '#D2CDBF', musgo: '#A84F30', hoja: '#8B3F25', tierra: '#5B5044', crema: '#25211A', suave: '#6B6356' },
  },
  {
    slug: 'salvia-y-arcilla',
    nombre: 'Salvia y arcilla',
    descripcion: 'Terracota de protagonista con un apoyo verde salvia apagado. Un toque de naturaleza.',
    vars: { selva: '#E7E3D6', selva2: '#F2EEE3', selva3: '#D6CFBE', musgo: '#B05636', hoja: '#8F4226', tierra: '#6E7459', crema: '#262019', suave: '#70695A' },
  },
  {
    slug: 'petroleo-y-arena',
    nombre: 'Petróleo y arena',
    descripcion: 'Acento verde petróleo (frío) con terracota de apoyo. La más distinta y moderna.',
    vars: { selva: '#ECE6DA', selva2: '#F6F2E9', selva3: '#DBD0BE', musgo: '#2F6E66', hoja: '#224F49', tierra: '#B5663B', crema: '#232019', suave: '#6F6557' },
  },
  {
    slug: 'bruma-clara',
    nombre: 'Bruma clara',
    descripcion: 'La más clara y aireada. Casi blanca, acento siena. Minimalista y limpia.',
    vars: { selva: '#F4F1EA', selva2: '#FFFFFF', selva3: '#E8E2D5', musgo: '#9E5234', hoja: '#823F26', tierra: '#6B5644', crema: '#2A231C', suave: '#7A6E60' },
  },
  {
    slug: 'noche-y-siena',
    nombre: 'Noche y siena',
    descripcion: 'La versión oscura, por si a Francisco le gusta lo nocturno. Fondo carbón cálido + siena.',
    vars: { selva: '#211D18', selva2: '#2A251F', selva3: '#38312A', musgo: '#C25A37', hoja: '#A8492B', tierra: '#C99A66', crema: '#F0E9DE', suave: '#A99C8B' },
  },
]
