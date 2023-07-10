import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isLaunchAreaOpen = ref(false)
  const isLaunchAreaNavigationToPage = ref(false)
  const isLaunchAreaPointerEvent: Ref<PointerEvent | null> = ref(null)

  function displayLaunchArea(navigationToPage: boolean, pointerEvent: PointerEvent) {
    isLaunchAreaOpen.value = true
    isLaunchAreaNavigationToPage.value = navigationToPage
    isLaunchAreaPointerEvent.value = pointerEvent
  }

  function closeLaunchArea() {
    isLaunchAreaOpen.value = false
  }

  return {
    isLaunchAreaOpen,
    isLaunchAreaNavigationToPage,
    isLaunchAreaPointerEvent,
    displayLaunchArea,
    closeLaunchArea
  }
})
