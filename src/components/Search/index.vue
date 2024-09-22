<template>
    <el-card shadow="never" :body-style="{ padding: '20px 20px 0px 20px' }">
        <el-form ref="searchFormRef" :model="searchForm" inline>
            <el-form-item v-for="item in props.config" :key="item.prop" :label="item.label" :prop="item.prop">
                <el-input
                    v-if="item.type === 'input'"
                    v-model="searchForm[item.prop]"
                    :placeholder="item.placeholder ? item.placeholder : '请输入'"
                    clearable
                ></el-input>
                <el-select
                    v-if="item.type === 'select'"
                    v-model="searchForm[item.prop]"
                    filterable
                    clearable
                    :placeholder="item.placeholder ? item.placeholder : '请选择'"
                >
                    <el-option
                        v-for="opt in item.option"
                        :key="opt.value"
                        :label="opt.label"
                        :value="opt.value"
                    ></el-option>
                </el-select>
                <el-date-picker
                    v-if="
                        item.type === 'daterange' ||
                        item.type === 'datetimerange' ||
                        item.type === 'year' ||
                        item.type === 'monthrange'
                    "
                    v-model="searchForm[item.prop]"
                    :type="item.type"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="x"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
                <el-button @click="reset">重置</el-button>
                <slot></slot>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { SearchComponentConfig } from '@/typings/common';
import { FormInstance } from 'element-plus';
import { onActivated, onMounted, ref } from 'vue';

const props = defineProps<{ config: SearchComponentConfig[] }>();
const searchForm = ref<any>({});
const searchFormRef = ref<FormInstance>();
const emits = defineEmits(['search']);
const search = () => {
    // 复制一份searchForm，不改变源数据
    const params = {
        ...searchForm.value,
    };
    // 遍历props.config，如果item.timeResult存在，且item.type包含range，则进行处理
    props.config.forEach(item => {
        if (item.timeResult && item.type.includes('range')) {
            if (Array.isArray(item.timeResult)) {
                if (params[item.prop]) {
                    // 设置params[item.timeResult[0]]和params[item.timeResult[1]]的值
                    Reflect.set(params, item.timeResult[0], params[item.prop][0]);
                    Reflect.set(params, item.timeResult[1], params[item.prop][1]);
                    // 删除params[item.prop]
                    Reflect.deleteProperty(params, item.prop);
                }
            }
        }
    });
    emits('search', params);
};
const reset = () => {
    searchFormRef.value?.resetFields();
    search();
};
onMounted(() => {
    search();
});
onActivated(() => {
    search();
});
</script>

<style lang="scss" scoped>
.el-card {
    margin-bottom: 20px;
}
</style>
