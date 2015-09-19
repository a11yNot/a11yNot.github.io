---
title: Text Looks Like a Heading
gistID: b95e2d2be08a93bff187
tags:
- heading
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<h3>Real Heading Level 3</h3>
<p style="font-weight: bold; font-size: 20px;">Fake Heading Level 3</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}