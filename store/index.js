import Vuex from 'vuex'
import searchTrack from '~/assets/searchTrack.js'

const createStore = () => {
  return new Vuex.Store({
    
    state: {
      track: {},
      selectedTrack: {},
      loading: false
    },
    
    mutations: {

      setTrack (state, track) {
        state.track = track
      },
      selectedTrack (state, payload) {
        state.selectedTrack = payload
      }
    },

    actions: {

      getTrackById (context, payload) {
        this.state.loading = true
        return searchTrack(payload.track)
        .then(res => {
          context.commit('setTrack', res)
          context.commit('selectedTrack', res.tracks.items[0] || {})
          this.state.loading = false
            return res
          })
      }
    }
  })
}

export default createStore