---
title: Broken Same-Page Link
gistID: b72fe62bcf7a2ed0617d
tags:
- link
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<p><a href="#nowhere">The destination for this same-page link doesn't exist</a>.</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}