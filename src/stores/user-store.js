import { ref } from 'vue'
import { defineStore } from 'pinia'

import Users from "../services/api/users/users.js";


export const useUsersStore = defineStore('usersStore', () => {
  const users = ref([])

  const userData = ref(localStorage.getItem("email"))

  const logOut = () =>{
    userData.value = ''

    localStorage.setItem("email", '');
    localStorage.setItem("first", '')
    localStorage.setItem("last", '')
  }

  const createUser = async (data) => {
    try {

      userNewData.value = data

      console.log(userNewData.value)
    }
    catch (err) {
      console.log(err)
    }

  }

  const updateUser = async (data) => {
    try {
      await Users.update(data)
    }
    catch (err) {
      console.log(err)
    }

  }

  const userDelete = async (id) => {
    try {
      await Users.delete(id)
    }
    catch (err) {
      console.log(err)
    }

  }

  return {users, userDelete, createUser, updateUser, userData, logOut}
})
