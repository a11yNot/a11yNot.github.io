---
title: AX_TEXT_01
gistID: de8704af985f60a4bb4d
source: devtools
tags:
- ainspector
- axe
- devtools
- wave
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<div>
  Enter your address:
  <input id="address">                <!-- Bad: label not associated with control -->
</div>

<button class="enter_site"></button>  <!-- Bad: button has no text description -->
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}