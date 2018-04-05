export default {
  header: 'Subheaders',
  headerText: 'El componente `v-subheader` se usa para separar secciones de listas.',
  components: ['v-subheader'],
  examples: [{
    list: {
      header: 'Subheaders de listas',
      desc: 'Los subheaders funcionan genial con las listas para describir la información que hay debajo.'
    },
    grid: {
      header: 'Subheaders de grids',
      desc: 'Un subheader puede agregar contexto a lo que el usuario está viendo.'
    },
    menu: {
      header: 'Subheaders de menús',
      desc: 'Utilizar un subheader puede ayudar a separar los diferentes tipos de acciones.'
    }
  }],
  props: {
    inset: 'Añade indentación (72px)'
  }
}
