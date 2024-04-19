<script setup>
import Foo from '@/views/foo/index.vue'
import Bar from '@/views/bar/index.vue'
import { ref } from "vue";

const bar = ref()
const onTrigger = () => {
  bar?.value?.setUserList()
}
</script>

<template>
  <Foo @trigger="onTrigger" />
  <Bar ref="bar" />
</template>

<style scoped>

</style>