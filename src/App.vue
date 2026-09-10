<template>
  <main class="main">
    <LeftPanel />
    <RightPanel />
  </main>
</template>

<script setup>
import RightPanel from './components/RightPanel.vue';
import LeftPanel from './components/LeftPanel.vue';
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
