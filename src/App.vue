<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TabMenu from 'primevue/tabmenu';
import Dropdown from 'primevue/dropdown';
import { ref, watch, computed, onMounted } from 'vue';
import router from './router';
import { useRoute } from 'vue-router';
import AutoComplete from 'primevue/autocomplete';

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
const selectedYear =ref("")
const selectedDep = ref("")


const years = ref([
  { name: "112上", id: 20232 },
  { name: "113上", id: 20241}
  ])

const departments1 = ref([
  '教務處',
  '進修部',
  '體育室',
  '通識中心',
  '師資培育中心',
  '校院級課程',
  '智動科',
  '機械系',
  '機電所',
  '車輛系',
  '能源冷凍空調系',
  '製科所',
  '自動化所',
  '機電科所',
  '機電學士班',
  '機電科技博士外生專班',
  '機械自動化外生專班',
  '能源與車輛外生專班',
  '機電學院',
  '化工系',
  '材資系',
  '土木系',
  '分子系',
  '防災所',
  '高分所',
  '環境所',
  '生化所',
  '化工所',
  '材料所',
  '資源所',
  '工程科技學士班',
  '能源光電外國學生專班',
  '工管系',
  '經管系',
  '管理所',
  '管理外國學生專班',
  '資財系',
  '工設系',
  '建築系',
  '建都所',
  '創新所',
  '創意設計學士班',
  '設計所',
  '互動系',
  '互動與創新外生專班',
  '技職所',
  '英文系',
  '科技法律學程',
  '智財所',
  '文發系',
  '電機系',
  '電子系',
  '資工系',
  '光電系',
  '電資學士班',
  '電資外國學生專班',
  '太空所',
  '創新學院'


]);
const suggestions = ref([])
const searchterm = ref("")
const search = (event) => {
if (departments1.includes(event.query)) {
  suggestions = departments1.value
} else {
  console.log("None found")
}
}
</script>

<template>
  <header class="">

   <div class="top-0 p-2 w-screen bg-red-300 grid grid-rows-3">

    <div id="title" class="m-2">
      <h1 class="text-3xl font-extrabold w-full">
      {{ headerTitle }}
    </h1> 
    </div>

    <div id="selection" class="m-2">
<Dropdown v-model:="selectedYear" :options="years" optionLabel="name" placeholder="選擇學年"></Dropdown>
<Dropdown v-model:="selectedDep" :options="departments1" placeholder="選擇科系"></Dropdown>
    </div>
    <div if="search" class="m-2">
<AutoComplete v-model="searchterm" :suggestions="suggestions" @complete="search" forceSelection></AutoComplete>

    </div>
   </div> 


    <!-- -->
<!-- top p-2 (0.5rem) +  -->
    <!-- Tab Menu -->
   
</header>

<body class="flex  w-screen h-content items-start justify-start">

  <RouterView  v-model="titleFromCourses" />
  <div class="fixed bottom-0 left-0 w-screen z-50 bg-white border-t border-gray-300">
      <TabMenu :model="items" :active-index="index" @tab-change=""/>
      </div>
</body>   
</template>



<style scoped>
*,
::before,
::after {
  border: none !important;
}
</style>