---
title: Broken Same-Page Link
gistID: b72fe62bcf7a2ed0617d
tags:
- link
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<p><a href="#nowhere">The destination for this same-page link doesn't exist</a>.</p>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}