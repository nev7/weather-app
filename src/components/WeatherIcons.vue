<script setup lang="ts">
import ClearWeatherIcon from "@/icons/ClearIcon.vue";
import PartialyCloudyIcon from "@/icons/PartialyCloudyIcon.vue";
import CloudyIcon from "@/icons/CloudyIcon.vue";
import RainIcon from "@/icons/RainIcon.vue";
import SunnyIcon from "@/icons/SunnyIcon.vue";
import MistIcon from "@/icons/MistIcon.vue";

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
  <MistIcon v-if="weatherCondition.code === 1030" />
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
