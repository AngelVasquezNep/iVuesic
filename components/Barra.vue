<template lang="pug">
  .barra.center
    img(src="~/assets/logo.png")
    .secciones
      h3 Sección 1
      p Elemento 1
      p Elemento 2
      p Elemento 3
    .secciones
      h3 Sección 2
      p Elemento 1
      p Elemento 2
      p Elemento 3
</template>

<script>
  export default {
    name: 'Barra'
  }
</script>

<style lang="scss" scoped>
  .barra {
    align-items: flex-start;
    box-shadow: 1px -3px 1px 1px #a7a5a5;
    justify-content: inherit;
      img {
        margin: 10px auto;
        width: 90%;
      }
  }
</style>
