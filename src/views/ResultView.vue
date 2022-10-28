<script setup>
import { useUserInfoStore } from '../stores/user-info';
import DirectionType from '../model/direction-type'

const userInfo = useUserInfoStore()
</script>

<template>
  <h2 v-if="userInfo.direction === DirectionType.OUT_SCHOOL">{{ $t('result_out_school') }}</h2>
  <h2 v-else-if="userInfo.direction === DirectionType.IN_SCHOOL">{{ $t('result_in_school') }}</h2>
  <p>{{ $t('result_name_label') }}<span>{{ userInfo.name }}</span></p>
</template>

<style scoped>

</style>
