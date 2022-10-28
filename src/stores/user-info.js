import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserInfoStore = defineStore('userInfo', () => {
  const direction = ref('')

  return {
    direction,
  }
})