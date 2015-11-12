---
title: AX_ARIA_12
gistID: 2a24e6e39f1ca539dd5b
layout: nots-devtools
tags:
- aria
---
<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" aria-hidden="false">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}