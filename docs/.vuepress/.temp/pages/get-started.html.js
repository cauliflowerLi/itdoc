import comp from "D:/work/learn/my-blog/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"vuePress使用\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"准备\",\"slug\":\"准备\",\"link\":\"#准备\",\"children\":[{\"level\":3,\"title\":\"环境\",\"slug\":\"环境\",\"link\":\"#环境\",\"children\":[]},{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":3,\"title\":\"启动\",\"slug\":\"启动\",\"link\":\"#启动\",\"children\":[]},{\"level\":3,\"title\":\"问题\",\"slug\":\"问题\",\"link\":\"#问题\",\"children\":[]}]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"首页设置\",\"slug\":\"首页设置\",\"link\":\"#首页设置\",\"children\":[]},{\"level\":3,\"title\":\"其它菜单\",\"slug\":\"其它菜单\",\"link\":\"#其它菜单\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
