<script setup>
import router from '@/router';
import { ref } from 'vue';
import SelectButton from 'primevue/selectbutton';
import TieredMenu from 'primevue/tieredmenu';




const value = ref('未選擇');
const selectedDep = ref('未選擇')
const options = ref(['112下', '113上']);

const items = ref([
    {
        label: 'File',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                items: [
                    {
                        label: 'Document',
                        icon: 'pi pi-file'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'pi pi-folder-open'
            },
            {
                label: 'Print',
                icon: 'pi pi-print'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'pi pi-copy'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
            {
                label: 'Slack',
                icon: 'pi pi-slack'
            },
            {
                label: 'Whatsapp',
                icon: 'pi pi-whatsapp'
            }
        ]
    }
]);
const departments = ref([
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

function trackChange() {
  console.log("value changed")
  title.value = value.value + " " + selectedDep.value + " 課表"
  
}


const title = defineModel()
</script>


<template>
  <div>
    <h1 class="w-full flex items-center justify-center"></h1>
    <!-- <TieredMenu :model="items" /> -->
    <div class="flex flex-col items-center gap-3">
      <SelectButton @change="trackChange" v-model="value" :options="options"/>
      <SelectButton @change="trackChange" v-if="title != ''" v-model="selectedDep" :options="departments"/>


    </div>
    
  </div>
</template>

<style>

</style>
