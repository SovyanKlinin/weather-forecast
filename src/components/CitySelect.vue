<template>
  <div class="city-select">
    <Button v-if="isEdited" class="city-select_change-button" @click="isEdited = !isEdited">
      <IconLocation />
      Изменить город
    </Button>
    <div v-if="!isEdited" class="city-select_city">
      <input id="city" v-model="city" v-focus type="text" name="city" placeholder="Введите город" class="city-select_input" @keyup.enter="select">
      <Button @click="select">
        Сохранить
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import IconLocation from './icons/IconLocation.vue';

const emit = defineEmits(['select-city']);

const city = ref('Moscow');
const isEdited = ref(true);

const select = () => {
  isEdited.value = true;
  emit('select-city', city.value);
}

emit('select-city', city.value);
</script>

<style scoped>
.city-select_change-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.city-select_city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.city-select_input {
  padding: 15px 17px 14px 19px;
  width: 100%;
  background: var(--color-card-bg);
  box-shadow: 1px 2px 4px var(--color-main-bg);
  border: none;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #3F4958;
}
</style>