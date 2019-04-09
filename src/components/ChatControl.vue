<template>
  <div class="chat-control">
    <form @submit.prevent="messageSubmit">
      <input type="text" v-model="message">
      <button type="submit" :disabled="!message">send</button>
    </form>
  </div>
</template>

<script>
// import api from '../api'
export default {
  name: 'chat-control',
  data: () => ({
    message: ''
  }),
  methods: {
    messageSubmit () {
      this.$store.dispatch('addMessage', { message: this.message, author: 'me' })
      // api.sendMessage(this.message).then((data) => {
      //   console.log('response data :', data)
      // })
      setTimeout(() => {
        this.$store.dispatch('addMessage', { message: 'Hi!', author: 'bot' })
      }, 3000)
    }
  }
}
</script>
