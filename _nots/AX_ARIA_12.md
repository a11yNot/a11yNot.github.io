---
title: AX_ARIA_12
gistID: 2a24e6e39f1ca539dd5b
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" aria-hidden="false">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}
