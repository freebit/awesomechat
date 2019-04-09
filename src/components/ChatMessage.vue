<template>
  <div class="chat-message" :class="author">
    <div class="author">{{ data.author }}</div>
    <div class="text">{{ data.message }}</div>
  </div>
</template>

<script>
export default {
  name: 'chat-message',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    author () {
      return this.data.author
    }
  }
}
</script>

<style lang="stylus">
  .chat-message
    display flex
    position relative
    width 70%
    height auto
    flex-direction column

    &.me
      background-color lime

    &.bot
      background-color orange
</style>
