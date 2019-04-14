<template>
  <div id="app">
    <chat-settings/>
    <chat-window></chat-window>
    <chat-control></chat-control>
  </div>
</template>

<script>
import ChatWindow from './components/ChatWindow'
import ChatControl from './components/ChatControl'
import ChatSettings from './components/ChatSettings';

export default {
  name: 'app',
  components: {
    ChatWindow,
    ChatControl,
    ChatSettings
  },
  created() {
    this.$store.dispatch('initApp');
  }
}
</script>
<style lang="stylus">
  body
    margin 0
  #app
    display flex
    position relative
    width 320px
    height 100vh
    margin 0 auto
    flex-direction column
    overflow-x hidden
</style>
