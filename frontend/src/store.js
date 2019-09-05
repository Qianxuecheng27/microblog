import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    user: Object
  },
  mutations: {
    user (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({ commit }, user) {
      commit('user', user)
    }
  }
})
