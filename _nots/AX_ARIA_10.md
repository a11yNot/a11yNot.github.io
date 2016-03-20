---
title: AX_ARIA_10
gistID: 4bc567244032d0a5448c
source: devtools
tags:
- aria
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the radio role does not support the aria-required property -->
<ul role="radiogroup" aria-labelledby="foo"> 
    <li aria-required="true" tabindex="-1" role="radio" aria-checked="false">Rainbow Trout</li> 
    <li aria-required="true" tabindex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li aria-required="true" tabindex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}