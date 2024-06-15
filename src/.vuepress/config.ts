import {defineUserConfig} from "vuepress";

import {removePwaPlugin} from "@vuepress/plugin-remove-pwa";
import {viteBundler} from '@vuepress/bundler-vite'

import theme from "./theme";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "One-PI",
            description: "组件化 模块化 轻耦合 高扩展 针对企业痛点 业界一流技术栈",
        },
    },
    theme,
    shouldPrefetch: true,
    plugins: [
        removePwaPlugin({}),
    ],
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    head: [['script', {}, `       
        var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3cc55ab75d5204bb4f1eadda7a7d3322";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`]]
});

