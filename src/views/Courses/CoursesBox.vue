<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute()
const routeCYear = computed(() => route.params.cyear)
const routeDep = computed(() => route.params.dep)
const routeSYear = computed(() => route.params.syear)

</script>


<template>



<h1>Cyear: {{ routeCYear }} Dep: {{ routeDep }} Syear: {{ routeSYear }} </h1>
</template>