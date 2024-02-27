<script setup>
import { onMounted, ref, watch } from 'vue';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';

onMounted(
  () => {
    titleFromCourses.value = value.value + " " + selectedDep.value + " 課表"
    
    
  }
)

const value = ref('未選擇');
const selectedDep = ref('未選擇')
const options = ref(['112下', '113上']);

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

const titleFromCourses = defineModel()
const visible = ref(false)


watch([value, selectedDep], () => {

  titleFromCourses.value = value.value + " " + selectedDep.value + " 課表"


  if (value.value === null || selectedDep.value === null) {
    value.value = "未選擇"
    selectedDep.value = "未選擇"
  } else if (value.value != "未選擇" && selectedDep.value != "未選擇") {

    visible.value = false
    
    
  }


  

})



</script>


<template>
<!-- <div class="flex-col"> -->
    <div class="flex flex-row w-screen items-center justify-between gap-2">
    <!-- <h1 ref="BigTitle" class="text-3xl font-extrabold grow">{{ titleFromCourses }}</h1> -->
    <Button class="w-content shrink-0" @click="visible=true">Filter</Button>


    <Sidebar v-model:visible="visible" position="right">

      <template #container>
        <div class="flex flex-col gap-5 h-full m-4">


          <!-- <Button class="flex" @click="closeCallback">Close</Button> -->
          <div class="flex flex-col gap-2 overflow-auto">
            <div>

              <label for="selectYear">Select Year:</label>
              <SelectButton id="selectYear" v-model="value" :options="options" />
            </div>

            <div>
              <label for="selectDep">Select Department:</label>
              <SelectButton id="selectDep" v-if="value != '未選擇'" v-model="selectedDep" :options="departments1" />

            </div>


          </div>



        </div>




      </template>

    </Sidebar>

    
  </div>
  <!-- <Button @click="Testheight">test height</Button>
</div> -->
</template>

<style></style>
