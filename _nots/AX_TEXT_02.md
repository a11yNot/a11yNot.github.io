---
title: AX_TEXT_02
gistID: 7afd836ce46ccdf3131e
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: no alternative content provided for informative image -->
<img src="stateDiagram.jpg">

<!-- Bad: presentational image may not be hidden from assistive technology -->
<img src="horizontalLine.jpg">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}