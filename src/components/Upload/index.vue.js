import { fileMsg } from '@/api/fileManagement';
import { ElMessage } from 'element-plus';
import { reactive, ref, watch } from 'vue';
import { downloadStorageUrl } from '@/utils';
import useUserStore from '@/store/modules/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const action = import.meta.env.VITE_APP_BASE_API + 'storage/uploadFile';
const user = useUserStore();
const headers = {
    Authorization: user.token,
};
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    beforeUpload: (file) => {
        const isLt50M = file.size / 1024 / 1024 < 50;
        if (!isLt50M) {
            ElMessage.error('上传文件大小不能超过 50MB!');
        }
        return isLt50M;
    },
    fileList: () => [],
    disabled: false,
    tips: '上传文件大小不超过50M',
    limit: 1,
});
const state = reactive({
    list: [],
    files: [],
});
const fileRef = ref();
const emit = defineEmits(['success', 'remove', 'error']);
watch(() => props.fileList, value => {
    state.files = value.map(item => {
        return {
            name: item.name,
            url: item.url,
        };
    });
    state.list = value.map(item => {
        return {
            url: item.name + 'echoshow' + item.url,
            name: item.name,
        };
    });
}, {
    immediate: true,
    deep: true,
});
/**
 * @description 上传限制是多个还是一个
 */
const limitFileNumber = (id, url, uid) => {
    if (props.limit === 1) {
        state.list = [];
        state.list.push({ id, url });
        state.files = [];
        state.files.push({
            uid,
            name: url.split('echoshow')[0],
            url: url.split('echoshow')[1],
        });
    }
    else {
        const index = state.list.findIndex(item => item.url === url);
        if (index !== -1) {
            state.list.splice(index, 1);
            state.files.splice(index, 1);
        }
        else {
            state.list.push({ id, url });
            state.files.push({
                uid,
                name: url.split('echoshow')[0],
                url: url.split('echoshow')[1],
            });
        }
    }
};
const handleSuccess = (res, file) => {
    if (res.code !== 200) {
        ElMessage.error(res.msg || '上传失败！');
        fileRef.value?.clearFiles();
        return;
    }
    const { name, storageUrl, id } = res.data;
    // 保存附件获取url
    fileMsg({ storageUrl }).then(response => {
        limitFileNumber(id, name + 'echoshow' + response.data.url + 'echoshow' + 'storageUrl' + storageUrl, file.uid);
        emit('success', state.list);
    });
};
const hanldeRemove = (file) => {
    const index = state.files.findIndex(item => item.url === file.url);
    state.list.splice(index, 1);
    state.files.splice(index, 1);
    emit('remove', state.list);
};
const handleError = (err) => {
    ElMessage.error(err);
    emit('error', err);
};
const downloadFile = (url) => {
    downloadStorageUrl(url);
};
const __VLS_withDefaultsArg = (function (t) { return t; })({
    beforeUpload: (file) => {
        const isLt50M = file.size / 1024 / 1024 < 50;
        if (!isLt50M) {
            ElMessage.error('上传文件大小不能超过 50MB!');
        }
        return isLt50M;
    },
    fileList: () => [],
    disabled: false,
    tips: '上传文件大小不超过50M',
    limit: 1,
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("file"), ref: ("fileRef"), action: ((__VLS_ctx.action)), headers: ((__VLS_ctx.headers)), beforeUpload: ((__VLS_ctx.beforeUpload)), onSuccess: ((__VLS_ctx.handleSuccess)), onError: ((__VLS_ctx.handleError)), onRemove: ((__VLS_ctx.hanldeRemove)), ...(__VLS_ctx.$attrs), fileList: ((__VLS_ctx.state.files)), ...{ class: (({ disabled: props.disabled })) }, showFileList: ((!props.disabled)), }));
    const __VLS_2 = __VLS_1({ name: ("file"), ref: ("fileRef"), action: ((__VLS_ctx.action)), headers: ((__VLS_ctx.headers)), beforeUpload: ((__VLS_ctx.beforeUpload)), onSuccess: ((__VLS_ctx.handleSuccess)), onError: ((__VLS_ctx.handleError)), onRemove: ((__VLS_ctx.hanldeRemove)), ...(__VLS_ctx.$attrs), fileList: ((__VLS_ctx.state.files)), ...{ class: (({ disabled: props.disabled })) }, showFileList: ((!props.disabled)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const fileRef = ref()`
    __VLS_ctx.fileRef;
    var __VLS_6 = {};
    if (!props.disabled) {
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ type: ("primary"), }));
        const __VLS_9 = __VLS_8({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_nonNullable(__VLS_12.slots).default;
        const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
    }
    if (!props.disabled) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { tip: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-upload__tip") }, });
            var __VLS_13 = {};
            (props.tips);
            __VLS_nonNullable(__VLS_5.slots).default;
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    __VLS_directiveAsFunction(__VLS_directives.vElse)(null, { ...__VLS_directiveBindingRestFields, undefined }, null, null);
    {
        const { tip: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        for (const [item] of __VLS_getVForSourceType((props.fileList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        __VLS_ctx.downloadFile(item.url);
                    } }, key: ((item.url)), ...{ class: ("download-file") }, });
            (item.name);
        }
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['disabled'];
    __VLS_styleScopedClasses['el-upload__tip'];
    __VLS_styleScopedClasses['download-file'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "fileRef": __VLS_6,
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
            action: action,
            headers: headers,
            state: state,
            fileRef: fileRef,
            handleSuccess: handleSuccess,
            hanldeRemove: hanldeRemove,
            handleError: handleError,
            downloadFile: downloadFile,
        };
    },
    emits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
    props: {},
});
export default {};
;
//# sourceMappingURL=index.vue.js.map