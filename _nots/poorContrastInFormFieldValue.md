---
title: Poor Contrast In Form Field Value
gistID: ca0286f8a98ba1f65b20
tags:
- color
- contrast
- form
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<label for="firstName">First Name</label><input id="firstName" type="text" value="Your First Name" style="background-color: white; color: red">
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}