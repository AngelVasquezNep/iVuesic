<template lang="pug">
  .Albums(v-if="track.preview_url", :class="{'active' : track.id === $store.state.selectedTrack.id }")
    .play
      img(:src="track.album.images[0].url")
    .description
      p.title {{ track.name }}
      button.btn(@click="selectedTrack") 🎧
      //- button.btn 🌎
</template>

<script>
  export default {
    name: 'Albums',
    props: ['track'],
    methods: {
      selectedTrack () {
        this.$store.commit('selectedTrack', this.track)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Albums {
    display: grid;
    width: 150px;
    box-shadow: 0 0 1px 1px #a7a7a7;
    margin: 10px;
    .play {
      box-shadow: 0 0 1px 1px #a7a7a7;
      height: 100%;
      display: grid;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .btn {
      padding: 10px 30px;
    }
    .title {
      margin: 5px;
      margin-top: 10px
    }
  }

  .active {
    box-shadow: 0 0 4px 6px #42E0C3;
  }
</style>
