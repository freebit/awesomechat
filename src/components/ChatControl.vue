<template>
  <div class="chat-control">
    <form @submit.prevent="messageSubmit">
      <input type="text" v-model="message">
      <button type="submit">send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'chat-control',
  data: () => ({
    message: ''
  }),
  methods: {
    messageSubmit () {
      alert(this.message)
    }
  }
}
</script>
