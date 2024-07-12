export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/ele-form.html", { loader: () => import(/* webpackChunkName: "ele-form.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/ele-form.html.js"), meta: {"title":"公共组件"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"vuePress使用"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"介绍"} }],
  ["/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/markdown.html.js"), meta: {"title":"markdown使用"} }],
  ["/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.html", { loader: () => import(/* webpackChunkName: "开发规范.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/开发规范.html.js"), meta: {"title":"编程规约"} }],
  ["/%E8%8B%B1%E8%AF%AD.html", { loader: () => import(/* webpackChunkName: "英语.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/英语.html.js"), meta: {"title":"英语"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/ShapeForSvg.html", { loader: () => import(/* webpackChunkName: "ShapeForSvg.html" */"D:/work/learn/my-blog/docs/.vuepress/.temp/pages/ShapeForSvg.html.js"), meta: {"title":"ShapeForSvg"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
