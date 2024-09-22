import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
import variables from '@/assets/styles/variables.module.scss';
import useAppStore from '@/store/modules/app';
import useSettingsStore from '@/store/modules/settings';
import usePermissionStore from '@/store/modules/permission';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const sidebarRouters = computed(() => permissionStore.sidebarRouters);
const showLogo = computed(() => settingsStore.sidebarLogo);
const sideTheme = computed(() => settingsStore.sideTheme);
const theme = computed(() => settingsStore.theme);
const isCollapse = computed(() => !appStore.sidebar.opened);
const activeMenu = computed(() => {
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
        return meta.activeMenu;
    }
    return path;
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'has-logo': __VLS_ctx.showLogo })) }, ...{ style: (({
                backgroundColor: __VLS_ctx.sideTheme === 'theme-dark' ? __VLS_ctx.variables.menuBackground : __VLS_ctx.variables.menuLightBackground,
            })) }, });
    if (__VLS_ctx.showLogo) {
        // @ts-ignore
        [Logo,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Logo, new Logo({ collapse: ((__VLS_ctx.isCollapse)), }));
        const __VLS_1 = __VLS_0({ collapse: ((__VLS_ctx.isCollapse)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ class: ((__VLS_ctx.sideTheme)) }, wrapClass: ("scrollbar-wrapper"), }));
    const __VLS_7 = __VLS_6({ ...{ class: ((__VLS_ctx.sideTheme)) }, wrapClass: ("scrollbar-wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ defaultActive: ((__VLS_ctx.activeMenu)), collapse: ((__VLS_ctx.isCollapse)), backgroundColor: ((__VLS_ctx.sideTheme === 'theme-dark' ? __VLS_ctx.variables.menuBackground : __VLS_ctx.variables.menuLightBackground)), textColor: ((__VLS_ctx.sideTheme === 'theme-dark' ? __VLS_ctx.variables.menuColor : __VLS_ctx.variables.menuLightColor)), uniqueOpened: ((true)), activeTextColor: ((__VLS_ctx.theme)), collapseTransition: ((false)), mode: ("vertical"), }));
    const __VLS_13 = __VLS_12({ defaultActive: ((__VLS_ctx.activeMenu)), collapse: ((__VLS_ctx.isCollapse)), backgroundColor: ((__VLS_ctx.sideTheme === 'theme-dark' ? __VLS_ctx.variables.menuBackground : __VLS_ctx.variables.menuLightBackground)), textColor: ((__VLS_ctx.sideTheme === 'theme-dark' ? __VLS_ctx.variables.menuColor : __VLS_ctx.variables.menuLightColor)), uniqueOpened: ((true)), activeTextColor: ((__VLS_ctx.theme)), collapseTransition: ((false)), mode: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    for (const [routeItem, index] of __VLS_getVForSourceType((__VLS_ctx.sidebarRouters))) {
        // @ts-ignore
        [SidebarItem,];
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(SidebarItem, new SidebarItem({ key: ((routeItem.path + index)), item: ((routeItem)), basePath: ((routeItem.path)), }));
        const __VLS_18 = __VLS_17({ key: ((routeItem.path + index)), item: ((routeItem)), basePath: ((routeItem.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    }
    __VLS_nonNullable(__VLS_16.slots).default;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    __VLS_nonNullable(__VLS_10.slots).default;
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    __VLS_styleScopedClasses['has-logo'];
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
            Logo: Logo,
            SidebarItem: SidebarItem,
            variables: variables,
            sidebarRouters: sidebarRouters,
            showLogo: showLogo,
            sideTheme: sideTheme,
            theme: theme,
            isCollapse: isCollapse,
            activeMenu: activeMenu,
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