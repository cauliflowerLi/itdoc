<template><div><h1 id="markdown使用" tabindex="-1"><a class="header-anchor" href="#markdown使用"><span>markdown使用</span></a></h1>
<h2 id="字体倾斜" tabindex="-1"><a class="header-anchor" href="#字体倾斜"><span>字体倾斜</span></a></h2>
<p><em>字体倾斜</em>单星号包括要倾斜显示的文本。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">*Italic*</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="字体加粗" tabindex="-1"><a class="header-anchor" href="#字体加粗"><span>字体加粗</span></a></h2>
<p><strong>字体加粗</strong>双星号包括要加粗显示的文本。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">**Bold**</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线"><span>删除线</span></a></h2>
<p><s>删除线</s>双星号包括要加粗显示的文本。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">~~删除线~~</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="表情" tabindex="-1"><a class="header-anchor" href="#表情"><span>表情</span></a></h2>
<p>😀</p>
<h2 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题"><span>一级标题</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"># 一级标题</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题"><span>二级标题</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">## 二级标题</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">使用[]()组合，[]中是链接名称，()中是真正的链接跳转地址</span>
<span class="line">[Link](http://a.com)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h2>
<p>使用以下格式可以在页面显示一张图片，如果想使用本地图片，需要将本地项目上传到git托管后，使用git上的图片地址。
<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="Image"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">![Image](http://url/a.png)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="块引用" tabindex="-1"><a class="header-anchor" href="#块引用"><span>块引用</span></a></h2>
<blockquote>
<p>Blockquote</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"> > Blockquote</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="无索引的列表" tabindex="-1"><a class="header-anchor" href="#无索引的列表"><span>无索引的列表</span></a></h2>
<p>在列表每一项前面加* 星号，要注意*号与文字之间留空格</p>
<ul>
<li>足球</li>
<li>篮球</li>
<li>排球</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">* 足球</span>
<span class="line">* 篮球</span>
<span class="line">* 排球</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有索引的列表" tabindex="-1"><a class="header-anchor" href="#有索引的列表"><span>有索引的列表</span></a></h2>
<p>在列表每一项前面数字.与文字之间留空格</p>
<ol>
<li>足球</li>
<li>篮球</li>
<li>排球</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">1. 足球</span>
<span class="line">2. 篮球</span>
<span class="line">3. 排球</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="水平线" tabindex="-1"><a class="header-anchor" href="#水平线"><span>水平线</span></a></h2>
<h2 id="添加水平线" tabindex="-1"><a class="header-anchor" href="#添加水平线"><span>添加水平线</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">加水平线的文字</span>
<span class="line">---</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建table" tabindex="-1"><a class="header-anchor" href="#创建table"><span>创建table</span></a></h2>
<p>使用|隔离单元格，使用-它上面的是表头。高级一点的：</p>
<ul>
<li>:---下面tbody单元格内容左对齐</li>
<li>:---:下面tbody单元格内容居中对齐</li>
<li>---:下面tbody单元格内容右对齐</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">左对齐列</th>
<th style="text-align:center">居中显示列</th>
<th style="text-align:right">右对齐列</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">我是单元格内容</td>
<td style="text-align:center">我是单元格内容</td>
<td style="text-align:right">我是单元格内容</td>
</tr>
<tr>
<td style="text-align:left">我是单元格内容</td>
<td style="text-align:center">我是单元格内容</td>
<td style="text-align:right">我是单元格内容</td>
</tr>
</tbody>
</table>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">| 左对齐列    |  居中显示列  |    右对齐列 |</span>
<span class="line">|:--------|:-------:|--------:|</span>
<span class="line">| 我是单元格内容 | 我是单元格内容 | 我是单元格内容 |</span>
<span class="line">| 我是单元格内容 | 我是单元格内容 | 我是单元格内容 |</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


