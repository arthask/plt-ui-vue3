import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const levelList = ref([]);
function getBreadcrumb() {
    // only show routes with meta.title
    let matched = route.matched.filter(item => item.meta && item.meta.title);
    const first = matched[0];
    // 判断是否为首页
    if (!isDashboard(first)) {
        matched = [{ path: '/index', meta: { title: '首页' } }].concat(matched);
    }
    levelList.value = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false);
}
function isDashboard(route) {
    const name = route && route.name;
    if (!name) {
        return false;
    }
    return name.trim() === 'Index';
}
function handleLink(item) {
    const { redirect, path } = item;
    if (redirect) {
        router.push(redirect);
        return;
    }
    router.push(path);
}
watchEffect(() => {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith('/redirect/')) {
        return;
    }
    getBreadcrumb();
});
getBreadcrumb();
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElBreadcrumb;
    /** @type { [typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("app-breadcrumb") }, separator: ("/"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("app-breadcrumb") }, separator: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.TransitionGroup;
    /** @type { [typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("breadcrumb"), }));
    const __VLS_8 = __VLS_7({ name: ("breadcrumb"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.levelList))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElBreadcrumbItem;
        /** @type { [typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((item.path)), }));
        const __VLS_14 = __VLS_13({ key: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        if (item.redirect === 'noRedirect' || index == __VLS_ctx.levelList.length - 1) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("no-redirect") }, });
            (item.meta.title);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                        if (!(!((item.redirect === 'noRedirect' || index == __VLS_ctx.levelList.length - 1))))
                            return;
                        __VLS_ctx.handleLink(item);
                    } }, });
            (item.meta.title);
        }
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['app-breadcrumb'];
    __VLS_styleScopedClasses['no-redirect'];
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
            levelList: levelList,
            handleLink: handleLink,
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