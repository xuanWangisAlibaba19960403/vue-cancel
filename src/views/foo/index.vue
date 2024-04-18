<script setup>
import { useGetUserListApi } from "../../api/useGetUserListApi.js";

const {
  userList,
  getUserList
} = useGetUserListApi()
import { useApiCancel } from "../../hooks/useApiCancel/index.js";


const setUserList = useApiCancel(getUserList)

const setSelectUserList = getUserList

</script>

<template>
  <div>
    <button @click="setUserList">我被人包围了</button>
    <button @click="setSelectUserList">那我没有</button>
    <ul>
      <li v-for="user in userList">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>