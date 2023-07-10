import { reactive } from 'vue'

export const uiStore = reactive({
  isLaunchAreaOpen: false,
  isLaunchAreaNavigationToPage: false,
  isLaunchAreaPointerEvent: null as PointerEvent | null
})

export function displayLaunchArea(navigationToPage: boolean, pointerEvent: PointerEvent) {
  uiStore.isLaunchAreaOpen = true
  uiStore.isLaunchAreaNavigationToPage = navigationToPage
  uiStore.isLaunchAreaPointerEvent = pointerEvent
}

export function closeLaunchArea() {
  uiStore.isLaunchAreaOpen = false
}
