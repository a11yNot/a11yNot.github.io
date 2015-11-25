---
title: AX_ARIA_11
gistID: 792c0ce0c42c82529c39
source: devtools
tags:
- aria
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: Labeled using incorrectly spelled aria-labeledby -->
<div id="address_label">Enter your address</div>
<input aria-labeledby="address_label">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}