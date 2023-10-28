import{_ as a,o as s,c as e,Q as o}from"./chunks/framework.edbfdbf1.js";const E=JSON.parse('{"title":"Duration Extension","description":"","frontmatter":{"title":"Duration Extension"},"headers":[],"relativePath":"documentation/duration-extension.md","filePath":"documentation/duration-extension.md"}'),n={name:"documentation/duration-extension.md"},t=o('<h1 id="duration-extension" tabindex="-1">Duration Extension <a class="header-anchor" href="#duration-extension" aria-label="Permalink to &quot;Duration Extension&quot;">​</a></h1><h2 id="delayed" tabindex="-1"><code>delayed</code> <a class="header-anchor" href="#delayed" aria-label="Permalink to &quot;`delayed`&quot;">​</a></h2><p>Utility to delay some code execution.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;">seconds.</span><span style="color:#B392F0;">delay</span><span style="color:#E1E4E8;">(() {</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Your code here</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;">seconds.</span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(() {</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Your code here</span></span>\n<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="fromnow" tabindex="-1"><code>fromNow</code> <a class="header-anchor" href="#fromnow" aria-label="Permalink to &quot;`fromNow`&quot;">​</a></h2><p>Adds the Duration to the current <code>DateTime</code> and gives a future time.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> futureTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;">minutes.fromNow;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> futureTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5.</span><span style="color:#24292E;">minutes.fromNow;</span></span></code></pre></div><h2 id="ago" tabindex="-1"><code>ago</code> <a class="header-anchor" href="#ago" aria-label="Permalink to &quot;`ago`&quot;">​</a></h2><p>Subtracts the Duration from the current <code>DateTime</code> and gives a past time.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> pastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;">minutes.ago;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> pastTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5.</span><span style="color:#24292E;">minutes.ago;</span></span></code></pre></div>',10),l=[t];function p(c,r,i,d,u,y){return s(),e("div",null,l)}const m=a(n,[["render",p]]);export{E as __pageData,m as default};