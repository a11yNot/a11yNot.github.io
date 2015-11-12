---
title: AX_ARIA_03
gistID: 97244f670e69d8e430cc
layout: nots-devtools
tags:
- aria
- label
- devtools
---
<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}