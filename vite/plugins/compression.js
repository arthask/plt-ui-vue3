import compression from 'vite-plugin-compression';
export default function createCompression(env) {
    var VITE_BUILD_COMPRESS = env.VITE_BUILD_COMPRESS;
    var plugin = [];
    if (VITE_BUILD_COMPRESS) {
        var compressList = VITE_BUILD_COMPRESS.split(',');
        if (compressList.includes('gzip')) {
            // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
            plugin.push(compression({
                ext: '.gz',
                deleteOriginFile: false,
            }));
        }
        if (compressList.includes('brotli')) {
            plugin.push(compression({
                ext: '.br',
                algorithm: 'brotliCompress',
                deleteOriginFile: false,
            }));
        }
    }
    return plugin;
}
