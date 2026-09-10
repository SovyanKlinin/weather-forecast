<template>
  <div class="weather-card" :class="{ __active: isActive }">
    <img :src="day.condition.icon" alt="weather-icon">
    <span class="weather-card_day">{{ shortDay }}</span>
    <span class="weather-card_temp">{{ temp }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    required: true
  },
  day: {
    type: Object,
    required: true
  }
});

const temp = computed(() => props.day.avgtemp_c + ' °C');

const date = new Date(props.date);
const shortDay = date.toLocaleString('ru-RU', { weekday: 'short' });
</script>

<style>
.weather-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  background-color: var(--color-card-bg);
  padding: 12px 24px;
  transition: 0.25s;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0px var(--color-main-bg);
}

.weather-card.__active {
  background-color: white;
  color: black;
}

.weather-card:hover {
  background-color: #3A434F;
  color: white;
}

.weather-card img {
  width: 55px;
  height: 55px;
}

.weather-card_day {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.weather-card_temp {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
</style>