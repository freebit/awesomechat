<template>
  <div class="chat-window">
    <transition-group name="fade">
      <chat-message v-for="(message, idx) in messages" :key="message + idx" :data="message"/>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChatMessage from './ChatMessage'

export default {
  name: 'chat-window',
  components: { ChatMessage },
  computed: {
    ...mapState(['messages'])
  }
}
</script>

<style lang="stylus">

  .chat-window
    display flex
    position relative
    flex-direction column

    width 480px
    height 500px

    background-color #c0c0c0

  .fade-enter-active, .fade-leave-active
    transition opacity .5s
  .fade-enter, .fade-leave-to
    opacity 0
</style>
