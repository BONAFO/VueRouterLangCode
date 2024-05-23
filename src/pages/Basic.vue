<script setup>
import { useRoute } from "vue-router";
import INIT from "@/components/Home";
import { computed, ref } from "vue";
import {IS_MOBILE} from "@/router/middewares";

const routes = useRoute().params;
const PAGE_RESO = ref(IS_MOBILE());
const PAGECONTENT = ref({});

const loader = computed(() => {
  INIT({ lang: routes.lang }).then((res) => (PAGECONTENT.value = res));
});

window.onresize = () => {
  PAGE_RESO.value = IS_MOBILE();
};


</script>

<template>


  
  {{ loader }}
</template>

<style lang="less">

</style>
