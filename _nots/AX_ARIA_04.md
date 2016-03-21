---
title: AX_ARIA_04
gistID: 020196353cc3790ed78d
source: devtools
tags:
- axe
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the aria-hidden state is of type true/false -->
<span aria-hidden="yes">foo</span>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}
