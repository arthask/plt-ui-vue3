/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ElMessageBox } from 'element-plus';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import TopNav from '@/components/TopNav/index.vue';
import Hamburger from '@/components/Hamburger/index.vue';
import Screenfull from '@/components/Screenfull/index.vue';
import SizeSelect from '@/components/SizeSelect/index.vue';
import HeaderSearch from '@/components/HeaderSearch/index.vue';
import RuoYiGit from '@/components/RuoYi/Git/index.vue';
import RuoYiDoc from '@/components/RuoYi/Doc/index.vue';
import useAppStore from '@/store/modules/app';
import useUserStore from '@/store/modules/user';
import useSettingsStore from '@/store/modules/settings';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const appStore = useAppStore();
const userStore = useUserStore();
const settingsStore = useSettingsStore();
function toggleSideBar() {
    appStore.toggleSideBar();
}
function handleCommand(command) {
    switch (command) {
        case 'setLayout':
            setLayout();
            break;
        case 'logout':
            logout();
            break;
        default:
            break;
    }
}
function logout() {
    ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
        userStore.logOut().then(() => {
            location.href = '/index';
        });
    });
    // .catch(() => {});
}
const emits = defineEmits(['setLayout']);
function setLayout() {
    emits('setLayout');
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar") }, });
    // @ts-ignore
    [Hamburger,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Hamburger, new Hamburger({ ...{ 'onToggleClick': {} }, id: ("hamburger-container"), isActive: ((__VLS_ctx.appStore.sidebar.opened)), ...{ class: ("hamburger-container") }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onToggleClick': {} }, id: ("hamburger-container"), isActive: ((__VLS_ctx.appStore.sidebar.opened)), ...{ class: ("hamburger-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onToggleClick: (__VLS_ctx.toggleSideBar)
    };
    let __VLS_2;
    let __VLS_3;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(Hamburger, __VLS_1);
    if (!__VLS_ctx.settingsStore.topNav) {
        // @ts-ignore
        [Breadcrumb,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(Breadcrumb, new Breadcrumb({ id: ("breadcrumb-container"), ...{ class: ("breadcrumb-container") }, }));
        const __VLS_8 = __VLS_7({ id: ("breadcrumb-container"), ...{ class: ("breadcrumb-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    if (__VLS_ctx.settingsStore.topNav) {
        // @ts-ignore
        [TopNav,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(TopNav, new TopNav({ id: ("topmenu-container"), ...{ class: ("topmenu-container") }, }));
        const __VLS_13 = __VLS_12({ id: ("topmenu-container"), ...{ class: ("topmenu-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("right-menu") }, });
    if (__VLS_ctx.appStore.device !== 'mobile') {
        // @ts-ignore
        [HeaderSearch,];
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(HeaderSearch, new HeaderSearch({ id: ("header-search"), ...{ class: ("right-menu-item") }, }));
        const __VLS_18 = __VLS_17({ id: ("header-search"), ...{ class: ("right-menu-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ content: ("源码地址"), effect: ("dark"), placement: ("bottom"), }));
        const __VLS_24 = __VLS_23({ content: ("源码地址"), effect: ("dark"), placement: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        // @ts-ignore
        [RuoYiGit,];
        // @ts-ignore
        const __VLS_28 = __VLS_asFunctionalComponent(RuoYiGit, new RuoYiGit({ id: ("ruoyi-git"), ...{ class: ("right-menu-item hover-effect") }, }));
        const __VLS_29 = __VLS_28({ id: ("ruoyi-git"), ...{ class: ("right-menu-item hover-effect") }, }, ...__VLS_functionalComponentArgsRest(__VLS_28));
        __VLS_nonNullable(__VLS_27.slots).default;
        const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
        const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ content: ("文档地址"), effect: ("dark"), placement: ("bottom"), }));
        const __VLS_35 = __VLS_34({ content: ("文档地址"), effect: ("dark"), placement: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        // @ts-ignore
        [RuoYiDoc,];
        // @ts-ignore
        const __VLS_39 = __VLS_asFunctionalComponent(RuoYiDoc, new RuoYiDoc({ id: ("ruoyi-doc"), ...{ class: ("right-menu-item hover-effect") }, }));
        const __VLS_40 = __VLS_39({ id: ("ruoyi-doc"), ...{ class: ("right-menu-item hover-effect") }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        __VLS_nonNullable(__VLS_38.slots).default;
        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
        // @ts-ignore
        [Screenfull,];
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(Screenfull, new Screenfull({ id: ("screenfull"), ...{ class: ("right-menu-item hover-effect") }, }));
        const __VLS_45 = __VLS_44({ id: ("screenfull"), ...{ class: ("right-menu-item hover-effect") }, }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ content: ("布局大小"), effect: ("dark"), placement: ("bottom"), }));
        const __VLS_51 = __VLS_50({ content: ("布局大小"), effect: ("dark"), placement: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        // @ts-ignore
        [SizeSelect,];
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(SizeSelect, new SizeSelect({ id: ("size-select"), ...{ class: ("right-menu-item hover-effect") }, }));
        const __VLS_56 = __VLS_55({ id: ("size-select"), ...{ class: ("right-menu-item hover-effect") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_nonNullable(__VLS_54.slots).default;
        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("avatar-container") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
    /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onCommand': {} }, ...{ class: ("right-menu-item hover-effect") }, trigger: ("click"), }));
    const __VLS_62 = __VLS_61({ ...{ 'onCommand': {} }, ...{ class: ("right-menu-item hover-effect") }, trigger: ("click"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    let __VLS_66;
    const __VLS_67 = {
        onCommand: (__VLS_ctx.handleCommand)
    };
    let __VLS_63;
    let __VLS_64;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("avatar-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.userStore.avatar)), ...{ class: ("user-avatar") }, });
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
    const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.CaretBottom;
    /** @type { [typeof __VLS_components.CaretBottom, typeof __VLS_components.caretBottom, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
    const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
    __VLS_nonNullable(__VLS_73.slots).default;
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_65.slots);
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
        /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({}));
        const __VLS_82 = __VLS_81({}, ...__VLS_functionalComponentArgsRest(__VLS_81));
        const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ to: ("/user/profile"), }));
        const __VLS_88 = __VLS_87({ to: ("/user/profile"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
        // @ts-ignore
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
        const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
        __VLS_nonNullable(__VLS_97.slots).default;
        const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
        __VLS_nonNullable(__VLS_91.slots).default;
        const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
        const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
        // @ts-ignore
        const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ command: ("setLayout"), }));
        const __VLS_100 = __VLS_99({ command: ("setLayout"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_103.slots).default;
        const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
        const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
        // @ts-ignore
        const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ divided: (true), command: ("logout"), }));
        const __VLS_106 = __VLS_105({ divided: (true), command: ("logout"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_109.slots).default;
        const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
        __VLS_nonNullable(__VLS_85.slots).default;
        const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    }
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['hamburger-container'];
    __VLS_styleScopedClasses['breadcrumb-container'];
    __VLS_styleScopedClasses['topmenu-container'];
    __VLS_styleScopedClasses['right-menu'];
    __VLS_styleScopedClasses['right-menu-item'];
    __VLS_styleScopedClasses['right-menu-item'];
    __VLS_styleScopedClasses['hover-effect'];
    __VLS_styleScopedClasses['right-menu-item'];
    __VLS_styleScopedClasses['hover-effect'];
    __VLS_styleScopedClasses['right-menu-item'];
    __VLS_styleScopedClasses['hover-effect'];
    __VLS_styleScopedClasses['right-menu-item'];
    __VLS_styleScopedClasses['hover-effect'];
    __VLS_styleScopedClasses['avatar-container'];
    __VLS_styleScopedClasses['right-menu-item'];
    __VLS_styleScopedClasses['hover-effect'];
    __VLS_styleScopedClasses['avatar-wrapper'];
    __VLS_styleScopedClasses['user-avatar'];
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
            Breadcrumb: Breadcrumb,
            TopNav: TopNav,
            Hamburger: Hamburger,
            Screenfull: Screenfull,
            SizeSelect: SizeSelect,
            HeaderSearch: HeaderSearch,
            RuoYiGit: RuoYiGit,
            RuoYiDoc: RuoYiDoc,
            appStore: appStore,
            userStore: userStore,
            settingsStore: settingsStore,
            toggleSideBar: toggleSideBar,
            handleCommand: handleCommand,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
;
//# sourceMappingURL=Navbar.vue.js.map