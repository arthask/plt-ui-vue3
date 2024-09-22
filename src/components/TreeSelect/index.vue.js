import { getCurrentInstance, computed, ref, onMounted, watch, nextTick, } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { proxy } = getCurrentInstance();
const props = defineProps({
    /* 配置项 */
    objMap: {
        type: Object,
        default: () => {
            return {
                value: 'id', // ID字段名
                label: 'label', // 显示名称
                children: 'children', // 子级字段名
            };
        },
    },
    /* 自动收起 */
    accordion: {
        type: Boolean,
        default: () => {
            return false;
        },
    },
    /**当前双向数据绑定的值 */
    value: {
        type: [String, Number],
        default: '',
    },
    /**当前的数据 */
    options: {
        type: Array,
        default: () => [],
    },
    /**输入框内部的文字 */
    placeholder: {
        type: String,
        default: '',
    },
});
const emit = defineEmits(['update:value']);
const valueId = computed({
    get: () => props.value,
    set: val => {
        emit('update:value', val);
    },
});
const valueTitle = ref('');
const defaultExpandedKey = ref([]);
function initHandle() {
    nextTick(() => {
        const selectedValue = valueId.value;
        if (selectedValue !== null && typeof selectedValue !== 'undefined') {
            const node = (proxy?.$refs.selectTree).getNode(selectedValue);
            if (node) {
                valueTitle.value = node.data[props.objMap.label];
                (proxy?.$refs.selectTree).setCurrentKey(selectedValue); // 设置默认选中
                defaultExpandedKey.value = [selectedValue]; // 设置默认展开
            }
        }
        else {
            clearHandle();
        }
    });
}
function handleNodeClick(node) {
    valueTitle.value = node[props.objMap.label];
    valueId.value = node[props.objMap.value];
    defaultExpandedKey.value = [];
    (proxy?.$refs.treeSelect).blur();
    selectFilterData('');
}
function selectFilterData(val) {
    (proxy?.$refs.selectTree).filter(val);
}
function filterNode(value, data) {
    if (!value)
        return true;
    return data[props.objMap['label']].indexOf(value) !== -1;
}
function clearHandle() {
    valueTitle.value = '';
    valueId.value = '';
    defaultExpandedKey.value = [];
    clearSelected();
}
function clearSelected() {
    const allNode = document.querySelectorAll('#tree-option .el-tree-node');
    allNode.forEach(element => element.classList.remove('is-current'));
}
onMounted(() => {
    initHandle();
});
watch(valueId, () => {
    initHandle();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        /* 配置项 */
        objMap: {
            type: Object,
            default: () => {
                return {
                    value: 'id', // ID字段名
                    label: 'label', // 显示名称
                    children: 'children', // 子级字段名
                };
            },
        },
        /* 自动收起 */
        accordion: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        /**当前双向数据绑定的值 */
        value: {
            type: [String, Number],
            default: '',
        },
        /**当前的数据 */
        options: {
            type: Array,
            default: () => [],
        },
        /**输入框内部的文字 */
        placeholder: {
            type: String,
            default: '',
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
    __VLS_styleScopedClasses['el-select-dropdown__item'];
    __VLS_styleScopedClasses['el-tree-node__content'];
    __VLS_styleScopedClasses['el-tree-node__content'];
    __VLS_styleScopedClasses['el-tree-node__content'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-tree-select") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClear': {} }, ref: ("treeSelect"), modelValue: ((__VLS_ctx.valueId)), ...{ style: ({}) }, filterable: ((true)), clearable: ((true)), filterMethod: ((__VLS_ctx.selectFilterData)), placeholder: ((__VLS_ctx.placeholder)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClear': {} }, ref: ("treeSelect"), modelValue: ((__VLS_ctx.valueId)), ...{ style: ({}) }, filterable: ((true)), clearable: ((true)), filterMethod: ((__VLS_ctx.selectFilterData)), placeholder: ((__VLS_ctx.placeholder)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const treeSelect = ref()`
    __VLS_ctx.treeSelect;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onClear: (__VLS_ctx.clearHandle)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ value: ((__VLS_ctx.valueId)), label: ((__VLS_ctx.valueTitle)), }));
    const __VLS_11 = __VLS_10({ value: ((__VLS_ctx.valueId)), label: ((__VLS_ctx.valueTitle)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.ElTree;
    /** @type { [typeof __VLS_components.ElTree, typeof __VLS_components.elTree, typeof __VLS_components.ElTree, typeof __VLS_components.elTree, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onNodeClick': {} }, id: ("tree-option"), ref: ("selectTree"), accordion: ((__VLS_ctx.accordion)), data: ((__VLS_ctx.options)), props: ((__VLS_ctx.objMap)), nodeKey: ((__VLS_ctx.objMap.value)), expandOnClickNode: ((false)), defaultExpandedKeys: ((__VLS_ctx.defaultExpandedKey)), filterNodeMethod: ((__VLS_ctx.filterNode)), }));
    const __VLS_17 = __VLS_16({ ...{ 'onNodeClick': {} }, id: ("tree-option"), ref: ("selectTree"), accordion: ((__VLS_ctx.accordion)), data: ((__VLS_ctx.options)), props: ((__VLS_ctx.objMap)), nodeKey: ((__VLS_ctx.objMap.value)), expandOnClickNode: ((false)), defaultExpandedKeys: ((__VLS_ctx.defaultExpandedKey)), filterNodeMethod: ((__VLS_ctx.filterNode)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    // @ts-ignore navigation for `const selectTree = ref()`
    __VLS_ctx.selectTree;
    var __VLS_21 = {};
    let __VLS_22;
    const __VLS_23 = {
        onNodeClick: (__VLS_ctx.handleNodeClick)
    };
    let __VLS_18;
    let __VLS_19;
    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    __VLS_nonNullable(__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['el-tree-select'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "treeSelect": __VLS_6,
        "selectTree": __VLS_21,
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
            valueId: valueId,
            valueTitle: valueTitle,
            defaultExpandedKey: defaultExpandedKey,
            handleNodeClick: handleNodeClick,
            selectFilterData: selectFilterData,
            filterNode: filterNode,
            clearHandle: clearHandle,
        };
    },
    emits: {},
    props: {
        /* 配置项 */
        objMap: {
            type: Object,
            default: () => {
                return {
                    value: 'id', // ID字段名
                    label: 'label', // 显示名称
                    children: 'children', // 子级字段名
                };
            },
        },
        /* 自动收起 */
        accordion: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        /**当前双向数据绑定的值 */
        value: {
            type: [String, Number],
            default: '',
        },
        /**当前的数据 */
        options: {
            type: Array,
            default: () => [],
        },
        /**输入框内部的文字 */
        placeholder: {
            type: String,
            default: '',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        /* 配置项 */
        objMap: {
            type: Object,
            default: () => {
                return {
                    value: 'id', // ID字段名
                    label: 'label', // 显示名称
                    children: 'children', // 子级字段名
                };
            },
        },
        /* 自动收起 */
        accordion: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        /**当前双向数据绑定的值 */
        value: {
            type: [String, Number],
            default: '',
        },
        /**当前的数据 */
        options: {
            type: Array,
            default: () => [],
        },
        /**输入框内部的文字 */
        placeholder: {
            type: String,
            default: '',
        },
    },
});
;
//# sourceMappingURL=index.vue.js.map