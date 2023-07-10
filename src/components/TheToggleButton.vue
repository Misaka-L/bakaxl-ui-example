<script setup lang="ts">
import { useUiStore } from '@/stores/ui';

const uiStore = useUiStore();
</script>

<template>
    <button @pointerdown="(event) => uiStore.displayLaunchArea(true, event)">Open Panel</button>
</template>