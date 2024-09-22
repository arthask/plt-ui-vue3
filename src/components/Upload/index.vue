<template>
    <el-upload
        name="file"
        ref="fileRef"
        :action="action"
        :headers="headers"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-remove="hanldeRemove"
        v-bind="$attrs"
        :file-list="state.files"
        :class="{ disabled: props.disabled }"
        :show-file-list="!props.disabled"
    >
        <el-button v-if="!props.disabled" type="primary">点击上传</el-button>
        <template v-if="!props.disabled" #tip>
            <div class="el-upload__tip">
                <slot>{{ props.tips }}</slot>
            </div>
        </template>
        <template v-else #tip>
            <span
                v-for="item in props.fileList"
                :key="item.url"
                class="download-file"
                @click="downloadFile(item.url)"
                >{{ item.name }}</span
            >
        </template>
    </el-upload>
</template>

<script lang="ts" setup name="Upload">
import { fileMsg } from '@/api/fileManagement';
import { ElMessage, UploadFile, UploadInstance } from 'element-plus';
import { reactive, ref, watch } from 'vue';
import { UploadFileList, UploadFiles } from '.';
import { FileList } from '@/typings/common';
import { downloadStorageUrl } from '@/utils';
import useUserStore from '@/store/modules/user';

const action = import.meta.env.VITE_APP_BASE_API + 'storage/uploadFile';
const user = useUserStore();
const headers = {
    Authorization: user.token,
};
const props = withDefaults(
    defineProps<{
        beforeUpload?: (file: File) => boolean;
        fileList?: Array<FileList>;
        disabled?: boolean;
        tips?: string;
        limit?: number;
    }>(),
    {
        beforeUpload: (file: File) => {
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
    }
);
const state = reactive({
    list: [] as UploadFileList[],
    files: [] as UploadFiles[],
});
const fileRef = ref<UploadInstance>();
const emit = defineEmits(['success', 'remove', 'error']);

watch(
    () => props.fileList,
    value => {
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
    },
    {
        immediate: true,
        deep: true,
    }
);

/**
 * @description 上传限制是多个还是一个
 */
const limitFileNumber = (id: string, url: string, uid: number) => {
    if (props.limit === 1) {
        state.list = [];
        state.list.push({ id, url });
        state.files = [];
        state.files.push({
            uid,
            name: url.split('echoshow')[0],
            url: url.split('echoshow')[1],
        });
    } else {
        const index = state.list.findIndex(item => item.url === url);
        if (index !== -1) {
            state.list.splice(index, 1);
            state.files.splice(index, 1);
        } else {
            state.list.push({ id, url });
            state.files.push({
                uid,
                name: url.split('echoshow')[0],
                url: url.split('echoshow')[1],
            });
        }
    }
};
const handleSuccess = (res: any, file: UploadFile) => {
    if (res.code !== 200) {
        ElMessage.error(res.msg || '上传失败！');
        fileRef.value?.clearFiles();
        return;
    }
    const { name, storageUrl, id } = res.data;
    // 保存附件获取url
    fileMsg({ storageUrl }).then(response => {
        limitFileNumber(
            id,
            name + 'echoshow' + response.data.url + 'echoshow' + 'storageUrl' + storageUrl,
            file.uid
        );
        emit('success', state.list);
    });
};
const hanldeRemove = (file: UploadFile) => {
    const index = state.files.findIndex(item => item.url === file.url);
    state.list.splice(index, 1);
    state.files.splice(index, 1);
    emit('remove', state.list);
};
const handleError = (err: Error) => {
    ElMessage.error(err);
    emit('error', err);
};
const downloadFile = (url: string) => {
    downloadStorageUrl(url);
};
</script>

<style lang="scss" scoped>
.disabled {
    .el-upload {
        display: none;
    }
    .el-upload-list__item:first-child {
        margin-top: 0;
    }
    .el-upload-list {
        pointer-events: none;
    }
}
.download-file {
    color: #409eff;
    cursor: pointer;
}
</style>
