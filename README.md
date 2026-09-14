# Weather Forecast

Приложение прогноза погоды на Vue 3 + Vite. Позволяет выбрать город и посмотреть текущую погоду и прогноз на 3 дня (влажность, осадки, видимость) через [WeatherAPI](https://www.weatherapi.com/).

🔗 Деплой: https://weather-forecast-nu-five.vercel.app/

## Стек

- Vue 3 (`<script setup>`)
- Vite
- ESLint

## Запуск локально

```bash
npm install
```

Создай файл `.env` в корне проекта и укажи свой API-ключ от [WeatherAPI](https://www.weatherapi.com/):

```
VITE_API_KEY=your_api_key
```

Запуск dev-сервера:

```bash
npm run dev
```

Сборка:

```bash
npm run build
```

Просмотр собранной версии:

```bash
npm run preview
```

