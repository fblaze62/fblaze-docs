import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";

const description = [
  "✨一个自由、开放的 Minecraft 服务器",
  "这是飞焰矩阵服务器的文档，在这你可以找到关于飞焰矩阵服务器的一切。",
  "<b>飞焰矩阵 (FBlaze Matrix)</b>是一个自由、开放的 <mark>Minecraft</mark> 服务器，欢迎各位玩家加入！",
].toString();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "飞焰矩阵 文档",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "https://gcore.jsdelivr.net/gh/fblaze62/fblaze-doc@main/docs/public/fb-logo-mini.svg" },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/fb-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "飞焰矩阵 文档" }],
    ["meta", { property: "og:site_name", content: "飞焰矩阵 文档" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "FeatherBlaze" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://docs.fblaze62.top", // ** 换成你的域名
    transformItems: (items) => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
        .permalinks;
      items.forEach((item) => {
        const permalink = permalinks?.map[item.url];
        if (permalink)
          permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://gcore.jsdelivr.net/gh/fblaze62/fblaze-doc@main/docs/public/fb-logo-mini.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "玩家指南",
        link: "/guide/player/download-modpack",
        activeMatch: "/01.玩家指南/01.加入服务器",
      },
      {
        text: "管理员指南",
        link: "/guide/op/plugin/AuthMe",
        activeMatch: "/02.管理员指南/01.插件/"
      },
      {
        text: "贡献指南",
        link: "/guide/contribute/docs/edit",
        activeMatch: "/03.贡献指南/01.维护文档/"
      },
      // {
      //   text: "功能页",
      //   items: [
      //     { text: "归档页", link: "/archives" },
      //     { text: "清单页", link: "/articleOverview" },
      //     {
      //       text: "风险链接提示页",
      //       link: "/risk-link?target=https://vp.teek.top",
      //     },
      //     { text: "分类页", link: "/categories" },
      //     { text: "标签页", link: "/tags" },
      //   ],
      // },
    ],
    socialLinks: [
      {
        icon: "qq",
        link: "https://qm.qq.com/cgi-bin/qm/qr?k=9nXo2s8a3l7b1h0ZyKjYl5u9eQGgHqN&jump_from=webapi"
      },
      {
        icon: "github",
        link: "https://github.com/fblaze62/fblaze-doc",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern:
        "https://github.com/fblaze62/fblaze-doc/edit/main/docs/:path",
    },
  },
  vite: {
    plugins: [llmstxt() as any],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
  // 滚动到评论区配置
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("滚动到评论区成功"), // 滚动到评论区后的回调
  },
});
