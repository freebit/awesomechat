<template>
  <div class="chat-message" :class="author">
    <div class="chat-message-wrapper">
      <div class="chat-message-header">
        <div class="author">{{ data.author }}</div>
        <div class="time">{{ data.time }}</div>
      </div>
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
  // @import './styles/variables';

  .chat-message
    $border_radius = 8px

    display flex
    position relative
    height auto
    margin-bottom 8px

    &.im
      justify-content flex-end

    &-wrapper
      display flex
      flex-direction column
      width 70%
      padding 8px

      .im &
          background-color palegreen
          border-top-left-radius $border_radius
          border-bottom-left-radius $border_radius

      .bot &
          background-color #cacaca
          border-top-right-radius $border_radius
          border-bottom-right-radius $border_radius

    &-header
      display flex
      position relative
      margin-bottom 4px
      align-items baseline
      padding 2px 4px
      margin-left -8px
      margin-right -8px

      .im &
        // border-top-left-radius $border_radius - 2
        background-color lighten(palegreen, 5)
      .bot &
        background-color lighten(#cacaca, 5)
        // border-top-right-radius $border_radius - 2

      .author
        font-size .7em
        margin-right 8px
      .time
        font-size .5em
        font-weight bold
    .text
      font-size .8em
      line-height 1.2
      font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

</style>
