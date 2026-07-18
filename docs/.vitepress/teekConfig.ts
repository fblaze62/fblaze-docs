import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "FeatherBlaze", link: "https://github.com/fblaze62" },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2026,
      suffix: "FeatherBlaze",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
  // 文章页底部的最近更新栏配置
  articleUpdate: {
    enabled: false, // 是否启用文章最近更新栏
    limit: 3, // 文章最近更新栏显示数量
  },
  // 评论配置，目前内置 Giscus、Twikoo、Waline、Artalk 四种评论插件
  comment: {
    provider: "waline", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      // envId: "your envId",

      // waline 配置，官网：https://waline.js.org/
      serverURL: "https://cmts.docs.fblaze62.top",
      jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",
      // 设置 Waline 评论系统语言
      lang: "zh-CN",
      // 设置 Waline 评论系统表情地址
      emoji: [
        "https://unpkg.com/@waline/emojis@1.4.0/weibo",
        "https://unpkg.com/@waline/emojis@1.4.0/bilibili",
        "https://unpkg.com/@waline/emojis@1.4.0/bmoji",
      ],
      // 评论登录模式。可选值如下：
      //   'enable'   —— 默认，允许访客匿名评论和用第三方 OAuth 登录评论，兼容性最佳。
      //   'force'    —— 强制必须登录后才能评论，适合严格社区，关闭匿名评论。
      //   'disable'  —— 禁止所有登录和 OAuth，仅允许匿名评论（填写昵称/邮箱），适用于极简留言。
      login: "force",
      // 是否启用文章访问量统计功能
      visitorCount: true,

      // giscus 配置，官网：https://giscus.app/zh-CN
      // repo: "your name/your repo",
      // repoId: "your repoId",
      // category: "your category",
      // categoryId: "your categoryId",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "your server",
      // site: "site",
    },
  },
});
