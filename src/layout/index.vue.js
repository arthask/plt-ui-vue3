/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useWindowSize } from '@vueuse/core';
import Sidebar from './components/Sidebar/index.vue';
import { AppMain, Navbar, Settings, TagsView } from './components';
import useAppStore from '@/store/modules/app';
import useSettingsStore from '@/store/modules/settings';
import { computed, watchEffect, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const settingsStore = useSettingsStore();
const theme = computed(() => settingsStore.theme);
const sideTheme = computed(() => settingsStore.sideTheme);
const sidebar = computed(() => useAppStore().sidebar);
const device = computed(() => useAppStore().device);
const needTagsView = computed(() => settingsStore.tagsView);
const fixedHeader = computed(() => settingsStore.fixedHeader);
const classObj = computed(() => ({
    hideSidebar: !sidebar.value.opened,
    openSidebar: sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
    mobile: device.value === 'mobile',
}));
const { width, height } = useWindowSize();
const WIDTH = 992; // refer to Bootstrap's responsive design
watchEffect(() => {
    if (device.value === 'mobile' && sidebar.value.opened) {
        useAppStore().closeSideBar({ withoutAnimation: false });
    }
    if (width.value - 1 < WIDTH) {
        useAppStore().toggleDevice('mobile');
        useAppStore().closeSideBar({ withoutAnimation: true });
    }
    else {
        useAppStore().toggleDevice('desktop');
    }
});
function handleClickOutside() {
    useAppStore().closeSideBar({ withoutAnimation: false });
}
const settingRef = ref(null);
function setLayout() {
    settingRef.value?.openSetting();
}
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
    __VLS_styleScopedClasses['fixed-header'];
    __VLS_styleScopedClasses['fixed-header'];
    __VLS_styleScopedClasses['mobile'];
    __VLS_styleScopedClasses['fixed-header'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.classObj)) }, ...{ class: ("app-wrapper") }, ...{ style: (({ '--current-color': __VLS_ctx.theme })) }, });
    if (__VLS_ctx.device === 'mobile' && __VLS_ctx.sidebar.opened) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleClickOutside) }, ...{ class: ("drawer-bg") }, });
    }
    if (!__VLS_ctx.sidebar.hide) {
        // @ts-ignore
        [Sidebar,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({ ...{ class: ("sidebar-container") }, }));
        const __VLS_1 = __VLS_0({ ...{ class: ("sidebar-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ hasTagsView: __VLS_ctx.needTagsView, sidebarHide: __VLS_ctx.sidebar.hide })) }, ...{ class: ("main-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'fixed-header': __VLS_ctx.fixedHeader })) }, });
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.navbar;
    /** @type { [typeof __VLS_components.Navbar, typeof __VLS_components.navbar, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onSetLayout': {} }, }));
    const __VLS_7 = __VLS_6({ ...{ 'onSetLayout': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    let __VLS_11;
    const __VLS_12 = {
        onSetLayout: (__VLS_ctx.setLayout)
    };
    let __VLS_8;
    let __VLS_9;
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    if (__VLS_ctx.needTagsView) {
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.TagsView;
        /** @type { [typeof __VLS_components.TagsView, typeof __VLS_components.tagsView, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
        const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    }
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.AppMain;
    /** @type { [typeof __VLS_components.AppMain, typeof __VLS_components.appMain, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.settings;
    /** @type { [typeof __VLS_components.Settings, typeof __VLS_components.settings, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ref: ("settingRef"), }));
    const __VLS_27 = __VLS_26({ ref: ("settingRef"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    // @ts-ignore navigation for `const settingRef = ref()`
    __VLS_ctx.settingRef;
    var __VLS_31 = {};
    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
    __VLS_styleScopedClasses['app-wrapper'];
    __VLS_styleScopedClasses['drawer-bg'];
    __VLS_styleScopedClasses['sidebar-container'];
    __VLS_styleScopedClasses['hasTagsView'];
    __VLS_styleScopedClasses['sidebarHide'];
    __VLS_styleScopedClasses['main-container'];
    __VLS_styleScopedClasses['fixed-header'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "settingRef": __VLS_31,
    };
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
            Sidebar: Sidebar,
            AppMain: AppMain,
            Navbar: Navbar,
            Settings: Settings,
            TagsView: TagsView,
            theme: theme,
            sidebar: sidebar,
            device: device,
            needTagsView: needTagsView,
            fixedHeader: fixedHeader,
            classObj: classObj,
            handleClickOutside: handleClickOutside,
            settingRef: settingRef,
            setLayout: setLayout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=index.vue.js.map