import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
});
const emit = defineEmits(['update:modelValue', 'close', 'submit']);
const visible = computed({
    get: () => {
        return props.modelValue;
    },
    set: value => {
        emit('update:modelValue', value);
    },
});
const cancel = () => {
    emit('close');
};
const submit = () => {
    emit('submit');
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.visible)), ...(__VLS_ctx.$attrs), width: ("800px"), center: (true), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.visible)), ...(__VLS_ctx.$attrs), width: ("800px"), center: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        var __VLS_7 = {};
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dialog-footer") }, });
        const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, }));
        const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        let __VLS_14;
        const __VLS_15 = {
            onClick: (__VLS_ctx.cancel)
        };
        let __VLS_11;
        let __VLS_12;
        __VLS_nonNullable(__VLS_13.slots).default;
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
        const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        let __VLS_22;
        const __VLS_23 = {
            onClick: (__VLS_ctx.submit)
        };
        let __VLS_19;
        let __VLS_20;
        __VLS_nonNullable(__VLS_21.slots).default;
        const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        __VLS_nonNullable(__VLS_5.slots).default;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['dialog-footer'];
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
            visible: visible,
            cancel: cancel,
            submit: submit,
        };
    },
    emits: {},
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
});
export default {};
;
//# sourceMappingURL=index.vue.js.map