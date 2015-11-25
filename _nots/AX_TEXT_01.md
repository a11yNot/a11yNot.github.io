---
title: AX_TEXT_01
gistID: de8704af985f60a4bb4d
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<div>
  Enter your address:
  <input id="address">                <!-- Bad: label not associated with control -->
</div>

<button class="enter_site"></button>  <!-- Bad: button has no text description -->
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}