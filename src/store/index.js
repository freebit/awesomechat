import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [
      { autor: 'bot', message: 'Привет! Можешь задавать вопросы' },
      { autor: 'me', message: 'Привет!' }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
