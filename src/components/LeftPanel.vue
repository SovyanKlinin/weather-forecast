<template>
  <section class="left-panel">
    <div class="left-panel_content">
      <header>
        <span>{{ firstSymbolToUpperCase(dayOfWeek) }}</span>
        <span>{{ dateFormatter(currentDate) }}</span>
        <span>
          <IconLocation />
          {{ city }}
        </span>
      </header>
      <footer>
        <img :src="currentDay.day.condition.icon" alt="">
        <span>{{ currentDay.day.avgtemp_c + ' °C' }}</span>
        <span>{{ currentDay.day.condition.text }}</span>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { computed, watchEffect } from 'vue';
import { useWeatherData } from '../composables/useWeatherData';
import { firstSymbolToUpperCase } from '../utils/firstSymbolToUpperCase';
import { dateFormatter } from '../utils/dateFormatter';
import IconLocation from './icons/IconLocation.vue';

const { data, currentDate } = useWeatherData();

const currentDay = computed(() => data.value?.forecast?.forecastday?.find(el => el.date === currentDate.value));
watchEffect(() => {
  console.log(currentDay.value);
})
const city = computed(() => data.value?.location?.name);
const date = computed(() => new Date(currentDate.value));
const dayOfWeek = computed(() => date.value?.toLocaleString('ru-RU', { weekday: 'long' }) ?? '');
</script>

<style scoped>
.left-panel {
  width: 490px;
  height: 660px;
  margin-right: -45px;
  background-image:
    linear-gradient(152.19deg, rgba(136, 235, 239, 0.8) -0.04%, rgba(83, 91, 230, 0.8) 100%),
    url('../assets/images/bg.png');
  background-size: cover;
  border-radius: 30px;
  z-index: 1;
}
</style>