<template>
  <button class="button">
    <div>
      <slot name="icon" />
    </div>
    <slot />
  </button>
</template>

<script setup>

</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: var(--gradient);
  padding: 14px;
  font-weight: 600;
  font-size: 20px;
  color: var(--color-primary);
  cursor: pointer;
  transition: 0.25s;
}

.button:hover {
  opacity: 0.85;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
}
</style>