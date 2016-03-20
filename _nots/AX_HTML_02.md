---
title: AX_HTML_02
gistID: f5910b21c535988894a3
source: devtools
tags:
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: the id 'trout' should only occur once in the "page" -->
<input type="radio" id="trout" name="trout" value="rainbow"/>
<input type="radio" id="trout" name="trout" value="brook"/>
<input type="radio" id="trout" name="trout" value="lake"/>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}