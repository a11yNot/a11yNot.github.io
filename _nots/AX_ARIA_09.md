---
title: AX_ARIA_09
gistID: 428bac8391a7f1a56145
layout: nots-devtools
tags:
- aria
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: the listitem role must be owned by an element with role list -->
<div> 
    <span role="listitem">Rainbow Trout</span> 
    <span role="listitem">Brook Trout</span>
    <span role="listitem">Lake Trout</span>
</div>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}