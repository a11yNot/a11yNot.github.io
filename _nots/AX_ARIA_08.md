---
title: AX_ARIA_08
gistID: e24ea75ba197acb94d6a
source: devtools
tags:
- axe
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the radiogroup role must own elements with role radio -->
<ul role="radiogroup" aria-labelledby="foo"> 
    <li id="radio1" tabindex="-1">Rainbow Trout</li> 
    <li id="radio2" tabindex="-1">Brook Trout</li>
    <li id="radio3" tabindex="0">Lake Trout</li>
</ul>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}