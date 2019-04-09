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
  #app
    width 320px
</style>
