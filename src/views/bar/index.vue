<script setup>
import { useGetUserListApi } from "@/api/useGetUserListApi.js";
import { createCancelableApi } from "@/api/createCancelableApi.js";

const {
  userList,
  setUserList
} = useGetUserListApi()

const setUsers = createCancelableApi(setUserList)

defineExpose({
  setUserList: setUsers
})
</script>

<template>
  <div>
    <button @click="setUserList">我被人包围了</button>
    <ul>
      <li v-for="user in userList">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>