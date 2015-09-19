---
title: Skipped Heading Level
gistID: d16cacdf14f478a7d208
tags:
- heading
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<h3>Level 3 Heading</h3>
<p>Content for the level 3 heading</p>
<h5>Level 5 Heading</h5>
<p>Content for the level 5 heading</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}