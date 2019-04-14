<template>
  <div class="chat-window">
    <div class="chat-window-title"><span>{{ $store.getters.currentChannelTitle }}</span></div>
    <div class="chat-window-messages">
      <transition-group name="fade">
        <chat-message v-for="(message, idx) in $store.getters.currentChannelMessages" :key="message + idx" :data="message"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage';

export default {
  name: 'chat-window',
  components: {
    ChatMessage
  }
}
</script>

<style lang="stylus">

  .chat-window
    display flex
    position relative
    flex-direction column
    flex 1
    width 100%
    height 500px
    min-height 120px
    background-color #e5e5e5

    overflow-x hidden

    &-title
      display flex
      position absolute
      box-sizing border-box
      height 44px
      width 100%
      right 0
      padding-left 44px
      padding-right 16px
      align-items center
      justify-content center
      background-color rgba(#cacaca, .3)

    &-messages
      display flex
      position absolute
      flex-direction column-reverse
      overflow auto
      width 100%
      height calc(100% - 45px)
      bottom 0
      left 0

  .fade-enter-active, .fade-leave-active
    transition opacity .5s
  .fade-enter, .fade-leave-to
    opacity 0
</style>
