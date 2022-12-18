<template>
  <the-header />
  <router-view />
</template>

<script>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    RouterView,
  },
};
</script>

<style scoped></style>
