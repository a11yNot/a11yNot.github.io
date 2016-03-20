---
title: AX_TEXT_02
gistID: 7afd836ce46ccdf3131e
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: no alternative content provided for informative image -->
<img src="stateDiagram.jpg">

<!-- Bad: presentational image may not be hidden from assistive technology -->
<img src="horizontalLine.jpg">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}