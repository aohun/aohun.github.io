import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    hostname: "https://gitee.com/itllb",
    author: {
        name: "wayne",
        url: "https://gitee.com/itllb",
    },
    iconAssets: "https://at.alicdn.com/t/c/font_4043253_v7nldr3uv7.css",
    iconPrefix: "iconfont icon-",
    logo: "/logo.png",
    docsDir: "src",
    print: false,
    locales: {
        "/": {
            navbar,
            sidebar,
            displayFooter: false,
            metaLocales: {
                editLink: "前往 Gitee 编辑此页",
            },
        },
    },
    editLink: false,

    plugins: {
        searchPro: {},
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            demo: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
        }
    }
});
