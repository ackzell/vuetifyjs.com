export default {
  header: 'Selection controls',
  headerText: 'Los componentes _selection control_ permiten que un usuario seleccione opciones. Estos componentes **deben** ser utilizados con la prop `v-model` porque no mantienen su propio estado.',
  components: ['v-radio-group', 'v-radio', 'v-checkbox', 'v-switch'],
  examples: [{
    example: {
      header: 'Ejemplos default',
      desc: ''
    },
    checkboxesBoolean: {
      header: 'Checkboxes - Boolean',
      desc: ''
    },
    checkboxesArray: {
      header: 'Checkboxes - Array',
      desc: ''
    },
    checkboxesStates: {
      header: 'Checkboxes - States',
      desc: ''
    },
    checkboxesColors: {
      header: 'Checkboxes - Colors',
      desc: 'Puedes cambiar el color de los checkboxes si usas cualquiera de los colores prefabricados y los nombres contextuales en la prop `color`.'
    },
    checkboxesInlineTexfield: {
      header: 'Checkboxes - En línea con un campo de texto',
      desc: ''
    },
    radiosDefault: {
      header: 'Radios - Default',
      desc: 'Los Radio-groups son obligatorios por default. Puedes cambiar esto con la prop `mandatory`.'
    },
    radiosDirection: {
      header: 'Radios - Dirección',
      desc: 'Los radio-groups pueden ser representados ya sea en una fila o una columna, utilizando sus props respectivas. El default es columna'
    },
    radiosColors: {
      header: 'Radios - Colors',
      desc: 'Puedes cambiar el color de los radios si usas cualquiera de los colores prefabricados y los nombres contextuales en la prop `color`.'
    },
    switchesBoolean: {
      header: 'Switches - Boolean',
      desc: ''
    },
    switchesArray: {
      header: 'Switches - Array',
      desc: ''
    },
    switchesStates: {
      header: 'Switches - States',
      desc: ''
    },
    switchesColors: {
      header: 'Switches - Colors',
      desc: 'Puedes cambiar el color de los switches si usas cualquiera de los colores prefabricados y los nombres contextuales en la prop `color`.'
    }
  }],
  props: {
    column: 'Muestra los radio buttons en una columna',
    disabled: 'Mixins.Input.props.disabled',
    label: 'Mixins.Input.props.label',
    mandatory: 'Obliga la selección de un `v-radio`',
    name: 'Configura el atributo _name_ del componente',
    row: 'Muestra los radio buttons en una columna',
    indeterminate: 'Configura un estado indeterminado para el checkbox',
    inputValue: 'El valor referenciado en **v-model**',
    value: 'Configura el valor de la selección en el componente'
  }
}
