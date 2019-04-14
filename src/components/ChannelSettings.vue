<template>
  <div class="channel-settings">
    <h3 class="channel-settings-title">Чаты</h3>
    <ul class="channel-settings-list">
      <li v-for="(channel, idx) in $store.getters.channelList" :key="idx" @click="onClick(idx)">
        <a href="#">{{ channel.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'channel-settings',
  methods: {
    onClick(index) {
      this.$store.dispatch('setCurrentChannel', index);
      this.$store.dispatch('closeSettings');
    }
  }
}
</script>

<style lang="stylus">
  .channel-settings
    display flex
    flex-direction column
    position relative
    width 100%
    font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

    &-title
      position relative

    &-list
      position relative
      margin 0
      padding 0
      list-style none

      li
        display flex
        padding 8px
        margin-bottom 8px
        background-color rgba(#ececec, .3)
        border-radius 8px

        a
          font-size .8em

</style>
