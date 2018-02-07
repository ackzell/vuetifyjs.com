export default {
  header: 'Colores',
  headerText: 'Desde el inicio tienes acceso a todos los colores en el [Material Design spec](https://material.io/guidelines/style/color.html) a través de **stylus** y **javascript**. Estos valores pueden ser utilizados dentro de tus hojas de estilo, tus archivos de componentes y los componentes prefabricados usando el sistema de **clases de colores**.',
  classesHeader: 'Clases',
  classesText: 'Cada color del spec se convierte en una variante de **background** y **text** para aplicar estilos en tu aplicación a través de una clase, por ejemplo: `<div class="red">` o `<span class="red--text">`. Estas clases de colores están definidas [aquí](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl).',
  classesText2: 'El color del texto también tiene soporte para variantes de **darken** y **lighten** si usas `text--{lighten|darken}-{n}`',
  javascriptPackHeader: 'Javascript color pack',
  javascriptPackText: 'Vuetify tiene un color pack de javascript que puedes importar y utilizar dentro de tu aplicación. Esto puede también ser usado para ayudarte a definir el tema de tu aplicación.',
  stylusPackHeader: 'Stylus color pack',
  stylusPackText: 'Aunque su uso es conveniente y práctico, el color pack aumenta el tamaño de tu css cerca de ~30kb. Algunos proyectos pueden sólo requerir las clases default que se crean durante el tiempo de ejecución cuando Vuetify arranca. Para deshabilitar esta característica tendrás que importar _manualmente_ y hacer el build del archivo principal **stylus**. Esto requerirá el [stylus loader](https://github.com/shama/stylus-loader) y un archivo `.styl`.',
  stylusPackText2: 'Tu archivo `main.styl` creado tendrá que estar incluido en tu proyecto..',
  alert: '**Debes** configurar tu setup de webpack para que utilice `stylus`. Si estás usando una [plantilla prefabricada](/getting-started/quick-start#new-applications) esto ya está hecho por tí.',
  stylusPackText3: 'Esto también se puede lograr dentro de tu archivo principal **App.vue**. Ten en cuenta que dependiendo del setup de tu proyecto, esto _incrementará_ los tiempos de build porque cada vez que tu archivo sea actualizado, los archivos de stylus tendrán que ser regenerados.',
  colorHeader: 'Colores Material',
  colorText: 'A continuación hay una lista de la paleta de colores de MAterial agrupada por color primario',
  toc: [
    {
      text: 'Introducción',
      href: 'introduccion'
    },
    {
      text: 'Clases',
      href: 'clases'
    },
    {
      text: 'Javascript color pack',
      href: 'javascript-color-pack'
    },
    {
      text: 'Stylus color pack',
      href: 'stylus-color-pack'
    },
    {
      text: 'Colores Material',
      href: 'colores-material'
    }
  ]
}
