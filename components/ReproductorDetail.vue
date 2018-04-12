<template lang="pug">
  .ReproductorDetail
    span.mensaje(v-if="!selectedTrack.album")
      h2 Escucha las canciones más importantes del momento
    span.detalles(v-if="selectedTrack.album")
      .play
        img( :src="selectedTrack.album.images[0].url")
      .detail
        h2 {{ selectedTrack.name }}
        p 
          strong Artista(s): 
          | 
          p(v-for="artist in selectedTrack.artists") {{ artist.name }}
        p 
          strong Lanzamiento: 
          | {{ selectedTrack.album.release_date }}
        p 
          strong Album: 
          | {{ selectedTrack.album.name }}
        
        .botones-accion
          button.btn 🎧
          button.btn 🌎
</template>

<script>
import { mapState } from 'vuex'

  export default {
    name: 'ReproductorDetail',
    computed: {
      ...mapState(['selectedTrack'])
    }
  }
</script>

<style lang="scss" scoped>
  .ReproductorDetail .detalles{
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    box-shadow: 0 0 1px 1px #a7a7a7;
    transition: .3 all linear;
    
    @media screen and (max-width: 1100px) {
      grid-template-columns: 200px 1fr;
    }

    .play {
      box-shadow: 0 0 1px 1px #a7a7a7;
      height: 100%;
      display: grid;
      align-items: center;
      img {
        width: 100%;
      }
    }

    .detail {
      text-align: start;
      margin: 10px;
    }
    .detail > * {
      margin: 4px
    }

    .btn {
      background-color: #fff;
    }

  }

.ReproductorDetail{
    display: grid;
    align-items: center;

    .mensaje {
      font-size: 2em;
    }
}




</style>
