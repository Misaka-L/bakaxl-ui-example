<script setup lang="ts">
import { watch } from 'vue';
import LaunchArea from './components/LaunchArea.vue';
import TheToggleButton from './components/TheToggleButton.vue';
import { useUiStore } from './stores/ui';

const uiStore = useUiStore();

watch(() => uiStore.isBackgroundScale, (isBackgroundScale) => {
  scaleBackground(isBackgroundScale)
})

function scaleBackground(isBackgroundScale: boolean) {
  // 我不想再实现背景缩放了，伪代码
  console.log("isBackgroundScale: " + isBackgroundScale);
}
</script>

<template>
  <h1>打开控制台看看？</h1><br />
  <p>isLaunchAreaOpen: {{ uiStore.isLaunchAreaOpen }}</p>
  <p>isBackgroundScale: {{ uiStore.isBackgroundScale }}</p>
  <TheToggleButton />
  <LaunchArea />
</template>
