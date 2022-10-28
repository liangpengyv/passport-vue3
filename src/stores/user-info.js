import { defineStore } from "pinia";
import { ref } from "vue";
import DirectionType from "../model/direction-type";

export const useUserInfoStore = defineStore('userInfo', () => {
  const direction = ref(DirectionType.OUT_SCHOOL)
  const name = ref('')

  return {
    direction,
    name,
  }
})