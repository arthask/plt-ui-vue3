import { constantRoutes } from '@/router';
import { isHttp } from '@/utils/validate';
import useAppStore from '@/store/modules/app';
import useSettingsStore from '@/store/modules/settings';
import usePermissionStore from '@/store/modules/permission';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 顶部栏初始数
const visibleNumber = ref(null);
// 当前激活菜单的 index
const currentIndex = ref(null);
// 隐藏侧边栏路由
const hideList = ['/index', '/user/profile'];
const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const route = useRoute();
const router = useRouter();
// 主题颜色
const theme = computed(() => settingsStore.theme);
// 所有的路由信息
const routers = computed(() => permissionStore.topbarRouters);
// 顶部显示菜单
const topMenus = computed(() => {
    let topMenus = [];
    routers.value.map(menu => {
        if (menu.hidden !== true) {
            // 兼容顶部栏一级菜单内部跳转
            if (menu.path === '/') {
                menu.children?.[0] && topMenus.push(menu.children?.[0]);
            }
            else {
                topMenus.push(menu);
            }
        }
    });
    return topMenus;
});
// 设置子路由
const childrenMenus = computed(() => {
    let childrenMenus = [];
    routers.value.map(router => {
        for (let item in router.children) {
            if (router.children[item].parentPath === undefined) {
                if (router.path === '/') {
                    router.children[item].path = '/' + router.children[item].path;
                }
                else {
                    if (!isHttp(router.children[item].path)) {
                        router.children[item].path =
                            router.path + '/' + router.children[item].path;
                    }
                }
                router.children[item].parentPath = router.path;
            }
            childrenMenus.push(router.children[item]);
        }
    });
    return constantRoutes.concat(childrenMenus);
});
// 默认激活的菜单
const activeMenu = computed(() => {
    const path = route.path;
    let activePath = path;
    if (path !== undefined && path.lastIndexOf('/') > 0 && hideList.indexOf(path) === -1) {
        const tmpPath = path.substring(1, path.length);
        activePath = '/' + tmpPath.substring(0, tmpPath.indexOf('/'));
        if (!route.meta.link) {
            appStore.toggleSideBarHide(false);
        }
    }
    else if (!route.children) {
        activePath = path;
        appStore.toggleSideBarHide(true);
    }
    activeRoutes(activePath);
    return activePath;
});
function setVisibleNumber() {
    const width = document.body.getBoundingClientRect().width / 3;
    visibleNumber.value = parseInt(String(width / 85));
}
function handleSelect(key, keyPath) {
    currentIndex.value = key;
    const route = routers.value.find(item => item.path === key);
    if (isHttp(key)) {
        // http(s):// 路径新窗口打开
        window.open(key, '_blank');
    }
    else if (!route || !route.children) {
        // 没有子路由路径内部打开
        router.push({ path: key });
        appStore.toggleSideBarHide(true);
    }
    else {
        // 显示左侧联动菜单
        activeRoutes(key);
        appStore.toggleSideBarHide(false);
    }
}
function activeRoutes(key) {
    let routes = [];
    if (childrenMenus.value && childrenMenus.value.length > 0) {
        childrenMenus.value.map(item => {
            if (key === item.parentPath || (key === 'index' && '' === item.path)) {
                routes.push(item);
            }
        });
    }
    if (routes.length > 0) {
        permissionStore.setSidebarRouters(routes);
    }
    else {
        appStore.toggleSideBarHide(true);
    }
    return routes;
}
onMounted(() => {
    window.addEventListener('resize', setVisibleNumber);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', setVisibleNumber);
});
onMounted(() => {
    setVisibleNumber();
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), mode: ("horizontal"), ellipsis: ((false)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), mode: ("horizontal"), ellipsis: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSelect: (__VLS_ctx.handleSelect)
    };
    let __VLS_3;
    let __VLS_4;
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.topMenus))) {
        if (index < Number(__VLS_ctx.visibleNumber)) {
            const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
            /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
            // @ts-ignore
            const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ key: ((index)), ...{ style: (({ '--theme': __VLS_ctx.theme })) }, index: ((item.path)), }));
            const __VLS_10 = __VLS_9({ key: ((index)), ...{ style: (({ '--theme': __VLS_ctx.theme })) }, index: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
            const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ iconClass: ((item.meta?.icon)), }));
            const __VLS_16 = __VLS_15({ iconClass: ((item.meta?.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
            (item.meta?.title);
            __VLS_nonNullable(__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
        }
    }
    if (__VLS_ctx.topMenus.length > Number(__VLS_ctx.visibleNumber)) {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElSubMenu;
        /** @type { [typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ style: (({ '--theme': __VLS_ctx.theme })) }, index: ("more"), }));
        const __VLS_22 = __VLS_21({ ...{ style: (({ '--theme': __VLS_ctx.theme })) }, index: ("more"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_25.slots);
        }
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.topMenus))) {
            if (index >= Number(__VLS_ctx.visibleNumber)) {
                const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
                /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
                // @ts-ignore
                const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ key: ((index)), index: ((item.path)), }));
                const __VLS_28 = __VLS_27({ key: ((index)), index: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
                /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
                // @ts-ignore
                const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ iconClass: ((item.meta.icon)), }));
                const __VLS_34 = __VLS_33({ iconClass: ((item.meta.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                (item.meta.title);
                __VLS_nonNullable(__VLS_31.slots).default;
                const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
            }
        }
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
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
            visibleNumber: visibleNumber,
            theme: theme,
            topMenus: topMenus,
            activeMenu: activeMenu,
            handleSelect: handleSelect,
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