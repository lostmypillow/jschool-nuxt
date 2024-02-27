<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TabMenu from 'primevue/tabmenu';
import { ref, watch, computed, onMounted } from 'vue';
import router from './router';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = computed(() => route.name)

const isTabChanged = ref(false)

function tabChange() {
  isTabChanged.value = true
}

const items = ref([
  {
    label: '課表', route: '/schedule', command: () => {
      router.push('/schedule')
    }
  },
  {
    label: '課程', route: '/courses', command: () => {
      router.push('/courses')
    }
  },
  {
    label: '點名', route: '/rollcall', command: () => {
      router.push('/rollcall')
    }
  },
  {
    label: '成績', route: '/scores', command: () => {
      router.push('/scores')
    }
  },
  {
    label: '服務', route: '/services', command: () => {
      router.push('/services')
    }
  },
]);

const index = ref(0)
const headerTitle = ref("")
const titleFromCourses = ref("")
watch([title, titleFromCourses], () => {
   if (title.value === "課程"  && titleFromCourses.value != "") {
   
    headerTitle.value = titleFromCourses.value

   } else {
     headerTitle.value = title.value
   }
 
index.value = items.value.findIndex((item) => item.label === title.value)
console.log(`current index value is ${index.value}`);
})


</script>

<template>
  <header>
    <div class="flex items-center justify-center bg-gray-200 p-4 h-10">
      <h1 class="text-lg font-semibold">
     {{ headerTitle }}
      </h1>
    </div>

    <!-- Tab Menu -->
    <div class="fixed bottom-0 w-full z-50 bg-white border-t border-gray-300">
      <TabMenu :model="items" :active-index="index" @tab-change=""/>
    </div>
</header>

<body class="flex w-screen h-full items-start justify-start p-4">

  <RouterView  v-model="titleFromCourses" />
</body>   
</template>



<style scoped>
*,
::before,
::after {
  border: none !important;
}
</style>