<template>
  <section class="right-panel_content">
    <div v-if="emptyResult" class="right-panel_empty-search">
      <span>
        Указанный город не найден
      </span>
    </div>
    <Loader v-if="load" />
    <template v-if="!load && hasData">
      <ul>
        <li v-for="(item, index) in dayWeather" :key="index">
          <Stat :name="item.name" :value="item.value" />
        </li>
      </ul>
      <ul class="__weatcher-card_list">
        <li v-for="(item, index) in days" :key="index">
          <WeatherCard :day="item.day" :date="item.date" :is-active="currentDate === item.date"
            @click="setDayWeather(item.day, item.date)" />
        </li>
      </ul>
    </template>
    <CitySelect @select-city="getCity" />
  </section>
</template>

<script setup>
import Stat from './Stat.vue';
import CitySelect from './CitySelect.vue';
import Loader from './Loader.vue';
import WeatherCard from './WeatherCard.vue';
import { useWeatherData } from '../composables/useWeatherData';

const { load, emptyResult, dayWeather, days, currentDate, hasData, setDayWeather, getCity } = useWeatherData();
</script>

<style scoped>
.right-panel_content {
  position: relative;
  height: 500px;
  width: 400px;
  background: var(--color-main-bg);
  padding: 55px 55px 60px 100px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
}

.right-panel_content :deep(.city-select) {
  margin-top: auto;
}

.right-panel_empty-search {
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}

.right-panel_empty-search span {
  display: inline-block;
  padding: 15px 50px 14px;
  background-color: var(--color-card-bg);
  border-radius: 0 0 25px 25px;
  font-size: 18px;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin: 0 0 70px;
  padding: 0;
}

ul.__weatcher-card_list {
  flex-direction: row;
}

ul.__weatcher-card_list li {
  width: 100%;
}

li {
  margin: 0;
}
</style>