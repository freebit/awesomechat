<template>
  <div class="chat-message">{{ data.message }}</div>
</template>

<script>
export default {
  name: 'chat-message',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
