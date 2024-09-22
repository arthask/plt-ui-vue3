import { onActivated, onMounted, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const searchForm = ref({});
const searchFormRef = ref();
const emits = defineEmits(['search']);
const search = () => {
    // 复制一份searchForm，不改变源数据
    const params = {
        ...searchForm.value,
    };
    // 遍历props.config，如果item.timeResult存在，且item.type包含range，则进行处理
    props.config.forEach(item => {
        if (item.timeResult && item.type.includes('range')) {
            if (Array.isArray(item.timeResult)) {
                if (params[item.prop]) {
                    // 设置params[item.timeResult[0]]和params[item.timeResult[1]]的值
                    Reflect.set(params, item.timeResult[0], params[item.prop][0]);
                    Reflect.set(params, item.timeResult[1], params[item.prop][1]);
                    // 删除params[item.prop]
                    Reflect.deleteProperty(params, item.prop);
                }
            }
        }
    });
    emits('search', params);
};
const reset = () => {
    searchFormRef.value?.resetFields();
    search();
};
onMounted(() => {
    search();
});
onActivated(() => {
    search();
});
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ shadow: ("never"), bodyStyle: (({ padding: '20px 20px 0px 20px' })), }));
    const __VLS_2 = __VLS_1({ shadow: ("never"), bodyStyle: (({ padding: '20px 20px 0px 20px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ref: ("searchFormRef"), model: ((__VLS_ctx.searchForm)), inline: (true), }));
    const __VLS_8 = __VLS_7({ ref: ("searchFormRef"), model: ((__VLS_ctx.searchForm)), inline: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore navigation for `const searchFormRef = ref()`
    __VLS_ctx.searchFormRef;
    var __VLS_12 = {};
    for (const [item] of __VLS_getVForSourceType((props.config))) {
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ key: ((item.prop)), label: ((item.label)), prop: ((item.prop)), }));
        const __VLS_15 = __VLS_14({ key: ((item.prop)), label: ((item.label)), prop: ((item.prop)), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        if (item.type === 'input') {
            const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
            /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
            // @ts-ignore
            const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ modelValue: ((__VLS_ctx.searchForm[item.prop])), placeholder: ((item.placeholder ? item.placeholder : '请输入')), clearable: (true), }));
            const __VLS_21 = __VLS_20({ modelValue: ((__VLS_ctx.searchForm[item.prop])), placeholder: ((item.placeholder ? item.placeholder : '请输入')), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        }
        if (item.type === 'select') {
            const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
            /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
            // @ts-ignore
            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ modelValue: ((__VLS_ctx.searchForm[item.prop])), filterable: (true), clearable: (true), placeholder: ((item.placeholder ? item.placeholder : '请选择')), }));
            const __VLS_27 = __VLS_26({ modelValue: ((__VLS_ctx.searchForm[item.prop])), filterable: (true), clearable: (true), placeholder: ((item.placeholder ? item.placeholder : '请选择')), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            for (const [opt] of __VLS_getVForSourceType((item.option))) {
                const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
                /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
                // @ts-ignore
                const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ key: ((opt.value)), label: ((opt.label)), value: ((opt.value)), }));
                const __VLS_33 = __VLS_32({ key: ((opt.value)), label: ((opt.label)), value: ((opt.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
            }
            __VLS_nonNullable(__VLS_30.slots).default;
            const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        }
        if (item.type === 'daterange' ||
            item.type === 'datetimerange' ||
            item.type === 'year' ||
            item.type === 'monthrange') {
            const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.ElDatePicker;
            /** @type { [typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ] } */
            // @ts-ignore
            const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ modelValue: ((__VLS_ctx.searchForm[item.prop])), type: ((item.type)), rangeSeparator: ("至"), startPlaceholder: ("开始日期"), endPlaceholder: ("结束日期"), valueFormat: ("x"), }));
            const __VLS_39 = __VLS_38({ modelValue: ((__VLS_ctx.searchForm[item.prop])), type: ((item.type)), rangeSeparator: ("至"), startPlaceholder: ("开始日期"), endPlaceholder: ("结束日期"), valueFormat: ("x"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        }
        __VLS_nonNullable(__VLS_18.slots).default;
        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    }
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
    const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_51 = __VLS_50({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    let __VLS_55;
    const __VLS_56 = {
        onClick: (__VLS_ctx.search)
    };
    let __VLS_52;
    let __VLS_53;
    __VLS_nonNullable(__VLS_54.slots).default;
    const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{ 'onClick': {} }, }));
    const __VLS_59 = __VLS_58({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    let __VLS_63;
    const __VLS_64 = {
        onClick: (__VLS_ctx.reset)
    };
    let __VLS_60;
    let __VLS_61;
    __VLS_nonNullable(__VLS_62.slots).default;
    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
    var __VLS_65 = {};
    __VLS_nonNullable(__VLS_48.slots).default;
    const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "searchFormRef": __VLS_12,
    };
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
            searchForm: searchForm,
            searchFormRef: searchFormRef,
            search: search,
            reset: reset,
        };
    },
    emits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
export default {};
;
//# sourceMappingURL=index.vue.js.map