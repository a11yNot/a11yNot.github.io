---
title: Poor Contrast for Regular Text
gistID: 702d0281365dc808613b
tags:
- color
- contrast
- wcag143
- wcagaa
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<p style="color: red; background: white">This sentence uses the default CSS "red" on a "white" background.</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}