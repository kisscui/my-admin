<template>
  <div>刷新</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import router from "@/router/index";
let route = useRoute();
router.replace({
  name: route.params.name,
  params: route.params,
});
</script>
