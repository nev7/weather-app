<script setup lang="ts">
import { ref } from "vue";
import { client } from "@/httpClient/client";
import type { Ref } from "vue";
import type { CurrentWeather, CurrentLocation } from "@/types/weatherApiTypes";
import CustomButton from "@/components/Button/CustomButton.vue";
import WeatherIcons from "@/components/WeatherIcons.vue";

const city = ref("");
const currWeather = ref({}) as Ref<CurrentWeather>;
const currLocation = ref({}) as Ref<CurrentLocation>;
const weatherApiError = ref(null);

const getWeatherByCity = async () => {
  if (city.value) {
    const fetchWeather = await client.getRequest(
      `http://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${city.value}`,
      {}
    );
    fetchWeather
      .json()
      .then((res) => {
        currWeather.value = res.current;
        currLocation.value = res.location;
      })
      .catch((error) => (weatherApiError.value = error));
    return fetchWeather;
  }
  return false;
};
</script>

<template>
  <div class="weather-component d-flex">
    <div class="d-flex flex-row w-100 search-box mb-2">
      <input
        type="text"
        class="city-input mr-1"
        alt="city-input"
        v-model="city"
      />
      <CustomButton
        :btn-text="'Show'"
        :emit-event="'showWeather'"
        :btn-classes="'btn-primary btn-sm'"
        @show-weather="getWeatherByCity"
      />
    </div>
    <div class="card weather-card" v-if="currLocation.name">
      <div class="card-body">
        <h5 class="card-title text-start fs-1">{{ currLocation.name }}</h5>
        <p class="card-text">
          <span class="fs-3">{{ currWeather.condition.text }}</span>
        </p>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <WeatherIcons :weather-condition="currWeather.condition" />
        <span class="degrees-text mb-0">{{ currWeather.temp_c }}&#176;</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  font-size: 1.2rem;
}

.weather-component {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .weather-card {
    width: 100%;
    border-radius: 4px;
    min-height: 300px;
    .degrees-text {
      font-size: 4rem;
    }
  }

  .search-box {
    .city-input {
      border-radius: 4px;
      border: 1px solid gray;
      padding: 0 0 0 10px;
      margin-right: 5px;
    }
  }
}
</style>
