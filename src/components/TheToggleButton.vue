<script setup lang="ts">
import { useUiStore } from '@/stores/ui';

const uiStore = useUiStore();
</script>

<template>
    <button @click="uiStore.isLaunchAreaOpen = !uiStore.isLaunchAreaOpen">Toggle Panel</button>
    <button @click="uiStore.isBackgroundScale = !uiStore.isBackgroundScale">Toggle Background Scale</button>
</template>