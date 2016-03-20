---
title: AX_ARIA_07
gistID: 7da5d9473e61d781135e
source: devtools
tags:
- aria
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: list1 is owned by two comboboxes -->
<input id="combo1" type="text" role="combobox" aria-labelledby="foo" aria-owns="list1"/>

<input id="combo2" type="text" role="combobox" aria-labelledby="foo" aria-owns="list1"/>

<ul id="list1" aria-expanded="true" role="listbox">
    <li role="option" tabindex="-1">Rainbow Trout</li>
    <li role="option" tabindex="-1">Brook Trout</li>
    <li role="option" tabindex="-1">Lake Trout</li>
</ul>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}