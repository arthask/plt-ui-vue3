import request, { myDownload } from '@/utils/request';

/**
 * @description 获取文件信息
 * @export
 * @param {{ storageUrl: string }} data
 * @return {*}
 */
export function fileMsg(data: { storageUrl: string }) {
    // 查询
    return request({
        url: `/storage/getFileUrl`,
        method: 'get',
        params: data,
    });
}

/**
 * @description 下载文件
 * @export
 * @param {*} storageUrl
 * @return {*}
 */
export function apiDownloadFile(storageUrl: string) {
    return myDownload({
        url: '/storage/download',
        params: {
            storageUrl,
        },
    });
}
