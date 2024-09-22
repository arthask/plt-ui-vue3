/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import variables from '@/assets/styles/variables.module.scss';
import logo from '@/assets/logo/logo.png';
import useSettingsStore from '@/store/modules/settings';
// import collapse from 'element-plus/es/components/collapse';
import { ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    collapse: {
        type: Boolean,
        required: true,
    },
});
const title = ref('若依管理系统');
const settingsStore = useSettingsStore();
const sideTheme = computed(() => settingsStore.sideTheme);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        collapse: {
            type: Boolean,
            required: true,
        },
    },
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
    __VLS_styleScopedClasses['sidebar-logo'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar-logo-container") }, ...{ class: (({ collapse: __VLS_ctx.collapse })) }, ...{ style: (({
                backgroundColor: __VLS_ctx.sideTheme === 'theme-dark' ? __VLS_ctx.variables.menuBackground : __VLS_ctx.variables.menuLightBackground,
            })) }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("sidebarLogoFade"), }));
    const __VLS_2 = __VLS_1({ name: ("sidebarLogoFade"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.collapse) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ("collapse"), ...{ class: ("sidebar-logo-link") }, to: ("/"), }));
        const __VLS_8 = __VLS_7({ key: ("collapse"), ...{ class: ("sidebar-logo-link") }, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        if (__VLS_ctx.logo) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.logo)), ...{ class: ("sidebar-logo") }, });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("sidebar-title") }, ...{ style: (({
                        color: __VLS_ctx.sideTheme === 'theme-dark'
                            ? __VLS_ctx.variables.logoTitleColor
                            : __VLS_ctx.variables.logoLightTitleColor,
                    })) }, });
            (__VLS_ctx.title);
        }
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    else {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ("expand"), ...{ class: ("sidebar-logo-link") }, to: ("/"), }));
        const __VLS_14 = __VLS_13({ key: ("expand"), ...{ class: ("sidebar-logo-link") }, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        if (__VLS_ctx.logo) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.logo)), ...{ class: ("sidebar-logo") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("sidebar-title") }, ...{ style: (({
                    color: __VLS_ctx.sideTheme === 'theme-dark'
                        ? __VLS_ctx.variables.logoTitleColor
                        : __VLS_ctx.variables.logoLightTitleColor,
                })) }, });
        (__VLS_ctx.title);
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['sidebar-logo-container'];
    __VLS_styleScopedClasses['collapse'];
    __VLS_styleScopedClasses['sidebar-logo-link'];
    __VLS_styleScopedClasses['sidebar-logo'];
    __VLS_styleScopedClasses['sidebar-title'];
    __VLS_styleScopedClasses['sidebar-logo-link'];
    __VLS_styleScopedClasses['sidebar-logo'];
    __VLS_styleScopedClasses['sidebar-title'];
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
            variables: variables,
            logo: logo,
            title: title,
            sideTheme: sideTheme,
        };
    },
    props: {
        collapse: {
            type: Boolean,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        collapse: {
            type: Boolean,
            required: true,
        },
    },
});
;
//# sourceMappingURL=Logo.vue.js.map