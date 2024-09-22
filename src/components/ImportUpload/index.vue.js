import { ElMessage, genFileId } from 'element-plus';
import { reactive, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    title: {
        type: String,
        default: '文件上传',
    },
    action: {
        type: String,
        required: true,
    },
    header: {
        type: Object,
        required: true,
    },
});
const state = reactive({
    visible: false,
    form: {
        file: null,
    },
    rules: {
        file: [{ required: true, message: '请上传文件', trigger: 'change' }],
    },
});
const formRef = ref();
const fileRef = ref();
const emit = defineEmits(['success']);
const importFile = async (formEl) => {
    if (!formEl)
        return;
    await formEl.validate(valid => {
        if (valid) {
            fileRef.value?.submit();
        }
        else {
        }
    });
};
const cancel = () => {
    close();
};
const close = () => {
    clearFile();
    state.visible = false;
};
const onSuccess = (response) => {
    if (response.code === 500 || response.code === 2) {
        ElMessage.error(response.msg || '上传失败！');
        clearFile();
    }
    else {
        emit('success');
        ElMessage.success('上传成功！');
        close();
    }
};
const onError = () => {
    ElMessage.error('上传失败！');
    clearFile();
};
const onRemove = () => {
    state.form.file = null;
};
/**
 * @description 清空数据
 */
const clearFile = () => {
    fileRef.value?.clearFiles();
    state.form.file = null;
    formRef.value?.resetFields();
};
const beforeUpload = (file) => {
    const isExl = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel';
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isExl) {
        ElMessage.error('上传文件只能是 Excel 格式!');
    }
    if (!isLt5M) {
        ElMessage.error('上传文件大小不能超过 5MB!');
    }
    return isLt5M;
};
const changeFile = (file) => {
    state.form.file = file;
};
/**
 * @description 覆盖前一个文件
 */
const handleExceed = (files) => {
    fileRef.value?.clearFiles();
    const file = files[0];
    file.uid = genFileId();
    fileRef.value?.handleStart(file);
};
const open = () => {
    state.visible = true;
};
const __VLS_exposed = {
    open,
};
defineExpose({
    open,
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        title: {
            type: String,
            default: '文件上传',
        },
        action: {
            type: String,
            required: true,
        },
        header: {
            type: Object,
            required: true,
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.MyDialog;
    /** @type { [typeof __VLS_components.MyDialog, typeof __VLS_components.myDialog, typeof __VLS_components.MyDialog, typeof __VLS_components.myDialog, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, modelValue: ((__VLS_ctx.state.visible)), title: ((props.title)), closeOnClickModal: ((false)), width: ("700"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, modelValue: ((__VLS_ctx.state.visible)), title: ((props.title)), closeOnClickModal: ((false)), width: ("700"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.close)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ model: ((__VLS_ctx.state.form)), labelWidth: ("100px"), rules: ((__VLS_ctx.state.rules)), ref: ("formRef"), }));
    const __VLS_10 = __VLS_9({ model: ((__VLS_ctx.state.form)), labelWidth: ("100px"), rules: ((__VLS_ctx.state.rules)), ref: ("formRef"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_14 = {};
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ label: ("文件"), prop: ("file"), }));
    const __VLS_17 = __VLS_16({ label: ("文件"), prop: ("file"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ref: ("fileRef"), autoUpload: ((false)), drag: (true), ...(__VLS_ctx.$attrs), action: ((props.action)), header: ((props.header)), onChange: ((__VLS_ctx.changeFile)), onExceed: ((__VLS_ctx.handleExceed)), onSuccess: ((__VLS_ctx.onSuccess)), onError: ((__VLS_ctx.onError)), onRemove: ((__VLS_ctx.onRemove)), beforeUpload: ((__VLS_ctx.beforeUpload)), accept: ("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"), }));
    const __VLS_23 = __VLS_22({ ref: ("fileRef"), autoUpload: ((false)), drag: (true), ...(__VLS_ctx.$attrs), action: ((props.action)), header: ((props.header)), onChange: ((__VLS_ctx.changeFile)), onExceed: ((__VLS_ctx.handleExceed)), onSuccess: ((__VLS_ctx.onSuccess)), onError: ((__VLS_ctx.onError)), onRemove: ((__VLS_ctx.onRemove)), beforeUpload: ((__VLS_ctx.beforeUpload)), accept: ("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    // @ts-ignore navigation for `const fileRef = ref()`
    __VLS_ctx.fileRef;
    var __VLS_27 = {};
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ class: ("el-icon-upload") }, }));
    const __VLS_30 = __VLS_29({ ...{ class: ("el-icon-upload") }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.UploadFilled;
    /** @type { [typeof __VLS_components.UploadFilled, typeof __VLS_components.uploadFilled, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
    const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_nonNullable(__VLS_33.slots).default;
    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-upload__text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.em, __VLS_intrinsicElements.em)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { tip: __VLS_thisSlot } = __VLS_nonNullable(__VLS_26.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-upload__tip") }, });
    }
    const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    __VLS_nonNullable(__VLS_20.slots).default;
    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, }));
        const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
        let __VLS_46;
        const __VLS_47 = {
            onClick: (__VLS_ctx.cancel)
        };
        let __VLS_43;
        let __VLS_44;
        __VLS_nonNullable(__VLS_45.slots).default;
        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        let __VLS_54;
        const __VLS_55 = {
            onClick: (...[$event]) => {
                __VLS_ctx.importFile(__VLS_ctx.formRef);
            }
        };
        let __VLS_51;
        let __VLS_52;
        __VLS_nonNullable(__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['el-icon-upload'];
    __VLS_styleScopedClasses['el-upload__text'];
    __VLS_styleScopedClasses['el-upload__tip'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "formRef": __VLS_14,
        "fileRef": __VLS_27,
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
            state: state,
            formRef: formRef,
            fileRef: fileRef,
            importFile: importFile,
            cancel: cancel,
            close: close,
            onSuccess: onSuccess,
            onError: onError,
            onRemove: onRemove,
            beforeUpload: beforeUpload,
            changeFile: changeFile,
            handleExceed: handleExceed,
        };
    },
    emits: {},
    props: {
        title: {
            type: String,
            default: '文件上传',
        },
        action: {
            type: String,
            required: true,
        },
        header: {
            type: Object,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    emits: {},
    props: {
        title: {
            type: String,
            default: '文件上传',
        },
        action: {
            type: String,
            required: true,
        },
        header: {
            type: Object,
            required: true,
        },
    },
});
;
//# sourceMappingURL=index.vue.js.map