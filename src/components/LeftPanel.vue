<template>
  <section class="left-panel">
    <div v-if="hasData" class="left-panel_content" :class="{ __load: load}">
      <header>
        <span class="left-panel_title">{{ firstSymbolToUpperCase(dayOfWeek) }}</span>
        <span class="left-panel_date">{{ dateFormatter(currentDate) }}</span>
        <span class="left-panel_location">
          <IconLocation />
          {{ city }}
        </span>
      </header>
      <footer>
        <img :src="currentDay?.day?.condition.icon" alt="">
        <span class="left-panel_temp">{{ currentDay?.day?.avgtemp_c + ' °C' }}</span>
        <span class="left-panel_condition">{{ currentDay?.day?.condition.text }}</span>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useWeatherData } from '../composables/useWeatherData';
import { firstSymbolToUpperCase } from '../utils/firstSymbolToUpperCase';
import { dateFormatter } from '../utils/dateFormatter';
import IconLocation from './icons/IconLocation.vue';

const { data, currentDate, load, hasData } = useWeatherData();

const currentDay = computed(() => data.value?.forecast?.forecastday?.find(el => el.date === currentDate.value));
const city = computed(() => data.value?.location?.name);
const date = computed(() => new Date(currentDate.value));
const dayOfWeek = computed(() => date.value?.toLocaleString('ru-RU', { weekday: 'long' }) ?? '');
</script>

<style scoped>
.left-panel {
  width: 490px;
  height: 660px;
  padding: 48px 32px 84px;
  margin-right: -45px;
  background-image:
    linear-gradient(152.19deg, rgba(136, 235, 239, 0.8) -0.04%, rgba(83, 91, 230, 0.8) 100%),
    url('../assets/images/bg.png');
  background-size: cover;
  border-radius: 30px;
  z-index: 1;
  box-sizing: border-box;
}

.left-panel_content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
  transition: 0.2s;
}

.left-panel_content.__load {
  opacity: 0;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}

.left-panel_title {
  font-weight: 700;
  font-size: 37px;
  line-height: 45px;
}

.left-panel_date {
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
}

.left-panel_location {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}

footer img {
  width: 95px;
  height: 95px;
}

.left-panel_temp {
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
}

.left-panel_condition {
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
}
</style>