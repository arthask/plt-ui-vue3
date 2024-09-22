import Fuse from 'fuse.js';
import { getNormalPath } from '@/utils/tools';
import { isHttp } from '@/utils/validate';
import usePermissionStore from '@/store/modules/permission';
import { ref, computed, onMounted, watchEffect, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const search = ref('');
const options = ref([]);
const searchPool = ref([]);
const show = ref(false);
const fuse = ref(undefined);
const headerSearchSelectRef = ref(null);
const router = useRouter();
const routes = computed(() => usePermissionStore().routes);
function click() {
    show.value = !show.value;
    if (show.value) {
        headerSearchSelectRef.value && headerSearchSelectRef.value.focus();
    }
}
function close() {
    headerSearchSelectRef.value && headerSearchSelectRef.value.blur();
    options.value = [];
    show.value = false;
}
function change(val) {
    const path = val.path;
    if (isHttp(path)) {
        // http(s):// 路径新窗口打开
        const pindex = path.indexOf('http');
        window.open(path.substr(pindex, path.length), '_blank');
    }
    else {
        router.push(path);
    }
    search.value = '';
    options.value = [];
    nextTick(() => {
        show.value = false;
    });
}
function initFuse(list) {
    fuse.value = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: [
            {
                name: 'title',
                weight: 0.7,
            },
            {
                name: 'path',
                weight: 0.3,
            },
        ],
    });
}
// Filter out the routes that can be displayed in the sidebar
// And generate the internationalized title
function generateRoutes(routes, basePath = '', prefixTitle = []) {
    let res = [];
    for (const r of routes) {
        // skip hidden router
        if (r.hidden) {
            continue;
        }
        const p = r.path.length > 0 && r.path[0] === '/' ? r.path : '/' + r.path;
        const data = {
            path: !isHttp(r.path) ? getNormalPath(basePath + p) : r.path,
            title: [...prefixTitle],
        };
        if (r.meta && r.meta.title) {
            data.title = [...data.title, r.meta.title];
            if (r.redirect !== 'noRedirect') {
                // only push the routes with title
                // special case: need to exclude parent router without redirect
                res.push(data);
            }
        }
        // recursive child routes
        if (r.children) {
            const tempRoutes = generateRoutes(r.children, data.path, data.title);
            if (tempRoutes.length >= 1) {
                res = [...res, ...tempRoutes];
            }
        }
    }
    return res;
}
function querySearch(query) {
    if (query !== '') {
        options.value = fuse.value.search(query);
    }
    else {
        options.value = [];
    }
}
onMounted(() => {
    searchPool.value = generateRoutes(routes.value);
});
watchEffect(() => {
    searchPool.value = generateRoutes(routes.value);
});
watch(show, value => {
    if (value) {
        document.body.addEventListener('click', close);
    }
    else {
        document.body.removeEventListener('click', close);
    }
});
watch(searchPool, list => {
    initFuse(list);
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
    __VLS_styleScopedClasses['header-search-select'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ show: __VLS_ctx.show })) }, ...{ class: ("header-search") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, className: ("search-icon"), iconClass: ("search"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, className: ("search-icon"), iconClass: ("search"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.click)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onChange': {} }, ref: ("headerSearchSelectRef"), modelValue: ((__VLS_ctx.search)), remoteMethod: ((__VLS_ctx.querySearch)), filterable: (true), defaultFirstOption: (true), remote: (true), placeholder: ("Search"), ...{ class: ("header-search-select") }, }));
    const __VLS_10 = __VLS_9({ ...{ 'onChange': {} }, ref: ("headerSearchSelectRef"), modelValue: ((__VLS_ctx.search)), remoteMethod: ((__VLS_ctx.querySearch)), filterable: (true), defaultFirstOption: (true), remote: (true), placeholder: ("Search"), ...{ class: ("header-search-select") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    // @ts-ignore navigation for `const headerSearchSelectRef = ref()`
    __VLS_ctx.headerSearchSelectRef;
    var __VLS_14 = {};
    let __VLS_15;
    const __VLS_16 = {
        onChange: (__VLS_ctx.change)
    };
    let __VLS_11;
    let __VLS_12;
    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options))) {
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ key: ((option.item.path)), value: ((option.item)), label: ((option.item.title.join(' > '))), }));
        const __VLS_19 = __VLS_18({ key: ((option.item.path)), value: ((option.item)), label: ((option.item.title.join(' > '))), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    }
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['header-search'];
    __VLS_styleScopedClasses['header-search-select'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "headerSearchSelectRef": __VLS_14,
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
            search: search,
            options: options,
            show: show,
            headerSearchSelectRef: headerSearchSelectRef,
            click: click,
            change: change,
            querySearch: querySearch,
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