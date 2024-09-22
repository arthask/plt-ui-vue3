/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let message = computed(() => {
    return '找不到网页！';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wscn-http404-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wscn-http404") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pic-404") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("pic-404__parent") }, src: ("@/assets/404_images/404.png"), alt: ("404"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("pic-404__child left") }, src: ("@/assets/404_images/404_cloud.png"), alt: ("404"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("pic-404__child mid") }, src: ("@/assets/404_images/404_cloud.png"), alt: ("404"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("pic-404__child right") }, src: ("@/assets/404_images/404_cloud.png"), alt: ("404"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bullshit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bullshit__oops") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bullshit__headline") }, });
    (__VLS_ctx.message);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bullshit__info") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/index"), ...{ class: ("bullshit__return-home") }, }));
    const __VLS_2 = __VLS_1({ to: ("/index"), ...{ class: ("bullshit__return-home") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['wscn-http404-container'];
    __VLS_styleScopedClasses['wscn-http404'];
    __VLS_styleScopedClasses['pic-404'];
    __VLS_styleScopedClasses['pic-404__parent'];
    __VLS_styleScopedClasses['pic-404__child'];
    __VLS_styleScopedClasses['left'];
    __VLS_styleScopedClasses['pic-404__child'];
    __VLS_styleScopedClasses['mid'];
    __VLS_styleScopedClasses['pic-404__child'];
    __VLS_styleScopedClasses['right'];
    __VLS_styleScopedClasses['bullshit'];
    __VLS_styleScopedClasses['bullshit__oops'];
    __VLS_styleScopedClasses['bullshit__headline'];
    __VLS_styleScopedClasses['bullshit__info'];
    __VLS_styleScopedClasses['bullshit__return-home'];
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
            message: message,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=404.vue.js.map