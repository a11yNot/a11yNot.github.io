---
title: Poor Contrast In Form Field Placeholder
gistID: bb395470e8ca7699bc09
tags:
- color
- contrast
- form
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<label for="firstName">First Name</label><input id="firstName" type="text" placeholder="Your First Name">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}