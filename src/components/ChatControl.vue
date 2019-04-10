<template>
  <div class="chat-control">
    <form @submit.prevent="messageSubmit">
      <input type="text" v-model="message">
      <button type="submit" :disabled="!message">send</button>
    </form>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'chat-control',
  data: () => ({
    message: ''
  }),
  methods: {
    async messageSubmit () {
      this.$store.dispatch('addMessage', { message: this.message, author: 'im' })

      const message = this.message
      this.message = ''

      const resp = await api.sendMessage(message)
      console.log('response data :', resp)
      setTimeout(() => {
        this.$store.dispatch('addMessage', { message: resp, author: 'bot' })
      }, 2000)
    },
    fakeMessageSubmit () {
      this.$store.dispatch('addMessage', { message: this.message, author: 'im' })
      this.message = ''
      setTimeout(() => {
        this.$store.dispatch('addMessage', { message: 'Hi!', author: 'bot' })
      }, 2000)
    }
  }
}
</script>

<style lang="stylus">
  .chat-control
    position relative
    form
      display flex
      position relative

      [type=text]
        position relative
        height 32px
        flex 1
        padding 4px
</style>
