import { scrollTo } from '@/utils/scroll-to';
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    total: {
        required: true,
        type: Number,
    },
    page: {
        type: Number,
        default: 1,
    },
    limit: {
        type: Number,
        default: 20,
    },
    pageSizes: {
        type: Array,
        default() {
            return [10, 20, 30, 50];
        },
    },
    // 移动端页码按钮的数量端默认值5
    pagerCount: {
        type: Number,
        default: document.body.clientWidth < 992 ? 5 : 7,
    },
    layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
    },
    background: {
        type: Boolean,
        default: true,
    },
    autoScroll: {
        type: Boolean,
        default: true,
    },
    hidden: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['update:page', 'update:limit', 'pagination']);
const currentPage = computed({
    get() {
        return props.page;
    },
    set(val) {
        emit('update:page', val);
    },
});
const pageSize = computed({
    get() {
        return props.limit;
    },
    set(val) {
        emit('update:limit', val);
    },
});
function handleSizeChange(val) {
    if (currentPage.value * val > props.total) {
        currentPage.value = 1;
    }
    emit('pagination', { page: currentPage.value, limit: val });
    if (props.autoScroll) {
        scrollTo(0, 800);
    }
}
function handleCurrentChange(val) {
    emit('pagination', { page: val, limit: pageSize.value });
    if (props.autoScroll) {
        scrollTo(0, 800);
    }
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        total: {
            required: true,
            type: Number,
        },
        page: {
            type: Number,
            default: 1,
        },
        limit: {
            type: Number,
            default: 20,
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30, 50];
            },
        },
        // 移动端页码按钮的数量端默认值5
        pagerCount: {
            type: Number,
            default: document.body.clientWidth < 992 ? 5 : 7,
        },
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper',
        },
        background: {
            type: Boolean,
            default: true,
        },
        autoScroll: {
            type: Boolean,
            default: true,
        },
        hidden: {
            type: Boolean,
            default: false,
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
    __VLS_styleScopedClasses['pagination-container'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ hidden: __VLS_ctx.hidden })) }, ...{ class: ("pagination-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), background: ((__VLS_ctx.background)), layout: ((__VLS_ctx.layout)), pageSizes: ((__VLS_ctx.pageSizes)), pagerCount: ((__VLS_ctx.pagerCount)), total: ((__VLS_ctx.total)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), background: ((__VLS_ctx.background)), layout: ((__VLS_ctx.layout)), pageSizes: ((__VLS_ctx.pageSizes)), pagerCount: ((__VLS_ctx.pagerCount)), total: ((__VLS_ctx.total)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSizeChange: (__VLS_ctx.handleSizeChange)
    };
    const __VLS_8 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['pagination-container'];
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
            currentPage: currentPage,
            pageSize: pageSize,
            handleSizeChange: handleSizeChange,
            handleCurrentChange: handleCurrentChange,
        };
    },
    emits: {},
    props: {
        total: {
            required: true,
            type: Number,
        },
        page: {
            type: Number,
            default: 1,
        },
        limit: {
            type: Number,
            default: 20,
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30, 50];
            },
        },
        // 移动端页码按钮的数量端默认值5
        pagerCount: {
            type: Number,
            default: document.body.clientWidth < 992 ? 5 : 7,
        },
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper',
        },
        background: {
            type: Boolean,
            default: true,
        },
        autoScroll: {
            type: Boolean,
            default: true,
        },
        hidden: {
            type: Boolean,
            default: false,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        total: {
            required: true,
            type: Number,
        },
        page: {
            type: Number,
            default: 1,
        },
        limit: {
            type: Number,
            default: 20,
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30, 50];
            },
        },
        // 移动端页码按钮的数量端默认值5
        pagerCount: {
            type: Number,
            default: document.body.clientWidth < 992 ? 5 : 7,
        },
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper',
        },
        background: {
            type: Boolean,
            default: true,
        },
        autoScroll: {
            type: Boolean,
            default: true,
        },
        hidden: {
            type: Boolean,
            default: false,
        },
    },
});
;
//# sourceMappingURL=index.vue.js.map