<template lang="pug">
  .ReproductorDetail
    span.mensaje(v-if="!selectedTrack.album")
      h2 Escucha las canciones más importantes del momento
    span.detalles(v-if="selectedTrack.album", :style="{ backgroundImage: 'url(' + selectedTrack.album.images[0].url + ')' }")
      .play
        img( :src="selectedTrack.album.images[0].url")
      .detail
        h2 Title: {{ selectedTrack.name }}
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
    margin: 10px;

    @media screen and (max-width: 1100px) {
      grid-template-columns: 200px 1fr;
    }
    @media screen and (max-width: 544px) {
      grid-template-columns: 1fr;
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
      height: 100%;
      background: rgba(0,0,0,.6);
      color: #fff;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding-left: 30px;
    }
    .detail > * {
      margin: 4px
    }

  }

.ReproductorDetail{
    display: grid;
    align-items: center;

    .detalles {
      background-position: center;
      background-size: cover;
    }

    .mensaje {
      font-size: 2em;
    }
    @media screen and (max-width: 775px) {
      .mensaje {
        font-size: 1em;
      }
    }
    @media screen and (max-width: 544px) {
      .play {
        display: none !important;
      }
    }
}




</style>
