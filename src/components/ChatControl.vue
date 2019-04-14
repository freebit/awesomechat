<template>
  <div class="chat-control">
    <form @submit.prevent="messageSubmit">
      <input type="text" v-model="message" ref="input">
      <button type="submit" :disabled="!message">&#10000;</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import api from '../api'
export default {
  name: 'chat-control',
  watch: {
    'currentChannelIndex'(val) {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  },
  data: () => ({
    message: ''
  }),
  computed: {
    ...mapState(['currentChannelIndex'])
  },
  methods: {
    async messageSubmit () {
      this.$store.dispatch('addMessage', {
        author: 'im',
        message: this.message
      })

      const message = this.message
      this.message = ''
      this.$refs.input.focus()

      const resp = await api.sendMessage(message)
      setTimeout(() => {
        this.$store.dispatch('addMessage', {
          author: 'bot',
          message: resp
        });
      }, 2000)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus()
    });
  }
}
</script>

<style lang="stylus">
  .chat-control
    $control-height = 44px
    position relative
    form
      display flex
      position relative

      [type=text]
        position relative
        box-sizing border-box
        height $control-height
        flex 1
        padding 4px

        --webkit-appearance none

        border 1px solid lightsteelblue

      [type="submit"]
        $size = 32px;
        position relative
        display flex
        appearance none
        -webkit-appearance none
        -moz-appearance none

        width $control-height
        height $control-height
        padding 0

        justify-content center
        align-items center

        border 1px solid lightsteelblue
        border-left none
        background-color transparent

        font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        font-size 1.7em

        cursor pointer

        &[disabled] {
          cursor default
        }
</style>
