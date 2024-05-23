<script setup>
import { useRoute } from "vue-router";
import INIT from "@/components/Disclaim/";
import { computed, ref } from "vue";
import { IS_MOBILE , } from "@/router/middewares";
import { BASE_URL } from "@/router/routes.params";


const routes = useRoute().params;
const PAGE_RESO = ref(IS_MOBILE());
const PAGECONTENT = ref({});

const loader = computed(() => {
  INIT({ lang: routes.lang }).then((res) => (PAGECONTENT.value = res));
});

window.onresize = () => {
  PAGE_RESO.value = IS_MOBILE();
};

const origin = sessionStorage.getItem("origin") || `/#/${routes.lang}/`;
console.log(origin);


const YES =()=>{
  sessionStorage.setItem("disclaim", "")  
   window.location.href = BASE_URL + origin;
}


const NO =()=>{
 window.location.href = "https://www.google.com/";
}
</script>

<template>
  <h1 :class="`title-${PAGE_RESO}`">DISCLAIM</h1>
  <p :class="`text-${PAGE_RESO} text-center`">{{ PAGECONTENT.text }}</p>

  <div :class="`btn-cont-${PAGE_RESO} text-center`">
    <button @click="YES()" :class="`btn btn-outline-success btn-page-${PAGE_RESO}`">
      {{ PAGECONTENT.yes_button }}
    </button>
    <button @click="NO()" :class="`btn btn-outline-danger btn-page-${PAGE_RESO}`">
      {{ PAGECONTENT.no_button }}
    </button>
  </div>
  {{ loader }}
</template>

<style lang="less">
@import "@/style/less/Components/Disclaim.less";
</style>
