---
title: AX_HTML_01
gistID: 37ce3c0be0f48ce984cb
layout: badlang
source: devtools
tags:
- language
- devtools
---

<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<p>This Not can not be rendered on the page.</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}