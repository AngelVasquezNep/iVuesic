<template lang="pug">
  .nuxt-container
    Barra.Barra
    nuxt.Nuxt
    Reproductor.Reproductor
</template>

<script>
import Barra from '~/components/Barra.vue'
import Reproductor from '~/components/Reproductor.vue'

  export default {
    name: 'nuxt-container',
    components: { Barra , Reproductor }
  }
</script>

<style lang='scss'>
body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  margin: 0;
  margin: 0;
}

.center {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.nuxt-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: ' barra nuxt' ' reproductor reproductor ';
  grid-template-rows: 1fr 75px;
  grid-template-columns: 200px 1fr;
}

.Nuxt {
   grid-area: nuxt;
}

.Barra {
  grid-area: barra;
}

.Reproductor {
  grid-area: reproductor;
}


</style>
