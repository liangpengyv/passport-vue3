<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '../stores/user-info'
import DirectionType from '../model/direction-type'

const router = useRouter()

const userInfo = useUserInfoStore()

const directionType = ref(userInfo.direction)
const name = ref(userInfo.name)
const nameInputError = ref(false)

const onConfirmClick = () => {
  if (name.value) {
    userInfo.direction = directionType
    userInfo.name = name
    router.push({ name: 'result' })
  } else {
    nameInputError.value = true
  }
}
</script>

<template>
  <input type="radio" name="direction" id="direction-out" :value="DirectionType.OUT_SCHOOL" v-model="directionType">
  <label for="direction-out">{{ $t('home_out_school') }}</label>
  <input type="radio" name="direction" id="direction-in" :value="DirectionType.IN_SCHOOL" v-model="directionType">
  <label for="direction-in">{{ $t('home_in_school') }}</label>

  <br>

  <label for="name">{{ $t('home_name_label') }}</label>
  <input type="text" name="name" id="name" v-model="name" @input="nameInputError = !name">
  <span class="input-error" v-show="nameInputError">{{ $t('home_name_input_error') }}</span>

  <br>

  <button @click="onConfirmClick">{{ $t('home_confirm_button') }}</button>
</template>

<style scoped>
.input-error {
  color: red;
}
</style>