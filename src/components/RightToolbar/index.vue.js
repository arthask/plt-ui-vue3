import { ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    showSearch: {
        type: Boolean,
        default: true,
    },
    columns: {
        type: Array,
    },
    search: {
        type: Boolean,
        default: true,
    },
    gutter: {
        type: Number,
        default: 10,
    },
});
const emits = defineEmits(['update:showSearch', 'queryTable']);
// 显隐数据
const value = ref([]);
// 弹出层标题
const title = ref('显示/隐藏');
// 是否显示弹出层
const open = ref(false);
const style = computed(() => {
    const ret = {};
    if (props.gutter) {
        ret.marginRight = `${props.gutter / 2}px`;
    }
    return ret;
});
// 搜索
function toggleSearch() {
    emits('update:showSearch', !props.showSearch);
}
// 刷新
function refresh() {
    emits('queryTable');
}
// 右侧列表元素变化
function dataChange(data) {
    for (let item in props.columns) {
        const key = props.columns[item].key;
        // eslint-disable-next-line vue/no-mutating-props
        props.columns[item].visible = !data.includes(key);
    }
}
// 打开显隐列dialog
function showColumn() {
    open.value = true;
}
// 显隐列初始默认隐藏列
for (let item in props.columns) {
    if (props.columns[item].visible === false) {
        value.value.push(parseInt(item));
    }
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        showSearch: {
            type: Boolean,
            default: true,
        },
        columns: {
            type: Array,
        },
        search: {
            type: Boolean,
            default: true,
        },
        gutter: {
            type: Number,
            default: 10,
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("top-right-btn") }, ...{ style: ((__VLS_ctx.style)) }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.search) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("item") }, effect: ("dark"), content: ((__VLS_ctx.showSearch ? '隐藏搜索' : '显示搜索')), placement: ("top"), }));
        const __VLS_8 = __VLS_7({ ...{ class: ("item") }, effect: ("dark"), content: ((__VLS_ctx.showSearch ? '隐藏搜索' : '显示搜索')), placement: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, circle: (true), icon: ("Search"), }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, circle: (true), icon: ("Search"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        let __VLS_18;
        const __VLS_19 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.search)))
                    return;
                __VLS_ctx.toggleSearch();
            }
        };
        let __VLS_15;
        let __VLS_16;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
    /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("item") }, effect: ("dark"), content: ("刷新"), placement: ("top"), }));
    const __VLS_22 = __VLS_21({ ...{ class: ("item") }, effect: ("dark"), content: ("刷新"), placement: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, circle: (true), icon: ("Refresh"), }));
    const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, circle: (true), icon: ("Refresh"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (...[$event]) => {
            __VLS_ctx.refresh();
        }
    };
    let __VLS_29;
    let __VLS_30;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    __VLS_nonNullable(__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    if (__VLS_ctx.columns) {
        const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{ class: ("item") }, effect: ("dark"), content: ("显隐列"), placement: ("top"), }));
        const __VLS_36 = __VLS_35({ ...{ class: ("item") }, effect: ("dark"), content: ("显隐列"), placement: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
        const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, circle: (true), icon: ("Menu"), }));
        const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, circle: (true), icon: ("Menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
        let __VLS_46;
        const __VLS_47 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.columns)))
                    return;
                __VLS_ctx.showColumn();
            }
        };
        let __VLS_43;
        let __VLS_44;
        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
        __VLS_nonNullable(__VLS_39.slots).default;
        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ modelValue: ((__VLS_ctx.open)), title: ((__VLS_ctx.title)), appendToBody: (true), }));
    const __VLS_50 = __VLS_49({ modelValue: ((__VLS_ctx.open)), title: ((__VLS_ctx.title)), appendToBody: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElTransfer;
    /** @type { [typeof __VLS_components.ElTransfer, typeof __VLS_components.elTransfer, typeof __VLS_components.ElTransfer, typeof __VLS_components.elTransfer, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.value)), titles: ((['显示', '隐藏'])), data: ((__VLS_ctx.columns)), }));
    const __VLS_56 = __VLS_55({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.value)), titles: ((['显示', '隐藏'])), data: ((__VLS_ctx.columns)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    let __VLS_60;
    const __VLS_61 = {
        onChange: (__VLS_ctx.dataChange)
    };
    let __VLS_57;
    let __VLS_58;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    __VLS_nonNullable(__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    __VLS_styleScopedClasses['top-right-btn'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['item'];
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
            value: value,
            title: title,
            open: open,
            style: style,
            toggleSearch: toggleSearch,
            refresh: refresh,
            dataChange: dataChange,
            showColumn: showColumn,
        };
    },
    emits: {},
    props: {
        showSearch: {
            type: Boolean,
            default: true,
        },
        columns: {
            type: Array,
        },
        search: {
            type: Boolean,
            default: true,
        },
        gutter: {
            type: Number,
            default: 10,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        showSearch: {
            type: Boolean,
            default: true,
        },
        columns: {
            type: Array,
        },
        search: {
            type: Boolean,
            default: true,
        },
        gutter: {
            type: Number,
            default: 10,
        },
    },
});
;
//# sourceMappingURL=index.vue.js.map