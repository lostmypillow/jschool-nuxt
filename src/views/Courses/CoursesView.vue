<script setup>
import { ref, watch } from 'vue';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';
import router from '@/router';
import OverlayPanel from 'primevue/overlaypanel';

import Dialog from 'primevue/dialog';

const selectedYear = ref("")
const selectedDep = ref("")
const selectedStuYear = ref("")
const courseYears = ref([
    {
        label: "112下",
        id: 20232
    },
    {
        label: "113上",
        id: 20241
    }
])

const departments = ref([
    {
        label: '',
        items: [
            { label: '教務處' },
            { label: '進修部' },
            { label: '體育室' },
            { label: '通識中心' },
            { label: '師資培育中心' },
            { label: '校院級課程' },
        ]
    },
    {
        label: '機電學院',
        items: [
            { label: '智動科' },
            { label: '機械系' },
            { label: '機電所' },
            { label: '車輛系' },
            { label: '能源冷凍空調系' },
            { label: '製科所' },
            { label: '自動化所' },
            { label: '機電科所' },
            { label: '機電學士班' },
            { label: '機電科技博士外生專班' },
            { label: '機械自動化外生專班' },
            { label: '能源與車輛外生專班' },
            { label: '機電學院' }
        ]
    },
    {
        label: "工程學院",
        items: [
            {
                label: "化工系"
            },
            {
                label: "材資系"
            },
            {
                label: "土木系"
            },
            {
                label: "分子系"
            },
            {
                label: "防災所"
            },
            {
                label: "高分所"
            },
            {
                label: "環境所"
            },
            {
                label: "生化所",
            },
            {
                label: "化工所",
            },
            {
                label: "材料所",
            },
            {
                label: "資源所",
            },
            {
                label: "工程科技學士班",
            },
            {
                label: "能源光電外國學生專班",
            }
        ]
    },
    {
        label: "管理學院",
        items: [
            {
                label: "工管系"
            },
            {
                label: "經管系"
            },
            {
                label: "管理所"
            },
            {
                label: "管理外國學生專班"
            },
            {
                label: "資財系"
            },
            {
                label: "管理學院"
            },

        ]
    },
    {
        label: "設計學院",
        items: [
            { label: "工設系" },
            { label: "建築系" },
            { label: "建都所" },
            { label: "創新所" },
            { label: "創意設計學士班" },
            { label: "設計所" },
            { label: "互動系" },
            { label: "互動與創新外生專班" },

        ]
    },
    {
        label: "人文與社會科學學院 ",
        items: [
            { label: "技職所" },
            { label: "英文系" },
            { label: "科技法律學程" },
            { label: "智財所" },
            { label: "文發系" },

        ]
    },
    {
        label: "電資學院 ",
        items: [
            { label: "電機系" },
            { label: "電子系" },
            { label: "資工系" },
            { label: "光電系" },
            { label: "電資學士班" },
            { label: "電資外國學生專班" },
            { label: "太空所" },

        ]
    },
    {
        label: "創新前瞻科技研究學院 ",
        items: [
            {
                label: "創新學院",
                items: [
                    {
                        label: "創新AI學位學程"
                    },
                    {
                        label: "創新資安學位學程"
                    }
                ]
            }]
    },
])

const depYears = ref([
    {
        label: "一年級"
    },
    {
        label: "二年級"
    },
    {
        label: "三年級"
    },
    {
        label: "四年級"
    }
])
const visibility = ref(true)


watch([selectedDep, selectedYear, selectedStuYear], () => {
 if (selectedDep.value != "" && selectedYear.value != 0 && selectedStuYear.value != 0) {
    visibility.value = false
    router.push(`/courses/view/57/3/2`)
 }
})
</script>


<template>
    <div class="p-4">
        <Button class="w-full" @click="visibility = true">
            Filter
        </Button>
    </div>

    <Sidebar position="bottom" :visible="visibility">
        <template #container>
            <div class="flex flex-col gap-3 m-5">

                <h1 class="text-3xl font-bold">
                    Filter
                </h1>

                <Dropdown v-model="selectedYear" :options="courseYears" optionLabel="label" placeholder="選擇學年"
                    :invalid="yearInvalidState"></Dropdown>

                <Dropdown v-model="selectedDep" :options="departments" optionLabel="label" optionGroupLabel="label"
                    optionGroupChildren="items" placeholder="選擇科系" :disabled="depDisabledState"></Dropdown>

                <Dropdown v-model="selectedStuYear" :options="depYears" optionLabel="label" placeholder="選擇年級"></Dropdown>

                <div class="flex flex-row gap-5 w-full justify-between">
                    <Button @click="visibility = false">
                        Cancel
                    </Button>
                    <Button @click="visibility = false">
                        Save
                    </Button>
                </div>

            </div>

        </template>


    </Sidebar>

  
    <RouterView />
</template>

<style></style>
