export default {
  header: 'Display',
  headerText: 'Los auxiliares de display te ayudan a controlar cómo muestras tu contenido. Esto incluye mostrarlos condicionalmente basados en el área visible actual (viewport) o el tipo de elemento actual que se debe presentar.',
  toc: [
    {
      text: 'Introducción',
      href: 'introducion'
    },
    {
      text: 'Visibilidad',
      href: 'visibilidad'
    },
    {
      text: 'Display',
      href: 'display'
    },
    {
      text: 'Ejemplos',
      href: 'ejemplos'
    }
  ],
  visibilityHeader: 'Visibilidad',
  visibilityText: 'Mostrar condicionalmente un elemento basado en el **viewport** actual. Estas clases pueden ser aplicadas usando el siguiente formato: `hidden-{breakpoint}-{condición}`',
  breakpointText: 'El _breakpoint_ indica el tamaño del viewport:',
  breakpoints: [
    '`xs` - dispositivos extra pequeños',
    '`sm` - dispositivos pequeños',
    '`md` - medianos',
    '`lg` - grandes',
    '`xl` - extra grandes'
  ],
  conditionText: 'La _condición_ aplica la clase basada en:',
  conditions: [
    '`only` - esconde el elemento sólamente de los breakpoints específicos (`xs` hasta `xl`)',
    '`and-down` - esconde el elemento en el breakpoint específico y hacia abajo (`sm` hasta `lg`)',
    '`and-up` - esconde el elemento en el breakpoint específico y hacia arriba (`sm` hasta `lg`)'
  ],
  displayHeader: 'Display',
  displayText: 'Especifica la propiedad `display` de los elementos. Estas clases pueden ser aplicadas utilizando el siguiente formato: `d-{display}`.',
  displays: [
    '`d-inline-flex` - la propiedad display queda definida como `inline-flex`',
    '`d-flex` - la propiedad display queda definida como `flex`',
    '`d-inline-block` - la propiedad display queda definida como `inline-block`',
    '`d-block` - la propiedad display queda definida como `block`',
    '`d-inline` - la propiedad display queda definida como `inline`'
  ]
}
