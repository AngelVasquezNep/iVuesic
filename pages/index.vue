<template lang="pug">
  section.index-container.center
    Buscador
    ReproductorDetail
    Albums
</template>

<script>
import ReproductorDetail from '~/components/ReproductorDetail.vue'
import Albums from '~/components/Albums.vue'
import Buscador from '~/components/Buscador.vue'
import Spinner from '~/components/Spinner.vue'

export default {
  name: 'Index',
  components: { ReproductorDetail, Albums, Buscador, Spinner },
  data () {
    return {

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
  margin: 10px
  align-items: initial
  grid-gap: 5px
  display: grid
  grid-template-rows: 37px auto 300px 
  justify-content: inherit;

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
  &:active
    transform: scale(.95)


</style>
