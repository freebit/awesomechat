import Vue from 'vue'
import Vuex from 'vuex'
import Message from '../classes/Message.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    ADD_MESSAGE (store, message) {
      store.messages.push(message)
    }
  },
  actions: {
    addMessage ({ commit }, { message, author }) {
      commit('ADD_MESSAGE', new Message(message, author))
    }
  }
})
