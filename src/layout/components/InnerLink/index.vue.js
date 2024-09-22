/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    src: {
        type: String,
        default: '/',
    },
    iframeId: {
        type: String,
    },
});
const height = ref(document.documentElement.clientHeight - 94.5 + 'px');
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        src: {
            type: String,
            default: '/',
        },
        iframeId: {
            type: String,
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (('height:' + __VLS_ctx.height)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ id: ((__VLS_ctx.iframeId)), ...{ style: ({}) }, src: ((__VLS_ctx.src)), frameborder: ("no"), });
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
            height: height,
        };
    },
    props: {
        src: {
            type: String,
            default: '/',
        },
        iframeId: {
            type: String,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        src: {
            type: String,
            default: '/',
        },
        iframeId: {
            type: String,
        },
    },
});
;
//# sourceMappingURL=index.vue.js.map