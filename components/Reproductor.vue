<template lang="pug">
  .reproductor.center
    h2(v-if="!$store.state.selectedTrack.preview_url") Reproductor
    audio(v-else,:src="$store.state.selectedTrack.preview_url", controls, autoplay)
</template>

<style lang="scss" scoped>
  .reproductor {
    box-shadow: 0 0 5px 2px #a7a5a5;
    justify-content: inherit;
    audio {
      margin: 0 auto;
      width: 100%;
    }
  } 
</style>

