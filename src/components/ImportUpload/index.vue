<template>
    <my-dialog
        v-model="state.visible"
        :title="props.title"
        :close-on-click-modal="false"
        @close="close"
        width="700"
    >
        <el-form :model="state.form" label-width="100px" :rules="state.rules" ref="formRef">
            <el-form-item label="文件" prop="file">
                <el-upload
                    ref="fileRef"
                    :auto-upload="false"
                    drag
                    v-bind="$attrs"
                    :action="props.action"
                    :header="props.header"
                    :on-change="changeFile"
                    :on-exceed="handleExceed"
                    :on-success="onSuccess"
                    :on-error="onError"
                    :on-remove="onRemove"
                    :before-upload="beforeUpload"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                >
                    <el-icon class="el-icon-upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">拖拽文件到这里 或者<em>点击上传</em></div>
                    <template #tip>
                        <div class="el-upload__tip">请上传Excel文件，大小不超过5M</div>
                    </template>
                </el-upload>
            </el-form-item>
        </el-form>
        <template #footer>
            <div>
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="importFile(formRef)">导入</el-button>
            </div>
        </template>
    </my-dialog>
</template>

<script lang="ts" setup name="ImportUpload">
import { ElMessage, FormInstance, UploadFile, UploadInstance, UploadRawFile, genFileId } from 'element-plus';
import { reactive, ref } from 'vue';

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
        file: null as UploadFile | null | File,
    },
    rules: {
        file: [{ required: true, message: '请上传文件', trigger: 'change' }],
    },
});

const formRef = ref<FormInstance>();
const fileRef = ref<UploadInstance>();
const emit = defineEmits(['success']);

const importFile = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(valid => {
        if (valid) {
            fileRef.value?.submit();
        } else {
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
const onSuccess = (response: any) => {
    if (response.code === 500 || response.code === 2) {
        ElMessage.error(response.msg || '上传失败！');
        clearFile();
    } else {
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
const beforeUpload = (file: UploadRawFile) => {
    const isExl =
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
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
const changeFile = (file: UploadFile) => {
    state.form.file = file;
};
/**
 * @description 覆盖前一个文件
 */
const handleExceed = (files: File[]) => {
    fileRef.value?.clearFiles();
    const file = files[0] as UploadRawFile;
    file.uid = genFileId();
    fileRef.value?.handleStart(file);
};
const open = () => {
    state.visible = true;
};

defineExpose({
    open,
});
</script>
