---
title: AX_ARIA_06
gistID: aaf96aa84b339234be4c
layout: nots-devtools
tags:
- aria
---
<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: the ownership is implicit in the DOM structure (each radio is a descendant of the radiogroup) -->
<ul role="radiogroup" aria-labelledby="foo" aria-owns="radio1 radio2 radio3"> 
    <li id="radio1" tabindex="-1" role="radio" aria-checked="false">Rainbow Trout</li> 
    <li id="radio2" tabindex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li id="radio3" tabindex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}