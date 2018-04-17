<template lang="pug">
  section.index-container.center
    ReproductorDetail
    Albums
</template>

<script>
import ReproductorDetail from '~/components/ReproductorDetail.vue'
import Albums from '~/components/Albums.vue'
import Spinner from '~/components/Spinner.vue'

export default {
  name: 'Index',
  components: { ReproductorDetail, Albums, Spinner },
  head () {
    return {
      title: this.$store.state.selectedTrack.name ? this.$store.state.selectedTrack.name : 'iVuesic'
    }
  }
}
</script>

<style lang="sass">
.center 
  display: grid
  justify-content: center
  align-items: center
  text-align: center

.index-container
  // margin: 10px
  align-items: initial
  grid-gap: 5px
  display: grid
  // grid-template-rows: auto 300px 
  justify-content: inherit;
  overflow-y: scroll

.btn
  text-decoration: none
  padding: 10px 20px
  border: 1px solid #1f1f1f
  border-radius: 5px
  margin: 5px
  transition: all .1s
  outline: none
  background-color: #fff
  &:hover 
    color: #fff;
    background-color: #42E0C3
    cursor: pointer
  &:active
    transform: scale(.95)


</style>
