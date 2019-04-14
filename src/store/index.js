import Vue from 'vue'
import Vuex from 'vuex'
import Message from '../classes/Message.js';
import Channel from '../classes/Channel.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [],
    currentChannelIndex: 0,
    openSettingsPanel: false
  },
  actions: {
    initApp({ commit }) {
      const initChannel = new Channel({
        title: 'Мировой Шушпанчик'
      });
      const demoChannel = new Channel({
        title: 'Шушпанчик для детей'
      });

      commit('ADD_CHANNEL', initChannel);
      commit('ADD_CHANNEL', demoChannel);
      commit('SET_CURRENT_CHANNELL', 0);
    },
    setCurrentChannel({ commit }, index) {
      commit('SET_CURRENT_CHANNELL', index);
    },
    addMessage({ commit }, { author, message }) {
      commit('ADD_MESSAGE', new Message({ author, message }));
    },
    openSettings({ commit }) {
      commit('OPEN_SETTINGS_PANEL');
    },
    closeSettings({ commit }) {
      commit('CLOSE_SETTINGS_PANEL');
    },
    toggleSettings({ state, commit }) {
      commit(`${state.openSettingsPanel ? `CLOSE` : `OPEN`}_SETTINGS_PANEL`);
    }
  },

  mutations: {
    ADD_CHANNEL(state, channel) {
      if (channel instanceof Channel) {
        state.channels.push(channel);
      }
    },
    SET_CURRENT_CHANNELL(state, index) {
      state.currentChannelIndex = index;
    },
    ADD_MESSAGE(state, message) {
      state.channels[state.currentChannelIndex].messages.push(message);
    },
    OPEN_SETTINGS_PANEL(state) {
      state.openSettingsPanel = true;
    },
    CLOSE_SETTINGS_PANEL(state) {
      state.openSettingsPanel = false;
    }
  },

  getters: {
    channelList: (state) => {
      return state.channels;
    },
    currentChannelMessages: (state) => {
      return state.channels[state.currentChannelIndex].messages;
    },
    currentChannelTitle: (state) => {
      return state.channels[state.currentChannelIndex].title;
    }
  }
})
