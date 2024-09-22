import { ref } from 'vue';
import icons from './requireIcons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const iconName = ref('');
const iconList = ref(icons);
const emit = defineEmits(['selected']);
function filterIcons() {
    iconList.value = icons;
    if (iconName.value) {
        iconList.value = icons.filter(item => item.indexOf(iconName.value) !== -1);
    }
}
function selectedIcon(name) {
    emit('selected', name);
    document.body.click();
}
function reset() {
    iconName.value = '';
    iconList.value = icons;
}
const __VLS_exposed = {
    reset,
};
defineExpose({
    reset,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-body") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClear': {} }, ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.iconName)), ...{ style: ({}) }, clearable: (true), placeholder: ("请输入图标名称"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClear': {} }, ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.iconName)), ...{ style: ({}) }, clearable: (true), placeholder: ("请输入图标名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClear: (__VLS_ctx.filterIcons)
    };
    const __VLS_8 = {
        onInput: (__VLS_ctx.filterIcons)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { suffix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("el-icon-search el-input__icon") }, });
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-list") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.iconList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectedIcon(item);
                } }, key: ((index)), });
        const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ iconClass: ((item)), ...{ style: ({}) }, }));
        const __VLS_11 = __VLS_10({ iconClass: ((item)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item);
    }
    __VLS_styleScopedClasses['icon-body'];
    __VLS_styleScopedClasses['el-icon-search'];
    __VLS_styleScopedClasses['el-input__icon'];
    __VLS_styleScopedClasses['icon-list'];
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
            iconName: iconName,
            iconList: iconList,
            filterIcons: filterIcons,
            selectedIcon: selectedIcon,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    emits: {},
});
;
//# sourceMappingURL=index.vue.js.map