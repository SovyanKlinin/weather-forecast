<template>
  <main class="main">
    <div v-if="emptyResult" class="main_empty-search">
      <span>
        Указанный город не найден
      </span>
    </div>
    <Loader v-if="load" />
    <template v-if="!load && !emptyResult">
      <ul>
        <li v-for="(item, index) in dayWeather" :key="index">
          <Stat :name="item.name" :value="item.value" />
        </li>
      </ul>
      <ul class="__weatcher-card_list">
        <li v-for="(item, index) in days" :key="index">
          <WeatherCard :day="item.day" :date="item.date" :is-active="currentDate === item.date" @click="setDayWeather(item.day, item.date)" />
        </li>
      </ul>
    </template>
    <CitySelect @select-city="getCity" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import Stat from './components/Stat.vue';
import CitySelect from './components/CitySelect.vue';
import Loader from './components/Loader.vue';
import WeatherCard from './components/WeatherCard.vue';

const apiKey = import.meta.env.VITE_API_KEY;

const data = ref();
const load = ref(false);
const emptyResult = ref(false);
const dayWeather = ref();
const currentDate = ref();
const days = computed(() => data.value?.forecast?.forecastday);

const setDayWeather = (day, date) => {
  currentDate.value = date;

  dayWeather.value = [
    {
      name: 'Влажность',
      value: day.avghumidity + '%'
    },
    {
      name: 'Осадки',
      value: day.totalprecip_mm + ' мм'
    },
    {
      name: 'Ветер',
      value: day.avgvis_km + ' м/ч'
    }
  ]
};

const getCity = async (city) => {
  load.value = true;
  emptyResult.value = false;

  const params = new URLSearchParams({
    lang: 'ru',
    days: 3,
    q: city,
    key: apiKey
  })
  const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?${params.toString()}`);
  data.value = await res.json();

  const dayData = data.value.forecast.forecastday[0];
  setDayWeather(dayData.day, dayData.date);

  if (data.value.error) {
    load.value = false;
    emptyResult.value = true;
  }
  setTimeout(() => {
    load.value = false;
  }, 1000);
};
</script>

<style scoped>
.main {
  position: relative;
  height: 500px;
  width: 400px;
  background: var(--color-main-bg);
  padding: 55px 55px 60px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main_empty-search {
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}

.main_empty-search span {
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
  margin: 0;
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
