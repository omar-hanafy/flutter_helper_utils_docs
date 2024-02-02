import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.ad306ecc.js";const u=JSON.parse('{"title":"MediaQuery Extension","description":"","frontmatter":{"title":"MediaQuery Extension"},"headers":[],"relativePath":"documentation/media-query-extension.md","filePath":"documentation/media-query-extension.md"}'),o={name:"documentation/media-query-extension.md"},t=n(`<h1 id="mediaquery-extension" tabindex="-1">MediaQuery Extension <a class="header-anchor" href="#mediaquery-extension" aria-label="Permalink to &quot;MediaQuery Extension&quot;">​</a></h1><h2 id="mq" tabindex="-1">mq <a class="header-anchor" href="#mq" aria-label="Permalink to &quot;mq&quot;">​</a></h2><p>You can quickly access <code>MediaQueryData</code> using the following method:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> mediaQueryData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.mq;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> mediaQueryData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.mq;</span></span></code></pre></div><h2 id="nullablemq" tabindex="-1">nullableMQ <a class="header-anchor" href="#nullablemq" aria-label="Permalink to &quot;nullableMQ&quot;">​</a></h2><p>You can access <code>MediaQueryData</code> safely, and it will return <code>null</code> if not available:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> mediaQueryData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.nullableMQ;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> mediaQueryData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.nullableMQ;</span></span></code></pre></div><h2 id="deviceorientation" tabindex="-1">deviceOrientation <a class="header-anchor" href="#deviceorientation" aria-label="Permalink to &quot;deviceOrientation&quot;">​</a></h2><p>Retrieve the device orientation, which can be either landscape or portrait:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> orientation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.deviceOrientation;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> orientation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.deviceOrientation;</span></span></code></pre></div><h2 id="navigationmode" tabindex="-1">navigationMode <a class="header-anchor" href="#navigationmode" aria-label="Permalink to &quot;navigationMode&quot;">​</a></h2><p>You can also retrieve the device&#39;s navigation mode:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> navMode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.navigationMode;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> navMode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.navigationMode;</span></span></code></pre></div><h2 id="padding-and-viewinsets" tabindex="-1">padding and viewInsets <a class="header-anchor" href="#padding-and-viewinsets" aria-label="Permalink to &quot;padding and viewInsets&quot;">​</a></h2><p>Access the screen&#39;s padding and view insets. This is useful for accommodating elements like notches, the system status bar, or software keyboards:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> padding </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.padding;</span></span>
<span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> viewInsets </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.viewInsets;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> padding </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.padding;</span></span>
<span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> viewInsets </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.viewInsets;</span></span></code></pre></div><h2 id="screendimensions" tabindex="-1">screenDimensions <a class="header-anchor" href="#screendimensions" aria-label="Permalink to &quot;screenDimensions&quot;">​</a></h2><p>Easily get the screen&#39;s width, height, shortest and longest side:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.widthPx;</span></span>
<span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.heightPx;</span></span>
<span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> shortest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.shortestSide;</span></span>
<span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> longest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.longestSide;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> width </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.widthPx;</span></span>
<span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.heightPx;</span></span>
<span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> shortest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.shortestSide;</span></span>
<span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> longest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.longestSide;</span></span></code></pre></div><h2 id="additionalfeatures" tabindex="-1">additionalFeatures <a class="header-anchor" href="#additionalfeatures" aria-label="Permalink to &quot;additionalFeatures&quot;">​</a></h2><p>You can also retrieve the device&#39;s pixel ratio, text scale factor, and accessibility settings like <code>boldText</code>, <code>disableAnimations</code>, and more directly from the context:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> pixelRatio </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.pixelRatio;</span></span>
<span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> textFactor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.txtScaleFactor;</span></span>
<span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> isBoldText </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context.boldText;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> pixelRatio </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.pixelRatio;</span></span>
<span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> textFactor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.txtScaleFactor;</span></span>
<span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> isBoldText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> context.boldText;</span></span></code></pre></div>`,22),l=[t];function p(i,c,r,d,y,h){return s(),e("div",null,l)}const g=a(o,[["render",p]]);export{u as __pageData,g as default};