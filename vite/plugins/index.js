import vue from '@vitejs/plugin-vue';
import createAutoImport from './auto-import';
import createComponents from "./components";
import createSvgIcon from './svg-icon';
import createCompression from './compression';
import createSetupExtend from './setup-extend';
export default function createVitePlugins(viteEnv, isBuild) {
    if (isBuild === void 0) { isBuild = false; }
    var vitePlugins = [vue()];
    vitePlugins.push(createAutoImport());
    vitePlugins.push(createComponents());
    vitePlugins.push(createSetupExtend());
    vitePlugins.push(createSvgIcon(isBuild));
    isBuild && vitePlugins.push.apply(vitePlugins, createCompression(viteEnv));
    return vitePlugins;
}
