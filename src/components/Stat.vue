<template>
  <ul class="stat">
    <li>
      <span>{{ name }}</span>
      <span>{{ value }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    requred: true
  },
  value: {
    type: String,
    requred: true
  },
})
</script>

<style scoped>
.stat {
  margin: 0;
  padding: 0;
}

.stat li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  text-transform: uppercase;
  font-size: 28px;
}

.stat li span:first-child {
  font-weight: 700;
}
</style>