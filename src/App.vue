<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TabMenu from 'primevue/tabmenu';
import { ref, watch, computed } from 'vue';
import router from './router';
import { useRoute } from 'vue-router';

const route=useRoute();

const path = computed(() =>route.name)
  
const items = ref([
  { label: 'Schedule', route: '/schedule', command: () => {
    router.push('/schedule')
  } },
  { label: 'Courses', route: '/courses', command: () => {
    router.push('/courses') }},
  { label: 'RollCall', route: '/rollcall', command: () => {
    router.push('/rollcall') }},
  { label: 'Scores', route: '/scores', command: () => {
    router.push('/scores') }},
  { label: 'Services', route: '/services', command: () => {
    router.push('/services') }},
]);
const isClick = ref(false)
function highlight() {
  isClick.value = !isClick.value
}


const previousRoute = ref("");
const currentPageName = ref("");
const previousRouteName = ref("");

    // Mapping of route names to custom names
    const customPageNames = {
      schedule: '日程',
      courses: '课程',
      rollcall: '点名',
      scores: '成绩',
      services: '服务',
      // Add more routes and their custom names as needed
    };

    // Function to navigate back to the previous route
    const goBack = () => {
      if (previousRoute) {
        router.push(previousRoute);
      }
    };

    // Update previous and current route information when route changes
    watch(
      () => router.currentRoute,
      (to, from) => {
        previousRoute = from.fullPath !== '/' ? from.fullPath : null;
        previousRouteName = from.name;

        // Set custom page name based on route
        currentPageName = customPageNames[to.name] || '';
      }
    );

   
const title = ref("")


</script>

<template>
  <header>


    <div class="flex items-center justify-center bg-gray-200 p-4">
      <!-- Back Button and Previous Route Name -->
      <!-- <div class="flex items-center">
        <button @click="goBack" v-if="previousRoute" class="flex items-center mr-4">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>{{$route.params}} </span>
        </button>
      </div> -->
      <!-- Current Route Name (centered) -->
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
      
      <h1 class="text-lg font-semibold">{{ title }}</h1>
      <!-- Other content for the top bar -->
    </div>

    <!-- Tab Menu -->
    <div class="fixed bottom-0 w-full z-50 bg-white border-t border-gray-300">
      <TabMenu :model="items">
        <!-- <template #item="{ item }">
          -->
            
            <!-- <router-link @click="highlight" :class="{'text-red-500': isClick}" class="text-xs flex flex-col items-center" role="menuitem" :to="item.route"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-home">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg> {{ item.label }}</router-link>
          -->

<!-- 
        </template> -->

      </TabMenu>
    </div>

    <nav>
      
    </nav>

  </header>

  <RouterView v-model="title" />
</template>

<style scoped>
*, ::before, ::after {
  border: none !important;
}

</style>