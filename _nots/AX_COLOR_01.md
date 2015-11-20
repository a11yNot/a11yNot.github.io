---
title: AX_COLOR_01
gistID: 097599b455099e246b84
layout: nots-devtools
tags:
- color
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: small text with a contrast ratio of less than 4.5:1 -->
<p style="color: gray">  <!-- Contrast ratio 3.95:1 -->
Warning: this product should not be used by any minor without adult supervision.

<!-- Bad: large text with a contrast ratio of less than 3.0:1 -->
<h1 style="color: #BBB">Very subtle heading</h1>  <!-- Contrast ratio 1.92:1 -->
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}