<script setup>
import { useRoute } from "vue-router";
import INIT from "@/components/Home";
import { computed, ref } from "vue";
import { IS_MOBILE } from "@/router/middewares";
import {load_game_modal  } from "@/components/Home/loadGame.model";

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
  <h1 :class="`title-${PAGE_RESO}`">{{ PAGECONTENT.title }}</h1>

  <div :class="`btn-cont-${PAGE_RESO} text-center`">
    <button 
    
    :class="`btn btn btn-outline-success btn-page-${PAGE_RESO}`">
      {{PAGECONTENT.nwbtn}}
    </button>
    <br />
    <button 
    @click="load_game_modal(PAGECONTENT.modals.load_modal)"
    :class="`btn btn btn-outline-warning btn-page-${PAGE_RESO}`">
    {{PAGECONTENT.loadbtn}}
    </button>
  </div>

  {{ loader }}
</template>

<style lang="less">
@import "@/style/less/Components/Home.less";
@import "@/style/less/Components/Modals/LoadModal.less";

</style>
