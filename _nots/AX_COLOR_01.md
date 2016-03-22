---
title: AX_COLOR_01
gistID: 097599b455099e246b84
source: devtools
tags:
- axe
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: small text with a contrast ratio of less than 4.5:1 -->
<p style="color: gray">  <!-- Contrast ratio 3.95:1 -->
Warning: this product should not be used by any minor without adult supervision.

<!-- Bad: large text with a contrast ratio of less than 3.0:1 -->
<h1 style="color: #BBB">Very subtle heading</h1>  <!-- Contrast ratio 1.92:1 -->
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}
