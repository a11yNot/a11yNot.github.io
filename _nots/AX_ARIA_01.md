---
title: AX_ARIA_01
gistID: 4b6cd17c1e4a3ad175e6
layout: nots
source: devtools
tags:
- aria
- role
- axe
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<div role="datepicker"></div> <!-- Bad: "datepicker" is not an ARIA role -->
<div role="range"></div>      <!-- Bad: "range" is an _abstract_ ARIA role -->
<div role=""></div>           <!-- Bad: An empty ARIA role is not allowed -->
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}