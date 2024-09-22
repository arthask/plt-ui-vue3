/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useDynamicTitle } from '@/utils/dynamicTitle';
import useAppStore from '@/store/modules/app';
import useSettingsStore from '@/store/modules/settings';
import usePermissionStore from '@/store/modules/permission';
import { handleThemeStyle } from '@/utils/theme';
import { getCurrentInstance, ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { proxy } = getCurrentInstance();
const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const showSettings = ref(false);
const theme = ref(settingsStore.theme);
const sideTheme = ref(settingsStore.sideTheme);
const storeSettings = computed(() => settingsStore);
const predefineColors = ref([
    '#409EFF',
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
]);
/** 是否需要topnav */
const topNav = computed({
    get: () => storeSettings.value.topNav,
    set: val => {
        settingsStore.changeSetting({ key: 'topNav', value: val });
        if (!val) {
            appStore.toggleSideBarHide(false);
            permissionStore.setSidebarRouters(permissionStore.defaultRoutes);
        }
    },
});
/** 是否需要tagview */
const tagsView = computed({
    get: () => storeSettings.value.tagsView,
    set: val => {
        settingsStore.changeSetting({ key: 'tagsView', value: val });
    },
});
/**是否需要固定头部 */
const fixedHeader = computed({
    get: () => storeSettings.value.fixedHeader,
    set: val => {
        settingsStore.changeSetting({ key: 'fixedHeader', value: val });
    },
});
/**是否需要侧边栏的logo */
const sidebarLogo = computed({
    get: () => storeSettings.value.sidebarLogo,
    set: val => {
        settingsStore.changeSetting({ key: 'sidebarLogo', value: val });
    },
});
/**是否需要侧边栏的动态网页的title */
const dynamicTitle = computed({
    get: () => storeSettings.value.dynamicTitle,
    set: val => {
        settingsStore.changeSetting({ key: 'dynamicTitle', value: val });
        // 动态设置网页标题
        useDynamicTitle();
    },
});
function themeChange(val) {
    settingsStore.changeSetting({ key: 'theme', value: val });
    theme.value = val;
    handleThemeStyle(val);
}
function handleTheme(val) {
    settingsStore.changeSetting({ key: 'sideTheme', value: val });
    sideTheme.value = val;
}
function saveSetting() {
    proxy.$modal.loading('正在保存到本地，请稍候...');
    let layoutSetting = {
        topNav: storeSettings.value.topNav,
        tagsView: storeSettings.value.tagsView,
        fixedHeader: storeSettings.value.fixedHeader,
        sidebarLogo: storeSettings.value.sidebarLogo,
        dynamicTitle: storeSettings.value.dynamicTitle,
        sideTheme: storeSettings.value.sideTheme,
        theme: storeSettings.value.theme,
    };
    localStorage.setItem('layout-setting', JSON.stringify(layoutSetting));
    setTimeout(proxy.$modal.closeLoading(), 1000);
}
function resetSetting() {
    proxy.$modal.loading('正在清除设置缓存并刷新，请稍候...');
    localStorage.removeItem('layout-setting');
    setTimeout('window.location.reload()', 1000);
}
function openSetting() {
    showSettings.value = true;
}
const __VLS_exposed = {
    openSetting,
};
defineExpose({
    openSetting,
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElDrawer;
    /** @type { [typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.showSettings)), withHeader: ((false)), direction: ("rtl"), size: ("300px"), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.showSettings)), withHeader: ((false)), direction: ("rtl"), size: ("300px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setting-drawer-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("drawer-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setting-drawer-block-checbox") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTheme('theme-dark');
            } }, ...{ class: ("setting-drawer-block-checbox-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/dark.svg"), alt: ("dark"), });
    if (__VLS_ctx.sideTheme === 'theme-dark') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setting-drawer-block-checbox-selectIcon") }, ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ "aria-label": ("图标: check"), ...{ class: ("anticon anticon-check") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ viewBox: ("64 64 896 896"), "data-icon": ("check"), width: ("1em"), height: ("1em"), fill: ((__VLS_ctx.theme)), "aria-hidden": ("true"), focusable: ("false"), ...{ class: (true) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTheme('theme-light');
            } }, ...{ class: ("setting-drawer-block-checbox-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/light.svg"), alt: ("light"), });
    if (__VLS_ctx.sideTheme === 'theme-light') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setting-drawer-block-checbox-selectIcon") }, ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ "aria-label": ("图标: check"), ...{ class: ("anticon anticon-check") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ viewBox: ("64 64 896 896"), "data-icon": ("check"), width: ("1em"), height: ("1em"), fill: ((__VLS_ctx.theme)), "aria-hidden": ("true"), focusable: ("false"), ...{ class: (true) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comp-style") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElColorPicker;
    /** @type { [typeof __VLS_components.ElColorPicker, typeof __VLS_components.elColorPicker, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.theme)), predefine: ((__VLS_ctx.predefineColors)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.theme)), predefine: ((__VLS_ctx.predefineColors)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onChange: (__VLS_ctx.themeChange)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("drawer-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comp-style") }, });
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.topNav)), ...{ class: ("drawer-switch") }, }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.topNav)), ...{ class: ("drawer-switch") }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comp-style") }, });
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.tagsView)), ...{ class: ("drawer-switch") }, }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.tagsView)), ...{ class: ("drawer-switch") }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comp-style") }, });
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ modelValue: ((__VLS_ctx.fixedHeader)), ...{ class: ("drawer-switch") }, }));
    const __VLS_34 = __VLS_33({ modelValue: ((__VLS_ctx.fixedHeader)), ...{ class: ("drawer-switch") }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comp-style") }, });
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ modelValue: ((__VLS_ctx.sidebarLogo)), ...{ class: ("drawer-switch") }, }));
    const __VLS_40 = __VLS_39({ modelValue: ((__VLS_ctx.sidebarLogo)), ...{ class: ("drawer-switch") }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("drawer-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comp-style") }, });
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ modelValue: ((__VLS_ctx.dynamicTitle)), ...{ class: ("drawer-switch") }, }));
    const __VLS_46 = __VLS_45({ modelValue: ((__VLS_ctx.dynamicTitle)), ...{ class: ("drawer-switch") }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, type: ("primary"), plain: (true), icon: ("DocumentAdd"), }));
    const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, type: ("primary"), plain: (true), icon: ("DocumentAdd"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    let __VLS_62;
    const __VLS_63 = {
        onClick: (__VLS_ctx.saveSetting)
    };
    let __VLS_59;
    let __VLS_60;
    __VLS_nonNullable(__VLS_61.slots).default;
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {} }, plain: (true), icon: ("Refresh"), }));
    const __VLS_66 = __VLS_65({ ...{ 'onClick': {} }, plain: (true), icon: ("Refresh"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    let __VLS_70;
    const __VLS_71 = {
        onClick: (__VLS_ctx.resetSetting)
    };
    let __VLS_67;
    let __VLS_68;
    __VLS_nonNullable(__VLS_69.slots).default;
    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['setting-drawer-title'];
    __VLS_styleScopedClasses['drawer-title'];
    __VLS_styleScopedClasses['setting-drawer-block-checbox'];
    __VLS_styleScopedClasses['setting-drawer-block-checbox-item'];
    __VLS_styleScopedClasses['setting-drawer-block-checbox-selectIcon'];
    __VLS_styleScopedClasses['anticon'];
    __VLS_styleScopedClasses['anticon-check'];
    __VLS_styleScopedClasses['setting-drawer-block-checbox-item'];
    __VLS_styleScopedClasses['setting-drawer-block-checbox-selectIcon'];
    __VLS_styleScopedClasses['anticon'];
    __VLS_styleScopedClasses['anticon-check'];
    __VLS_styleScopedClasses['drawer-item'];
    __VLS_styleScopedClasses['comp-style'];
    __VLS_styleScopedClasses['drawer-title'];
    __VLS_styleScopedClasses['drawer-item'];
    __VLS_styleScopedClasses['comp-style'];
    __VLS_styleScopedClasses['drawer-switch'];
    __VLS_styleScopedClasses['drawer-item'];
    __VLS_styleScopedClasses['comp-style'];
    __VLS_styleScopedClasses['drawer-switch'];
    __VLS_styleScopedClasses['drawer-item'];
    __VLS_styleScopedClasses['comp-style'];
    __VLS_styleScopedClasses['drawer-switch'];
    __VLS_styleScopedClasses['drawer-item'];
    __VLS_styleScopedClasses['comp-style'];
    __VLS_styleScopedClasses['drawer-switch'];
    __VLS_styleScopedClasses['drawer-item'];
    __VLS_styleScopedClasses['comp-style'];
    __VLS_styleScopedClasses['drawer-switch'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            showSettings: showSettings,
            theme: theme,
            sideTheme: sideTheme,
            predefineColors: predefineColors,
            topNav: topNav,
            tagsView: tagsView,
            fixedHeader: fixedHeader,
            sidebarLogo: sidebarLogo,
            dynamicTitle: dynamicTitle,
            themeChange: themeChange,
            handleTheme: handleTheme,
            saveSetting: saveSetting,
            resetSetting: resetSetting,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
;
//# sourceMappingURL=index.vue.js.map