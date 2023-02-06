<script setup lang="ts">
defineProps({
  btnText: { type: String, required: true },
  btnClasses: { type: String, default: "btn-primary" },
  emitEvent: { type: String, required: true },
});
</script>

<template>
  <button
    class="btn rounded-1"
    :class="btnClasses"
    @click="$emit(`${emitEvent}`)"
  >
    {{ btnText }}
  </button>
</template>
