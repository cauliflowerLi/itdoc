# vuePress使用

## 准备

### 环境

Node.js v18.16.0+

### 安装
```
npm init vuepress vuepress-starter
```

### 启动
```
cd vuepress-starter
npm run docs:dev
```

### 问题

有时候启动服务时会提示缺少依赖包，进入项目根目录后尝试重新安装依赖
```
npm install
```
然后再重新启动服务

## 配置
vuePress使用.md文件作为视图文件，一个.md文件会生成一个同名的.html文件。通过在config.js的theme主题配置navbar中增加路由菜单，即可在页面右上角增加菜单。路由地址支持中文，对应中文的.md文件。
### 首页设置
默认的首页是docs目录下的README.md的内容，对应的路由是config.js中theme中navbar中的'/'。如果想自定义自己的首页视图，可以删除README.md文件，然后自己新建一个同名的文件或者index.md文件。

### 其它菜单
在目录docs中新建任意名称的【可以是中文】英语.md文件，然后在config.js中theme中navbar中追加同名的路由地址即可。
```
navbar: ['/英语'],
```
