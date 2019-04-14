<template>
  <div class="chat-settings" :class="$store.state.openSettingsPanel ? 'open' : 'close'">
    <div class="chat-settings-control" @click="$store.dispatch('toggleSettings')">
      <span class="open-icon">&#9776;</span>
      <span class="close-icon">&#10005;</span>
    </div>
    <channel-settings/>
  </div>
</template>

<script>
import ChannelSettings from './ChannelSettings';

export default {
  name: 'chat-settings',
  components: {
    ChannelSettings
  },
  data: () => ({})
}
</script>

<style lang="stylus">
  .chat-settings
    $bg-color-main = #cacaca
    $control-size = 44px

    display flex
    position absolute;
    box-sizing border-box
    width 100%
    height 100%
    top 0
    left -100%
    will-change transform

    padding 0 8px
    z-index 2

    background-color rgba($bg-color-main, 1)

    transition transform ease .3s .0s

    &.open
      transform: translateX(100%)

    &.close
      transform: translateX(0%)

    &-control
      display flex
      position absolute
      width $control-size
      height $control-size
      top 0
      right -($control-size)
      background-color rgba($bg-color-main, 1)

      justify-content center
      align-items center

      font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
      font-size 1.3em

      cursor pointer
      z-index 3
      will-change right
      transition right ease .3s .0s

    &.open &-control
      right 0
      .open-icon
        display none
      .close-icon
        display block

    &.close &-control
      right -($control-size)
      .open-icon
        display block
      .close-icon
        display none
</style>
