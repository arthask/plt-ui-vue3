import HelloWorld from './components/HelloWorld.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vitejs.dev"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/vite.svg"), ...{ class: ("logo") }, alt: ("Vite logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vuejs.org/"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/vue.svg"), ...{ class: ("logo vue") }, alt: ("Vue logo"), });
    // @ts-ignore
    [HelloWorld,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HelloWorld, new HelloWorld({ msg: ("Vite + Vue"), }));
    const __VLS_1 = __VLS_0({ msg: ("Vite + Vue"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['vue'];
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
            HelloWorld: HelloWorld,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=App.vue.js.map