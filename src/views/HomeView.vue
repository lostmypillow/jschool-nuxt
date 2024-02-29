<script setup>
import router from '@/router';
import Button from 'primevue/button';

function login() {
  router.push('/schedule')
}
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <h1>I am home View</h1>
    <Button @click="login">LOGIN</Button>
  </div>
</template>
