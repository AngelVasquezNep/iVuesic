<template lang="pug">
  form.Buscador( @submit.prevent="submit")
    
    input(type="search", 
          v-model="busqueda",
          placeholder="Busca tu música favorita",
          required 
          )
    
    input.btn(type="submit", value="Buscar")
    //- router-link(to="about") about
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Buscador',
  data () {
    return {
      busqueda: ''
    }
  },  
  methods: {
    submit () {
      this.getTrackById({ track: this.busqueda })
      this.busqueda = ''
    },
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="sass">
  .Buscador
    display: grid
    grid-template-columns: 1fr auto
    grid-gap: 10px
    justify-content: inherit
    input[type="search"]
      border: none
      border-radius: 5px
      border: 1px solid #526488
      outline: none
      &:focus
        box-shadow: 0 0 0px 2px #526488
    .btn
      margin: 0
      &:focus
        box-shadow: 0 0 0px 2px #526488
      
</style>

