---
title: AX_ARIA_12
gistID: 2a24e6e39f1ca539dd5b
source: devtools
tags:
- aria
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" aria-hidden="false">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}