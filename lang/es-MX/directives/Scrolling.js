export default {
  header: 'Directiva de desplazamiento (scrolling)',
  headerText: 'La directiva `v-scroll` te permite proveer callbacks cuando la ventana o un elemento específico son desplazados.',
  components: ['v-scroll'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'El comportamiento default es asignarla a la ventana. Si no se necesita ninguna configuración adicional, puedes simplemente pasarle una función callback.',
      uninverted: true
    },
    options: {
      header: 'Desplazamiento con opciones',
      desc: 'Para una implementación más fina, puedes asignar al objetivo (target) un listener del evento `scroll`',
      uninverted: true
    }
  }],
  params: [{
    'v-scroll': [
      {
        name: 'callback',
        type: 'Function',
        default: 'null'
      },
      {
        name: 'target',
        type: 'String',
        default: 'null',
        desc: 'El elemento del DOM al que se asigna el evento `scroll`'
      },
      {
        name: 'debounce',
        type: 'Object',
        default: '{ _passive_: **true** }',
        desc: 'Las opciones que se le deben pasar al event listener del objetivo asignado'
      }
    ]
  }]
}
