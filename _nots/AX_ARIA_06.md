---
title: AX_ARIA_06
gistID: aaf96aa84b339234be4c
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the ownership is implicit in the DOM structure (each radio is a descendant of the radiogroup) -->
<ul role="radiogroup" aria-labelledby="foo" aria-owns="radio1 radio2 radio3"> 
    <li id="radio1" tabindex="-1" role="radio" aria-checked="false">Rainbow Trout</li> 
    <li id="radio2" tabindex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li id="radio3" tabindex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}