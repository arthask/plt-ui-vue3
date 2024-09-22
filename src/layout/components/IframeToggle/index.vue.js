/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import InnerLink from '../InnerLink/index.vue';
import useTagsViewStore from '@/store/modules/tagsView';
import { useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const tagsViewStore = useTagsViewStore();
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.TransitionGroup;
    /** @type { [typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("fade-transform"), mode: ("out-in"), }));
    const __VLS_2 = __VLS_1({ name: ("fade-transform"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.tagsViewStore.iframeViews))) {
        // @ts-ignore
        [InnerLink, InnerLink,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(InnerLink, new InnerLink({ key: ((item.path)), iframeId: (('iframe' + index)), src: item.meta.link, }));
        const __VLS_7 = __VLS_6({ key: ((item.path)), iframeId: (('iframe' + index)), src: item.meta.link, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        __VLS_directiveAsFunction(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.route.path === item.path) }, null, null);
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
            InnerLink: InnerLink,
            route: route,
            tagsViewStore: tagsViewStore,
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