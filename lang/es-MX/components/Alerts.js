export default {
  header: 'Alert',
  headerText: 'El componente `v-alert` se utiliza para transmitir información importante al usuario. Viene en 4 variantes: **success**, **info**, **warning** y **error**. Éstas tienen íconos default asignados que pueden ser cambiados y representar diferentes acciones.',
  components: ['v-alert'],
  examples: [{
    contextual: {
      header: 'Contextual'
    },
    closable: {
      header: 'Cerrable',
      desc: 'Haciendo uso de `v-model` puedes controlar el estado del Alert. Si no quieres asignar un v-model y sólo mostrar la alerta, puedes simplemente asignar la prop `value`.'
    },
    icon: {
      header: 'Ícono personalizado / Sin ícono',
      desc: 'Puedes fácilmente asignar un ícono personalizado o quitarlo por completo.'
    },
    transition: {
      header: 'Transición al mostrar',
      desc: 'Puedes aplicar una transición personalizada para cuando se muestra/oculta la alerta.'
    },
    outline: {
      header: 'Contorno',
      desc: 'Las alertas _outline_ heredan los bordes del color aplicado actualmente.'
    }
  }],
  props: {
    dismissible: 'Especifica que la alerta puede ser cerrada',
    icon: 'Asigna un ícono específico',
    outline: 'La alerta tendrá un contorno ',
    type: 'Especifica una alerta **success**, **info**, **warning** o **error**. Utiliza el color contextual y el ícono predefinidos.'
  }
}
