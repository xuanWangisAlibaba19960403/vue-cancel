<script setup>
const emit = defineEmits(['trigger'])

</script>

<template>
  <button @click="emit('trigger')">我调用其他组件的请求函数</button>
</template>

<style scoped>

</style>