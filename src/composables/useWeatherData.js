import { ref, computed } from 'vue';

const apiKey = import.meta.env.VITE_API_KEY;

const data = ref();
const load = ref(false);
const emptyResult = ref(false);
const dayWeather = ref();
const currentDate = ref();
const days = computed(() => data.value?.forecast?.forecastday);

export const useWeatherData = () => {

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
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?${params.toString()}`);
    data.value = await res.json();

    if (data.value.error) {
      load.value = false;
      emptyResult.value = true;
      return;
    }

    const dayData = data.value.forecast.forecastday[0];
    setDayWeather(dayData.day, dayData.date);

    setTimeout(() => {
      load.value = false;
    }, 1000);
  };

  return {
    data,
    load,
    emptyResult,
    dayWeather,
    currentDate,
    days,
    setDayWeather,
    getCity
  }
}