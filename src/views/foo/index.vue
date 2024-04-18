<script setup>
import { useGetUserListApi } from "../../api/useGetUserListApi.js";

const {
  userList,
  getUserList
} = useGetUserListApi()
import { useApiCancel } from "../../hooks/useApiCancel/index.js";


const setUserList = useApiCancel(getUserList)
const setUsersList = () => {
  setUserList()
}
const setSelectUserList = useApiCancel(getUserList)

</script>

<template>
  <div>
    <button @click="setUsersList">请求</button>
    <button @click="setSelectUserList">请求</button>
    <ul>
      <li v-for="user in userList">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>