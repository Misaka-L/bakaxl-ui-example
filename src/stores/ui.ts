import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isLaunchAreaOpen = ref(false)
  const isBackgroundScale = ref(false)

  return {
    isLaunchAreaOpen,
    isBackgroundScale
  }
})
