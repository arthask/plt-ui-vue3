import { withDefaults } from 'vue';
import { DateTimeFormat } from '@/typings/common';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    index: true,
});
const colors = [
    { color: '#F56C6C', percentage: 50 },
    { color: '#E6A23C', percentage: 60 },
    { color: '#409EFF', percentage: 80 },
    { color: '#67C23A', percentage: 100 },
];
const __VLS_withDefaultsArg = (function (t) { return t; })({
    index: true,
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((props.data)), ...(__VLS_ctx.$attrs), }));
    const __VLS_2 = __VLS_1({ data: ((props.data)), ...(__VLS_ctx.$attrs), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (props.index) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ align: ("center"), label: ("序号"), type: ("index"), width: ("60"), }));
        const __VLS_8 = __VLS_7({ align: ("center"), label: ("序号"), type: ("index"), width: ("60"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    for (const [col] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((col.label)), prop: ((col.prop)), label: ((col.label)), width: ((col.width)), align: ("center"), }));
        const __VLS_14 = __VLS_13({ key: ((col.label)), prop: ((col.prop)), label: ((col.label)), width: ((col.width)), align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        if (col.template === 'date') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
                const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
                (__VLS_ctx.parseTime(row[col.prop], __VLS_ctx.DateTimeFormat.DATE));
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        __VLS_directiveAsFunction(__VLS_directives.vElseIf)(null, { ...__VLS_directiveBindingRestFields, value: (col.template === 'progress') }, null, null);
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
            const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElProgress;
            /** @type { [typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ textInside: ((true)), strokeWidth: ((16)), percentage: ((row[col.prop] <= 1 ? row[col.prop] * 100 : row[col.prop])), color: ((row.color ? row.color : __VLS_ctx.colors)), }));
            const __VLS_20 = __VLS_19({ textInside: ((true)), strokeWidth: ((16)), percentage: ((row[col.prop] <= 1 ? row[col.prop] * 100 : row[col.prop])), color: ((row.color ? row.color : __VLS_ctx.colors)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        __VLS_directiveAsFunction(__VLS_directives.vElseIf)(null, { ...__VLS_directiveBindingRestFields, value: (col.slot) }, null, null);
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
            const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
            var __VLS_24 = {
                row: ((row)),
            };
            var __VLS_25 = (col.slot);
        }
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    var __VLS_26 = {};
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
            DateTimeFormat: DateTimeFormat,
            colors: colors,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default {};
;
//# sourceMappingURL=index.vue.js.map