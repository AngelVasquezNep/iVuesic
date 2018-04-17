<template lang="pug">
  .albums
    h2(v-if="(!track.tracks || !track.tracks.total) && !loading") ¡La música es el mejor invento del universo! Sigue buscando
    .spinner
      Spinner(v-if="loading")
    span(v-if="track && track.tracks")
      Album(v-for="(t, index) in track.tracks.items", :key="index", :track = 't')
</template>

<script>
import Spinner from '~/components/Spinner.vue'
import Album from '~/components/Album.vue'
import { mapState } from 'vuex'
export default {
  name: 'Albums',
  components: { Album , Spinner},
  computed: {
    ...mapState(['track', 'loading', 'selectedTrack'])
  }
}
</script>

<style lang="sass" scoped>
.albums 
  // overflow-y: scroll
  span
    display: flex
    flex-wrap: wrap
    justify-content: center
  h2
    font-size: 4em
    color: #FF006B

  .spinner
    width: 100%


</style>

