---
title: AX_ARIA_07
gistID: 7da5d9473e61d781135e
layout: nots-devtools
tags:
- aria
---
<p>This code example is taken from the <a href="https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules">Accessibility Developer Tool Documentation</a></p>

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
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

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}