<script setup lang="ts">
import ClearWeatherIcon from "./ClearWeatherIcon.vue";
import PartialyCloudyIcon from "./PartialyCloudyIcon.vue";
import CloudyIcon from "./CloudyIcon.vue";
import RainIcon from "./RainIcon.vue";
import SunnyIcon from "./SunnyIcon.vue";

defineProps({
  weatherCondition: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <SunnyIcon
    v-if="weatherCondition.code === 1000 && weatherCondition.text === 'Sunny'"
  />
  <RainIcon v-else-if="weatherCondition.code === 1183" />
  <CloudyIcon v-else-if="weatherCondition.code === 1009" />
  <ClearWeatherIcon
    v-else-if="
      weatherCondition.code === 1000 && weatherCondition.text === 'Clear'
    "
  />
  <PartialyCloudyIcon v-else-if="weatherCondition.code === 1003" />
  <img
    v-else
    :src="weatherCondition.icon"
    class="condition-img"
    alt="weather-icon"
  />
</template>
