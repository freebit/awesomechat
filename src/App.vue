<template>
  <div id="app">
    <chat-window></chat-window>
    <chat-control></chat-control>
  </div>
</template>

<script>
import ChatWindow from './components/ChatWindow'
import ChatControl from './components/ChatControl'

export default {
  name: 'app',
  components: {
    ChatWindow,
    ChatControl
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
</style>
