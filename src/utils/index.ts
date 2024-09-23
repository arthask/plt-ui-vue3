import { apiDownloadFile } from '@/api/fileManagement';
import { ElMessage } from 'element-plus';

// 首字母大小
export function titleCase(str: string) {
    return str.replace(/( |^)[a-z]/g, L => L.toUpperCase());
}

// 下划转驼峰
export function camelCase(str: string) {
    return str.replace(/_[a-z]/g, str1 => str1.substr(-1).toUpperCase());
}

export function isNumberStr(str: string) {
    return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(str);
}

export function downloadStorageUrl(url: string) {
    const name = getFileName(url);
    apiDownloadFile(name!);
}

export function getFileName(url: string) {
    if (!url) {
        return;
    }
    if (!url.includes('kry-boot/')) {
        ElMessage.warning('下载链接不是StorageUrl');
        return;
    }
    const urlArr = url.split('kry-boot/');
    const name = urlArr[1];
    return name;
}
