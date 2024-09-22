import errImage from '@/assets/401_images/401.gif';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const errGif = ref(errImage + '?' + +new Date());
function back() {
    if (route.query.noGoBack) {
        router.push({ path: '/' });
    }
    else {
        router.go(-1);
    }
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("errPage-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, icon: ("arrow-left"), ...{ class: ("pan-back-btn") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, icon: ("arrow-left"), ...{ class: ("pan-back-btn") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.back)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ span: ((12)), }));
    const __VLS_16 = __VLS_15({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-jumbo text-ginormous") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-unstyled") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("link-type") }, });
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ to: ("/"), }));
    const __VLS_22 = __VLS_21({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_nonNullable(__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ span: ((12)), }));
    const __VLS_28 = __VLS_27({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.errGif)), width: ("313"), height: ("428"), alt: ("Girl has dropped her ice cream."), });
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_styleScopedClasses['errPage-container'];
    __VLS_styleScopedClasses['pan-back-btn'];
    __VLS_styleScopedClasses['text-jumbo'];
    __VLS_styleScopedClasses['text-ginormous'];
    __VLS_styleScopedClasses['list-unstyled'];
    __VLS_styleScopedClasses['link-type'];
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
            errGif: errGif,
            back: back,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=401.vue.js.map