---
title: AX_ARIA_02
gistID: f6897b666765ca1850d9
source: devtools
tags:
- ainspector 
- axe
- devtools
- wave
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: typo in aria-labelledby value -->
<div id="my-label">Label for text input</div>
<input type="text" aria-labelledby="the-label"></input>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}
