---
title: AX_ARIA_02
gistID: f6897b666765ca1850d9
layout: nots-devtools
tags:
- aria
- label
---
<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: typo in aria-labelledby value -->
<div id="my-label">Label for text input</div>
<input type="text" aria-labelledby="the-label"></input>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}