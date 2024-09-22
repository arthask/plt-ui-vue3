import { isExternal } from '@/utils/validate';
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    to: {
        type: [String, Object],
        required: true,
    },
});
const isExt = computed(() => {
    return isExternal(props.to);
});
const type = computed(() => {
    if (isExt.value) {
        return 'a';
    }
    return 'router-link';
});
function linkProps() {
    if (isExt.value) {
        return {
            href: props.to,
            target: '_blank',
            rel: 'noopener',
        };
    }
    return {
        to: props.to,
    };
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        to: {
            type: [String, Object],
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = ((__VLS_ctx.type));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.linkProps()), }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.linkProps()), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
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
            type: type,
            linkProps: linkProps,
        };
    },
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
    },
});
export default {};
;
//# sourceMappingURL=Link.vue.js.map