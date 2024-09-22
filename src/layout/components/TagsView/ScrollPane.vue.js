/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import useTagsViewStore from '@/store/modules/tagsView';
import { ref, getCurrentInstance, computed, onMounted, onBeforeUnmount, } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tagAndTagSpacing = ref(4);
const { proxy } = getCurrentInstance();
const scrollWrapper = computed(() => proxy.$refs.scrollContainer.$refs.wrapRef);
onMounted(() => {
    scrollWrapper.value.addEventListener('scroll', emitScroll, true);
});
onBeforeUnmount(() => {
    scrollWrapper.value.removeEventListener('scroll', emitScroll);
});
function handleScroll(e) {
    const eventDelta = e.wheelDelta || -e.deltaY * 40;
    const $scrollWrapper = scrollWrapper.value;
    $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
}
const emits = defineEmits(['scroll']);
const emitScroll = () => {
    emits('scroll');
};
const tagsViewStore = useTagsViewStore();
const visitedViews = computed(() => tagsViewStore.visitedViews);
function moveToTarget(currentTag) {
    const $container = proxy.$refs.scrollContainer.$el;
    const $containerWidth = $container.offsetWidth;
    const $scrollWrapper = scrollWrapper.value;
    let firstTag = null;
    let lastTag = null;
    // find first tag and last tag
    if (visitedViews.value.length > 0) {
        firstTag = visitedViews.value[0];
        lastTag = visitedViews.value[visitedViews.value.length - 1];
    }
    if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0;
    }
    else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth;
    }
    else {
        const tagListDom = document.getElementsByClassName('tags-view-item');
        const currentIndex = visitedViews.value.findIndex(item => item === currentTag);
        let prevTag = null;
        let nextTag = null;
        for (const k in tagListDom) {
            if (k !== 'length' && Object.hasOwnProperty.call(tagListDom, k)) {
                if (tagListDom[k].dataset.path === visitedViews.value[currentIndex - 1].path) {
                    prevTag = tagListDom[k];
                }
                if (tagListDom[k].dataset.path === visitedViews.value[currentIndex + 1].path) {
                    nextTag = tagListDom[k];
                }
            }
        }
        // the tag's offsetLeft after of nextTag
        const afterNextTagOffsetLeft = nextTag.offsetLeft + nextTag.offsetWidth + tagAndTagSpacing.value;
        // the tag's offsetLeft before of prevTag
        const beforePrevTagOffsetLeft = prevTag.offsetLeft - tagAndTagSpacing.value;
        if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
            $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
        }
        else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
            $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
        }
    }
}
const __VLS_exposed = {
    moveToTarget,
};
defineExpose({
    moveToTarget,
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onWheel': {} }, ref: ("scrollContainer"), vertical: ((false)), ...{ class: ("scroll-container") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onWheel': {} }, ref: ("scrollContainer"), vertical: ((false)), ...{ class: ("scroll-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const scrollContainer = ref()`
    __VLS_ctx.scrollContainer;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onWheel: (__VLS_ctx.handleScroll)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_9 = {};
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['scroll-container'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "scrollContainer": __VLS_6,
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
            handleScroll: handleScroll,
        };
    },
    emits: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    emits: {},
});
export default {};
;
//# sourceMappingURL=ScrollPane.vue.js.map