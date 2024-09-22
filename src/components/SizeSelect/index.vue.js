import useAppStore from '@/store/modules/app';
import { computed, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const appStore = useAppStore();
const size = computed(() => appStore.size);
// const route = useRoute();
// const router = useRouter();
// const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const sizeOptions = ref([
    { label: '较大', value: 'large' },
    { label: '默认', value: 'default' },
    { label: '稍小', value: 'small' },
]);
function handleSetSize(size) {
    // proxy!.$modal.loading('正在设置布局大小，请稍候...');
    appStore.setSize(size);
    // setTimeout('window.location.reload()', 1000);
}
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
    /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onCommand': {} }, trigger: ("click"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onCommand': {} }, trigger: ("click"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onCommand: (__VLS_ctx.handleSetSize)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-icon--style") }, });
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ className: ("size-icon"), iconClass: ("size"), }));
    const __VLS_10 = __VLS_9({ className: ("size-icon"), iconClass: ("size"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
        /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.sizeOptions))) {
            const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ key: ((item.value)), disabled: ((__VLS_ctx.size === item.value)), command: ((item.value)), }));
            const __VLS_22 = __VLS_21({ key: ((item.value)), disabled: ((__VLS_ctx.size === item.value)), command: ((item.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            (item.label);
            __VLS_nonNullable(__VLS_25.slots).default;
            const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
        __VLS_nonNullable(__VLS_19.slots).default;
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['size-icon--style'];
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
            size: size,
            sizeOptions: sizeOptions,
            handleSetSize: handleSetSize,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=index.vue.js.map