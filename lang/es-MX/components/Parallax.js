export default {
  header: 'Parallax',
  headerText: 'El componente `v-parallax` crea un efecto 3D que hace que la imagen parezca deslizarse más lento que la ventana.',
  components: ['v-parallax'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Un parallax causa un cambio en la imagen del fondo cuando el usuario se desplaza hacia arriba o abajo en la pantalla.'
    },
    content: {
      header: 'Con contenido',
      desc: 'También puedes colocar cualquier contenido dentro del parallax. Esto te permite utilizarlo como un _hero image_.'
    },
    customHeight: {
      header: 'Altura personalizada',
      desc: 'Puedes especificar una altura personalizada en un parallax. Toma en cuenta que podrías romper el efecto si la imagen no tiene el tamaño adecuado.'
    },
    jumbotron: {
      header: 'Jumbotron',
      desc: 'El parallax puede tener el efecto deshabilitado para ser usado como un **jumbotron** estándar.'
    }
  }],
  props: {
    alt: 'Agrega una propiedad _alt_ a la imagen en el parallax',
    src: 'La imagen parallax'
  }
}
