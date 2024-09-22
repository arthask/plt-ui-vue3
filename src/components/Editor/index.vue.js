import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { computed, ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    /* 编辑器的内容 */
    modelValue: {
        type: String,
    },
    /* 高度 */
    height: {
        type: Number,
        default: null,
    },
    /* 最小高度 */
    minHeight: {
        type: Number,
        default: null,
    },
    /* 只读 */
    readOnly: {
        type: Boolean,
        default: false,
    },
});
const options = ref({
    theme: 'snow',
    bounds: document.body,
    debug: 'warn',
    modules: {
        // 工具栏配置
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            ['blockquote', 'code-block'], // 引用  代码块
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            [{ align: [] }], // 对齐方式
            ['clean'], // 清除文本格式
            ['link', 'image', 'video'], // 链接、图片、视频
        ],
    },
    placeholder: '请输入内容',
    readOnly: props.readOnly,
    // theme: 'snow',
});
const styles = computed(() => {
    let style = {};
    if (props.minHeight) {
        style.minHeight = `${props.minHeight}px`;
    }
    if (props.height) {
        style.height = `${props.height}px`;
    }
    return style;
});
const content = ref('');
watch(() => props.modelValue, v => {
    if (v !== content.value) {
        content.value = v === undefined ? '<p></p>' : v;
    }
}, { immediate: true });
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        /* 编辑器的内容 */
        modelValue: {
            type: String,
        },
        /* 高度 */
        height: {
            type: Number,
            default: null,
        },
        /* 最小高度 */
        minHeight: {
            type: Number,
            default: null,
        },
        /* 只读 */
        readOnly: {
            type: Boolean,
            default: false,
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("editor") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.QuillEditor;
    /** @type { [typeof __VLS_components.QuillEditor, typeof __VLS_components.quillEditor, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onTextChange': {} }, content: ((__VLS_ctx.content)), contentType: ("html"), options: ((__VLS_ctx.options)), ...{ style: ((__VLS_ctx.styles)) }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onTextChange': {} }, content: ((__VLS_ctx.content)), contentType: ("html"), options: ((__VLS_ctx.options)), ...{ style: ((__VLS_ctx.styles)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onTextChange: (e => __VLS_ctx.$emit('update:modelValue', __VLS_ctx.content))
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['editor'];
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
            QuillEditor: QuillEditor,
            options: options,
            styles: styles,
            content: content,
        };
    },
    props: {
        /* 编辑器的内容 */
        modelValue: {
            type: String,
        },
        /* 高度 */
        height: {
            type: Number,
            default: null,
        },
        /* 最小高度 */
        minHeight: {
            type: Number,
            default: null,
        },
        /* 只读 */
        readOnly: {
            type: Boolean,
            default: false,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        /* 编辑器的内容 */
        modelValue: {
            type: String,
        },
        /* 高度 */
        height: {
            type: Number,
            default: null,
        },
        /* 最小高度 */
        minHeight: {
            type: Number,
            default: null,
        },
        /* 只读 */
        readOnly: {
            type: Boolean,
            default: false,
        },
    },
});
;
//# sourceMappingURL=index.vue.js.map