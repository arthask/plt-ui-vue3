<template>
    <div class="app-container home">
        <Search :config="serachConfig" @search="search"></Search>
        <el-button type="primary" @click="visible = true">open</el-button>
        <my-dialog v-model="visible" title="title"></my-dialog>
    </div>
</template>

<script lang="ts" setup name="Home">
import Search from '@/components/Search/index.vue';
import { SearchComponentConfig } from '@/typings/common';
import { ref } from 'vue';

const serachConfig = ref<SearchComponentConfig[]>([
    {
        label: '申请日期',
        prop: 'publishTime',
        type: 'daterange',
        timeResult: ['startDate', 'endDate'],
    },
    {
        type: 'select',
        label: '状态',
        prop: 'processStatus',
        option: [],
    },
    {
        type: 'input',
        label: '模糊查询',
        prop: 'queryCondition',
    },
]);

const search = (searchForm: any) => {
    console.log(searchForm);
};
const visible = ref(false);
</script>
