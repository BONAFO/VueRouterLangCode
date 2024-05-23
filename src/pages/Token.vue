
<script setup>
import { useRoute } from 'vue-router';
import INIT from '@/components/Token/';

const routes = useRoute().params;
const PAGECONTENT = INIT({ lang : routes.lang})
</script>

<template>

    <h3>{{ PAGECONTENT.title }}</h3>
</template>