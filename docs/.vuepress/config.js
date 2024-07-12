import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'en-US',

  title: '前端技术与规范文档',
  description: '前端技术与规范文档',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',
    logo: 'https://ids.wzgroup.cn/images/logo/loginLogo.png',

    navbar: ['/','/开发规范','/ele-form','/markdown'],
  }),

  bundler: webpackBundler(),
})
