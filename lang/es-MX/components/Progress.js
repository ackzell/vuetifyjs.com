export default {
  header: 'Progress',
  headerText: 'Los componentes `v-progress-circular` y `v-progress-linear` se usan para transmitir datos visualmente a los usuarios. Pueden también representar una cantidad indeterminada, como un procesamiento o una carga (loading). Estos componentes contienen un slot que está centrado dentro del componente que lo contiene.',
  components: ['v-progress-circular', 'v-progress-linear'],
  examples: [{
    circularDefault: {
      header: 'Default',
      desc: 'Por default, el progreso circular utiliza el _secondary color_ de la aplicación..'
    },
    circularColored: {
      header: 'Coloreado',
      desc: 'Puedes aplicar colores alternativos.'
    },
    circularIndeterminate: {
      header: 'Indeterminado',
      desc: 'Un _progress circular_ está animado continuamente.'
    },
    circularSizeAndWidth: {
      header: 'Tamaño y ancho',
      desc: 'El componente _progress circular_ puede variar en tamaño y ancho.'
    },
    circularRotate: {
      header: 'Rotado',
      desc: 'El origen del _progress_ puede ser rotado..'
    },
    linearDeterminate: {
      header: 'Determinado',
      desc: 'El _progress linear_ puede tener un estado determinado modificado por `v-model`.'
    },
    linearIndeterminate: {
      header: 'Indeterminado',
      desc: 'Al igual que con el componente circular, el _progress linear_ tiene un estado indeterminado.'
    },
    linearBuffer: {
      header: 'Buffer',
      desc: 'Un estado _buffer_ representa dos valores simultáneamente. El valor principal es controlado por el modelo, mientras que el buffer es controlado por una prop `buffer-value`.'
    },
    linearQueryIndeterminateAndDeterminate: {
      header: 'Query Indeterminado y Determinado',
      desc: 'El estado _query_ es controlado por un valor _truthy_ de `indeterminate` con la prop `query` en verdadero.'
    },
    linearCustomHeightAndContextualColors: {
      header: 'Altura personalizada y colores contextuales',
      desc: 'Una altura personalizada o un color contextual pueden ser aplicados a una barra de progreso. EL color principal de la barra es el color principal de tu aplicación.'
    },
    linearCustomColors: {
      header: 'Colores personalizados',
      desc: 'También puedes configurar el color usando las props `color` y `background-color`.'
    }
  }]
}
