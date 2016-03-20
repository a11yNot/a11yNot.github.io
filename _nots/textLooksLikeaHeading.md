---
title: Text Looks Like a Heading
gistID: b95e2d2be08a93bff187
tags:
- heading
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<h3>Real Heading Level 3</h3>
<p style="font-weight: bold; font-size: 20px;">Fake Heading Level 3</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}