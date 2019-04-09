<template>
  <div class="chat-message" :class="author">
    <div class="chat-message-wrapper">
      <div class="author">{{ data.author }}</div>
      <div class="text">{{ data.message }}</div>
    </div>
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
    height auto
    margin-bottom 8px

    &.me
      justify-content flex-end

    &-wrapper
      display flex
      flex-direction column
      width 70%
      padding 4px

      .me &
          background-color palegreen
          border-top-left-radius 8px
          border-bottom-left-radius 8px

      .bot &
          background-color #a2a2a2
          border-top-right-radius 8px
          border-bottom-right-radius 8px

      .author
        font-size .8em
        margin-bottom 4px

</style>
