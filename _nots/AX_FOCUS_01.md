---
title: AX_FOCUS_01
gistID: 0c43eb29bcb63d363aea
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: focusable element has zero area due to floated child element -->
<a href="http://www.google.com">
  <img src="http://www.google.com/images/srpr/logo11w.png"
       style="float: left" width="269" height="95" alt="Google" >
</a>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}