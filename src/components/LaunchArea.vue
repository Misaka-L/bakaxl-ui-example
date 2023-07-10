<script setup lang="ts">
import { useUiStore } from '@/stores/ui';
import { watch } from 'vue';

const uiStore = useUiStore();

watch(() => uiStore.isLaunchAreaOpen, (isLaunchAreaOpen) => {
    if (isLaunchAreaOpen) displayLaunchArea(uiStore.isLaunchAreaNavigationToPage, uiStore.isLaunchAreaPointerEvent)
})

function displayLaunchArea(navigationToPage: boolean, pointerEvent: PointerEvent | null) {
    console.log(`call displayLaunchArea, navigationToPage: ${navigationToPage} pointerEvent: ${pointerEvent}`)
    console.log(pointerEvent)
}
</script>

<template>
    <div v-if="uiStore.isLaunchAreaOpen" class="launch-area">
        <button @click="uiStore.closeLaunchArea">Close Panel</button>
    </div>
</template>

<style scoped>
.launch-area {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 100vh;
    padding: 0 1rem;
}

button {
    font-size: 4rem;
}
</style>