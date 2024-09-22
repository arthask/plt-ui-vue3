import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    // 数据
    options: {
        type: Array,
        default: null,
    },
    // 当前的值
    value: [Number, String, Array],
});
const values = computed(() => {
    if (props.value !== null && typeof props.value !== 'undefined') {
        return Array.isArray(props.value) ? props.value : [String(props.value)];
    }
    else {
        return [];
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        // 数据
        options: {
            type: Array,
            default: null,
        },
        // 当前的值
        value: [Number, String, Array],
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
    __VLS_styleScopedClasses['el-tag'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.options))) {
        if (__VLS_ctx.values.includes(item.value)) {
            if (item.elTagType == 'default' || item.elTagType == '') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((item.value)), index: ((index)), ...{ class: ((item.elTagClass)) }, });
                (item.label);
            }
            else {
                const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
                /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
                // @ts-ignore
                const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((item.value + '')), disableTransitions: ((true)), index: ((index)), type: ((item.elTagType === 'primary' ? '' : item.elTagType)), ...{ class: ((item.elTagClass)) }, }));
                const __VLS_2 = __VLS_1({ key: ((item.value + '')), disableTransitions: ((true)), index: ((index)), type: ((item.elTagType === 'primary' ? '' : item.elTagType)), ...{ class: ((item.elTagClass)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
                (item.label);
                __VLS_nonNullable(__VLS_5.slots).default;
                const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
            }
        }
    }
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
            values: values,
        };
    },
    props: {
        // 数据
        options: {
            type: Array,
            default: null,
        },
        // 当前的值
        value: [Number, String, Array],
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        // 数据
        options: {
            type: Array,
            default: null,
        },
        // 当前的值
        value: [Number, String, Array],
    },
});
;
//# sourceMappingURL=index.vue.js.map