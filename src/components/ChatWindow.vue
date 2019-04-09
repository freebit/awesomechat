<template>
  <div class="chat-window">
    <chat-message v-for="(message, idx) in messages" :key="idx" :data="message"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChatMessage from './ChatMessage'

export default {
  name: 'chat-window',
  components: { ChatMessage },
  computed: {
    ...mapState(['messages'])
  }
}
</script>

<style lang="stylus">

</style>
