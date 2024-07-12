<template><div><h1 id="vuepress使用" tabindex="-1"><a class="header-anchor" href="#vuepress使用"><span>vuePress使用</span></a></h1>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h2>
<h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h3>
<p>Node.js v18.16.0+</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm init vuepress vuepress-starter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">cd vuepress-starter</span>
<span class="line">npm run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h3>
<p>有时候启动服务时会提示缺少依赖包，进入项目根目录后尝试重新安装依赖</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后再重新启动服务</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>vuePress使用.md文件作为视图文件，一个.md文件会生成一个同名的.html文件。通过在config.js的theme主题配置navbar中增加路由菜单，即可在页面右上角增加菜单。路由地址支持中文，对应中文的.md文件。</p>
<h3 id="首页设置" tabindex="-1"><a class="header-anchor" href="#首页设置"><span>首页设置</span></a></h3>
<p>默认的首页是docs目录下的README.md的内容，对应的路由是config.js中theme中navbar中的'/'。如果想自定义自己的首页视图，可以删除README.md文件，然后自己新建一个同名的文件或者index.md文件。</p>
<h3 id="其它菜单" tabindex="-1"><a class="header-anchor" href="#其它菜单"><span>其它菜单</span></a></h3>
<p>在目录docs中新建任意名称的【可以是中文】英语.md文件，然后在config.js中theme中navbar中追加同名的路由地址即可。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">navbar: ['/英语'],</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


