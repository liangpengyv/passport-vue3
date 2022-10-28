<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { lang } from './i18n';
import { useI18n } from 'vue-i18n'
import en from './i18n/en'
import zh from './i18n/zh'

const { locale } = useI18n()
const currentLang = ref(lang)
const switchLang = () => {
  if (currentLang.value === zh.locale) {
    currentLang.value = en.locale
  } else {
    currentLang.value = zh.locale
  }
  locale.value = currentLang.value
}
</script>

<template>
  <header>
    <div class="header">
      <span>{{ $t('app_title') }}</span>
      <button class="switch-lang" @click="switchLang">{{ currentLang === zh.locale ? en.locale : zh.locale }}</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  background-color: black;
  color: white;
}

.switch-lang {
  position: absolute;
  right: 0;
}
</style>
