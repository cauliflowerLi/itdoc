<template><div><h1 id="公共组件" tabindex="-1"><a class="header-anchor" href="#公共组件"><span>公共组件</span></a></h1>
<p>一级菜单对应的组件，如Form组件，里面会集成对接各子组件。实现表单开发时传入字段说明和类型、表单初始数据等配置项，即可生成一个表单。Table、Search等组件同理。</p>
<h2 id="form" tabindex="-1"><a class="header-anchor" href="#form"><span>Form</span></a></h2>
<p>表单组件配置项说明</p>
<h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3>
<p>文本框组件配置项说明</p>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>select</span></a></h3>
<p>下拉框组件配置项说明</p>
<h3 id="datepicker" tabindex="-1"><a class="header-anchor" href="#datepicker"><span>datepicker</span></a></h3>
<p>日期组件配置项说明</p>
<h3 id="radio" tabindex="-1"><a class="header-anchor" href="#radio"><span>radio</span></a></h3>
<p>单选组件配置项说明</p>
<h3 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox"><span>checkbox</span></a></h3>
<p>复选框组件配置项说明</p>
<h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>switch</span></a></h3>
<p>开关组件配置项说明</p>
<h2 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>Table</span></a></h2>
<p>列表组件配置项说明</p>
<h2 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>Search</span></a></h2>
<p>分页查询表单组件配置项说明</p>
<h2 id="shapeforsvg" tabindex="-1"><a class="header-anchor" href="#shapeforsvg"><span>ShapeForSvg</span></a></h2>
<p>使用svg编写的，可配置宽高大小、背景颜色等大屏中用来作为模块背景的底框。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install ShapeForSvg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import ShapeForSvg from 'ShapeForSvg';</span>
<span class="line">Vue.component("ShapeForSvg",ShapeForSvg);</span>
<span class="line">&lt;ShapeForSvg></span>
<span class="line">	&lt;template #header>标题&lt;/template></span>
<span class="line">	&lt;div class="wrapper">我是内容&lt;/div></span>
<span class="line">&lt;/ShapeForSvg></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性配置项" tabindex="-1"><a class="header-anchor" href="#属性配置项"><span>属性配置项</span></a></h3>
<blockquote>
<p>width:Number
组件显示宽度，默认200</p>
</blockquote>
<blockquote>
<p>height:Number
组件显示高度，默认200</p>
</blockquote>
<blockquote>
<p>startOpacity:Number
背景渐变透明度：开始位置，0-1范围内，默认0.59</p>
</blockquote>
<blockquote>
<p>endOpacity:Number
背景渐变透明度：结束位置，0-1范围内，默认0.59</p>
</blockquote>
<blockquote>
<p>titleWidth:Number
标题宽度，默认218</p>
</blockquote>
<blockquote>
<p>titleHeight:Number
标题高度，默认40</p>
</blockquote>
<blockquote>
<p>dif:Number
标题背景上下线插值的一半，默认18</p>
</blockquote>
<blockquote>
<p>startColor:String
背景渐变：开始颜色</p>
</blockquote>
<blockquote>
<p>endColor:String
背景渐变：结束颜色</p>
</blockquote>
<blockquote>
<p>titleFill:String
标题背景颜色</p>
</blockquote>
<blockquote>
<p>hornStrokeColor:String
四角折线颜色</p>
</blockquote>
<blockquote>
<p>titleStrokeColor:String
标题上蓝色横线：颜色</p>
</blockquote>
<h3 id="组件效果" tabindex="-1"><a class="header-anchor" href="#组件效果"><span>组件效果</span></a></h3>
<p><img src="https://raw.githubusercontent.com/cauliflowerLi/shapeForSvg/master/src/assets/img.png" alt="Image"></p>
</div></template>


