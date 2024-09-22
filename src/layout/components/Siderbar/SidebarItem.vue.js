import { isExternal } from '@/utils/validate';
import AppLink from './Link.vue';
import { getNormalPath } from '@/utils/ruoyi';
// import subMenu from 'element-plus/es/components/menu/src/sub-menu';
// import item from 'element-plus/es/components/space/src/item';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    // route object
    item: {
        type: Object,
        required: true,
    },
    isNest: {
        type: Boolean,
        default: false,
    },
    basePath: {
        type: String,
        default: '',
    },
});
const onlyOneChild = ref({});
function hasOneShowingChild(children = [], parent) {
    if (!children) {
        children = [];
    }
    const showingChildren = children.filter(item => {
        if (item.hidden) {
            return false;
        }
        else {
            // Temp set(will be used if only has one showing child)
            onlyOneChild.value = item;
            return true;
        }
    });
    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
        return true;
    }
    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
        return true;
    }
    return false;
}
function resolvePath(routePath, routeQuery) {
    if (isExternal(routePath)) {
        return routePath;
    }
    if (isExternal(props.basePath)) {
        return props.basePath;
    }
    if (routeQuery) {
        let query = JSON.parse(routeQuery);
        return { path: getNormalPath(props.basePath + '/' + routePath), query: query };
    }
    return getNormalPath(props.basePath + '/' + routePath);
}
function hasTitle(title) {
    if (title.length > 5) {
        return title;
    }
    else {
        return '';
    }
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        // route object
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: '',
        },
    },
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
    if (!__VLS_ctx.item.hidden) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (__VLS_ctx.hasOneShowingChild(__VLS_ctx.item.children, __VLS_ctx.item) &&
            (!__VLS_ctx.onlyOneChild.children || __VLS_ctx.onlyOneChild.noShowingChildren) &&
            !__VLS_ctx.item.alwaysShow) {
            if (__VLS_ctx.onlyOneChild.meta) {
                // @ts-ignore
                [AppLink, AppLink,];
                // @ts-ignore
                const __VLS_0 = __VLS_asFunctionalComponent(AppLink, new AppLink({ to: ((__VLS_ctx.resolvePath(__VLS_ctx.onlyOneChild.path, __VLS_ctx.onlyOneChild.query))), }));
                const __VLS_1 = __VLS_0({ to: ((__VLS_ctx.resolvePath(__VLS_ctx.onlyOneChild.path, __VLS_ctx.onlyOneChild.query))), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
                const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
                /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
                // @ts-ignore
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ index: ((__VLS_ctx.resolvePath(__VLS_ctx.onlyOneChild.path))), ...{ class: (({ 'sub-menu-title-noDropdown': !__VLS_ctx.isNest })) }, }));
                const __VLS_7 = __VLS_6({ index: ((__VLS_ctx.resolvePath(__VLS_ctx.onlyOneChild.path))), ...{ class: (({ 'sub-menu-title-noDropdown': !__VLS_ctx.isNest })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
                /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
                // @ts-ignore
                const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ iconClass: ((__VLS_ctx.onlyOneChild.meta.icon || (__VLS_ctx.item.meta && __VLS_ctx.item.meta.icon))), }));
                const __VLS_13 = __VLS_12({ iconClass: ((__VLS_ctx.onlyOneChild.meta.icon || (__VLS_ctx.item.meta && __VLS_ctx.item.meta.icon))), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_10.slots);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-title") }, title: ((__VLS_ctx.hasTitle(__VLS_ctx.onlyOneChild.meta.title))), });
                    (__VLS_ctx.onlyOneChild.meta.title);
                }
                const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
                __VLS_nonNullable(__VLS_4.slots).default;
                const __VLS_4 = __VLS_pickFunctionalComponentCtx(AppLink, __VLS_1);
            }
        }
        else {
            const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElSubMenu;
            /** @type { [typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, ] } */
            // @ts-ignore
            const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ref: ("subMenu"), index: ((__VLS_ctx.resolvePath(__VLS_ctx.item.path))), popperAppendToBody: (true), }));
            const __VLS_19 = __VLS_18({ ref: ("subMenu"), index: ((__VLS_ctx.resolvePath(__VLS_ctx.item.path))), popperAppendToBody: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
            // @ts-ignore navigation for `const subMenu = ref()`
            __VLS_ctx.subMenu;
            var __VLS_23 = {};
            if (__VLS_ctx.item.meta) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_22.slots);
                    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
                    /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
                    // @ts-ignore
                    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ iconClass: ((__VLS_ctx.item.meta && __VLS_ctx.item.meta.icon)), }));
                    const __VLS_26 = __VLS_25({ iconClass: ((__VLS_ctx.item.meta && __VLS_ctx.item.meta.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-title") }, title: ((__VLS_ctx.hasTitle(__VLS_ctx.item.meta.title))), });
                    (__VLS_ctx.item.meta.title);
                }
            }
            for (const [child] of __VLS_getVForSourceType((__VLS_ctx.item.children))) {
                const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.SidebarItem;
                /** @type { [typeof __VLS_components.SidebarItem, typeof __VLS_components.sidebarItem, ] } */
                // @ts-ignore
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ key: ((child.path)), isNest: ((true)), item: ((child)), basePath: ((__VLS_ctx.resolvePath(child.path))), ...{ class: ("nest-menu") }, }));
                const __VLS_32 = __VLS_31({ key: ((child.path)), isNest: ((true)), item: ((child)), basePath: ((__VLS_ctx.resolvePath(child.path))), ...{ class: ("nest-menu") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            }
            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
        }
    }
    __VLS_styleScopedClasses['sub-menu-title-noDropdown'];
    __VLS_styleScopedClasses['menu-title'];
    __VLS_styleScopedClasses['menu-title'];
    __VLS_styleScopedClasses['nest-menu'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "subMenu": __VLS_23,
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
            AppLink: AppLink,
            onlyOneChild: onlyOneChild,
            hasOneShowingChild: hasOneShowingChild,
            resolvePath: resolvePath,
            hasTitle: hasTitle,
        };
    },
    props: {
        // route object
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: '',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        // route object
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: '',
        },
    },
});
;
//# sourceMappingURL=SidebarItem.vue.js.map