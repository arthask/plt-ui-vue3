import ScrollPane from './ScrollPane.vue';
import { getNormalPath } from '@/utils/ruoyi';
import useTagsViewStore from '@/store/modules/tagsView';
import useSettingsStore from '@/store/modules/settings';
import usePermissionStore from '@/store/modules/permission';
import { ref, getCurrentInstance, computed, onMounted, watch, nextTick, } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const visible = ref(false);
const top = ref(0);
const left = ref(0);
const selectedTag = ref({});
const affixTags = ref([]);
const scrollPaneRef = ref(null);
const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
const visitedViews = computed(() => useTagsViewStore().visitedViews);
const routes = computed(() => usePermissionStore().routes);
const theme = computed(() => useSettingsStore().theme);
watch(route, () => {
    addTags();
    moveToCurrentTag();
});
watch(visible, value => {
    if (value) {
        document.body.addEventListener('click', closeMenu);
    }
    else {
        document.body.removeEventListener('click', closeMenu);
    }
});
onMounted(() => {
    initTags();
    addTags();
});
function isActive(r) {
    return r.path === route.path;
}
function activeStyle(tag) {
    if (!isActive(tag))
        return {};
    return {
        'background-color': theme.value,
        'border-color': theme.value,
    };
}
function isAffix(tag) {
    return tag.meta && tag.meta.affix;
}
function isFirstView() {
    try {
        return selectedTag.value.fullPath === '/index' || selectedTag.value.fullPath === visitedViews.value[1].fullPath;
    }
    catch (err) {
        return false;
    }
}
function isLastView() {
    try {
        return selectedTag.value.fullPath === visitedViews.value[visitedViews.value.length - 1].fullPath;
    }
    catch (err) {
        return false;
    }
}
function filterAffixTags(routes, basePath = '') {
    let tags = [];
    routes.forEach(route => {
        if (route.meta && route.meta.affix) {
            const tagPath = getNormalPath(basePath + '/' + route.path);
            tags.push({
                fullPath: tagPath,
                path: tagPath,
                name: route.name,
                meta: { ...route.meta },
            });
        }
        if (route.children) {
            const tempTags = filterAffixTags(route.children, route.path);
            if (tempTags.length >= 1) {
                tags = [...tags, ...tempTags];
            }
        }
    });
    return tags;
}
function initTags() {
    const res = filterAffixTags(routes.value);
    affixTags.value = res;
    for (const tag of res) {
        // Must have tag name
        if (tag.name) {
            useTagsViewStore().addVisitedView(tag);
        }
    }
}
function addTags() {
    const { name } = route;
    if (name) {
        useTagsViewStore().addView(route);
        if (route.meta.link) {
            useTagsViewStore().addIframeView(route);
        }
    }
    return false;
}
function moveToCurrentTag() {
    nextTick(() => {
        for (const r of visitedViews.value) {
            if (r.path === route.path) {
                scrollPaneRef.value.moveToTarget(r);
                // when query is different then update
                if (r.fullPath !== route.fullPath) {
                    useTagsViewStore().updateVisitedView(route);
                }
            }
        }
    });
}
function refreshSelectedTag(view) {
    proxy.$tab.refreshPage(view);
    if (route.meta.link) {
        useTagsViewStore().delIframeView(route);
    }
}
function closeSelectedTag(view) {
    proxy.$tab.closePage(view).then(({ visitedViews }) => {
        if (isActive(view)) {
            toLastView(visitedViews, view);
        }
    });
}
function closeRightTags() {
    proxy.$tab.closeRightPage(selectedTag.value).then((visitedViews) => {
        if (!visitedViews.find((i) => i.fullPath === route.fullPath)) {
            toLastView(visitedViews);
        }
    });
}
function closeLeftTags() {
    proxy.$tab.closeLeftPage(selectedTag.value).then((visitedViews) => {
        if (!visitedViews.find((i) => i.fullPath === route.fullPath)) {
            toLastView(visitedViews);
        }
    });
}
function closeOthersTags() {
    router.push(selectedTag.value).catch(e => {
        console.log(e);
    });
    proxy.$tab.closeOtherPage(selectedTag.value).then(() => {
        moveToCurrentTag();
    });
}
function closeAllTags(view) {
    proxy.$tab.closeAllPage().then(({ visitedViews }) => {
        if (affixTags.value.some(tag => tag.path === route.path)) {
            return;
        }
        toLastView(visitedViews, view);
    });
}
function toLastView(visitedViews, view) {
    const latestView = visitedViews.slice(-1)[0];
    if (latestView) {
        router.push(latestView.fullPath);
    }
    else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
            // to reload home page
            router.replace({ path: '/redirect' + view.fullPath });
        }
        else {
            router.push('/');
        }
    }
}
function openMenu(tag, e) {
    const menuMinWidth = 105;
    const offsetLeft = proxy.$el.getBoundingClientRect().left; // container margin left
    const offsetWidth = proxy.$el.offsetWidth; // container width
    const maxLeft = offsetWidth - menuMinWidth; // left boundary
    const l = e.clientX - offsetLeft + 15; // 15: margin right
    if (l > maxLeft) {
        left.value = maxLeft;
    }
    else {
        left.value = l;
    }
    top.value = e.clientY;
    visible.value = true;
    selectedTag.value = tag;
}
function closeMenu() {
    visible.value = false;
}
function handleScroll() {
    closeMenu();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("tags-view-container"), ...{ class: ("tags-view-container") }, });
    // @ts-ignore
    [ScrollPane, ScrollPane,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ScrollPane, new ScrollPane({ ...{ 'onScroll': {} }, ref: ("scrollPaneRef"), ...{ class: ("tags-view-wrapper") }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onScroll': {} }, ref: ("scrollPaneRef"), ...{ class: ("tags-view-wrapper") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore navigation for `const scrollPaneRef = ref()`
    __VLS_ctx.scrollPaneRef;
    var __VLS_5 = {};
    let __VLS_6;
    const __VLS_7 = {
        onScroll: (__VLS_ctx.handleScroll)
    };
    let __VLS_2;
    let __VLS_3;
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.visitedViews))) {
        const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, ...{ 'onContextmenu': {} }, key: ((tag.path)), dataPath: ((tag.path)), ...{ class: ((__VLS_ctx.isActive(tag) ? 'active' : '')) }, to: { path: tag.path, query: tag.query, fullPath: tag.fullPath }, ...{ class: ("tags-view-item") }, ...{ style: ((__VLS_ctx.activeStyle(tag))) }, }));
        const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, ...{ 'onContextmenu': {} }, key: ((tag.path)), dataPath: ((tag.path)), ...{ class: ((__VLS_ctx.isActive(tag) ? 'active' : '')) }, to: { path: tag.path, query: tag.query, fullPath: tag.fullPath }, ...{ class: ("tags-view-item") }, ...{ style: ((__VLS_ctx.activeStyle(tag))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        let __VLS_14;
        const __VLS_15 = {
            onClick: (...[$event]) => {
                !__VLS_ctx.isAffix(tag) ? __VLS_ctx.closeSelectedTag(tag) : '';
            }
        };
        const __VLS_16 = {
            onContextmenu: (...[$event]) => {
                __VLS_ctx.openMenu(tag, $event);
            }
        };
        let __VLS_11;
        let __VLS_12;
        (tag.title);
        if (!__VLS_ctx.isAffix(tag)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        if (!((!__VLS_ctx.isAffix(tag))))
                            return;
                        __VLS_ctx.closeSelectedTag(tag);
                    } }, });
            const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.close;
            /** @type { [typeof __VLS_components.Close, typeof __VLS_components.close, ] } */
            // @ts-ignore
            const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ class: ("el-icon-close") }, ...{ style: ({}) }, }));
            const __VLS_19 = __VLS_18({ ...{ class: ("el-icon-close") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        }
        __VLS_nonNullable(__VLS_13.slots).default;
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    __VLS_nonNullable(__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ScrollPane, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ style: (({ left: __VLS_ctx.left + 'px', top: __VLS_ctx.top + 'px' })) }, ...{ class: ("contextmenu") }, });
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.visible) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.refreshSelectedTag(__VLS_ctx.selectedTag);
            } }, });
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.RefreshRight;
    /** @type { [typeof __VLS_components.RefreshRight, typeof __VLS_components.refreshRight, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ ...{ style: ({}) }, }));
    const __VLS_25 = __VLS_24({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    if (!__VLS_ctx.isAffix(__VLS_ctx.selectedTag)) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    if (!((!__VLS_ctx.isAffix(__VLS_ctx.selectedTag))))
                        return;
                    __VLS_ctx.closeSelectedTag(__VLS_ctx.selectedTag);
                } }, });
        const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.close;
        /** @type { [typeof __VLS_components.Close, typeof __VLS_components.close, ] } */
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{ style: ({}) }, }));
        const __VLS_31 = __VLS_30({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (__VLS_ctx.closeOthersTags) }, });
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.CircleClose;
    /** @type { [typeof __VLS_components.CircleClose, typeof __VLS_components.circleClose, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ style: ({}) }, }));
    const __VLS_37 = __VLS_36({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    if (!__VLS_ctx.isFirstView()) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (__VLS_ctx.closeLeftTags) }, });
        const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.back;
        /** @type { [typeof __VLS_components.Back, typeof __VLS_components.back, ] } */
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{ style: ({}) }, }));
        const __VLS_43 = __VLS_42({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    }
    if (!__VLS_ctx.isLastView()) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (__VLS_ctx.closeRightTags) }, });
        const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.right;
        /** @type { [typeof __VLS_components.Right, typeof __VLS_components.right, ] } */
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{ style: ({}) }, }));
        const __VLS_49 = __VLS_48({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.closeAllTags(__VLS_ctx.selectedTag);
            } }, });
    const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.CircleClose;
    /** @type { [typeof __VLS_components.CircleClose, typeof __VLS_components.circleClose, ] } */
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ ...{ style: ({}) }, }));
    const __VLS_55 = __VLS_54({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    __VLS_styleScopedClasses['tags-view-container'];
    __VLS_styleScopedClasses['tags-view-wrapper'];
    __VLS_styleScopedClasses['tags-view-item'];
    __VLS_styleScopedClasses['el-icon-close'];
    __VLS_styleScopedClasses['contextmenu'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "scrollPaneRef": __VLS_5,
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
            ScrollPane: ScrollPane,
            visible: visible,
            top: top,
            left: left,
            selectedTag: selectedTag,
            scrollPaneRef: scrollPaneRef,
            visitedViews: visitedViews,
            isActive: isActive,
            activeStyle: activeStyle,
            isAffix: isAffix,
            isFirstView: isFirstView,
            isLastView: isLastView,
            refreshSelectedTag: refreshSelectedTag,
            closeSelectedTag: closeSelectedTag,
            closeRightTags: closeRightTags,
            closeLeftTags: closeLeftTags,
            closeOthersTags: closeOthersTags,
            closeAllTags: closeAllTags,
            openMenu: openMenu,
            handleScroll: handleScroll,
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