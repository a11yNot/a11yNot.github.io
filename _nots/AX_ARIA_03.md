---
title: AX_ARIA_03
gistID: 97244f670e69d8e430cc
source: devtools
tags:
- aria
- label
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}