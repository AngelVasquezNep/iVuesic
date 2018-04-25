<template lang="pug">
  .barra.center
    img.logo(src="~/assets/logo.png")
    .secciones
      h2 Title: {{ $store.state.selectedTrack.name || 'Descubre' }} 
      h3 Artistas: 
      p(v-if="$store.state.selectedTrack.name", v-for="artist in $store.state.selectedTrack.artists") {{ artist.name }}
    .secciones
      h3 Popularidad
      p {{ $store.state.selectedTrack.popularity || 0}} / 100
    .albumSelected(v-if="$store.state.selectedTrack && $store.state.selectedTrack.album")
      img(:src="$store.state.selectedTrack.album.images[0].url")

    //- .secciones
    //-   .popularity
</template>

<script>
  export default {
    name: 'Barra'
  }
</script>

<style lang="scss" scoped>
  .barra {
    // align-items: flex-start;
    box-shadow: 1px -3px 1px 1px #a7a5a5;
    justify-content: inherit;
    overflow: hidden;
    .logo {
      margin: 10px auto;
      width: 90%;
      animation: bailar infinite 2s;
      @keyframes bailar {
        50% {
          transform: translateY(-5px)
        }
      }
    }

    img {
      width: 90%;
    }

    .popularity {
      border: 1px solid red;
      height: 100px;
    }

  }

  @media screen and (max-width: 768px){
    .secciones , .albumSelected {
      display: none;
    }
    .logo {
      margin: 0 auto !important;
    }
  }

</style>
