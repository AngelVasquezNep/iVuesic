<template lang="pug">
  .nuxt-container
    Barra.Barra
    Buscador.Buscador
    nuxt.Nuxt
    Reproductor.Reproductor
</template>

<script>
import Barra from '~/components/Barra.vue'
import Reproductor from '~/components/Reproductor.vue'
import Buscador from '~/components/Buscador.vue'

  export default {
    name: 'nuxt-container',
    components: { Barra , Reproductor, Buscador }
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
  height: 100vh;
  display: grid;
  grid-template-areas: ' barra buscador' ' barra nuxt' ' reproductor reproductor ';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr;
}

.Nuxt {
   grid-area: nuxt;
}

.Buscador {
   grid-area: buscador;
}

.Barra {
  grid-area: barra;
}

.Reproductor {
  grid-area: reproductor;
}

@media screen and (max-width: 768px) {
  .nuxt-container {
    grid-template-areas: ' barra buscador' ' nuxt nuxt' ' reproductor reproductor ';
  }
}

</style>
