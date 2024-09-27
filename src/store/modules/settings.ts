import defaultSettings from '@/settings';
import { useDynamicTitle } from '@/utils/dynamicTitle';
import { defineStore } from 'pinia';

const { sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo, dynamicTitle } = defaultSettings;

const storageSetting = JSON.parse(localStorage.getItem('layout-setting') ?? '{}') || '';

const colorSchemaSetting = JSON.parse(localStorage.getItem("color-scheme-setting") ?? '{}') || '';

const useSettingsStore = defineStore('settings', {
    state: () => ({
        title: '',
        theme: storageSetting.theme || '#409EFF',
        showSettings: showSettings,
        topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
        tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
        fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
        sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo,
        dynamicTitle: storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle,
        sideTheme: colorSchemaSetting.sideTheme,
        // myColorSchema: colorSchemaSetting.myColorSchema
    }),
    actions: {
        // 修改布局设置
        changeSetting(data: any) {
            const { key, value } = data;
            if (this.hasOwnProperty(key)) {
                Reflect.set(this, key, value);
                // this[key] = value;
            }
        },
        // 设置网页标题
        setTitle(title: string) {
            this.title = title;
            useDynamicTitle();
        },
        setMyColorSchema(theme: string) {
            this.sideTheme = theme;
            const colorSchema = theme as string === 'theme-dark' ? 'light' : 'auto';
            // this.myColorSchema = this.myColorSchema = theme;
            let layoutSetting = {
                sideTheme: theme,
                // myColorSchema: colorSchema,
            };
            localStorage.setItem('color-scheme-setting', JSON.stringify(layoutSetting));
        },
    },
});

export default useSettingsStore;
