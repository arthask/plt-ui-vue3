<template>
  <el-config-provider :size="size" :locale="locale" :z-index="3000">
      <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings';
import { handleThemeStyle } from '@/utils/theme';
import { nextTick, onMounted, computed } from 'vue';
import useAppStore from '@/store/modules/app';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

const size = computed(() => {
  return useAppStore().size;
});
const lang = computed(() => {
  return useAppStore().lang;
});
const locale = computed(() => (lang.value === 'zh-cn' ? zhCn : en));

onMounted(() => {
  nextTick(() => {
      // 初始化主题样式
      handleThemeStyle(useSettingsStore().theme);
      document.getElementsByTagName('html')[0].classList.add('light');
  });
});
</script>
