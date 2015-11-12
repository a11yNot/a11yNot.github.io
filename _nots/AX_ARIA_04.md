---
title: AX_ARIA_04
gistID: 020196353cc3790ed78d
layout: nots-devtools
tags:
- aria
- devtools
---
<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: the aria-hidden state is of type true/false -->
<span aria-hidden="yes">foo</span>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}