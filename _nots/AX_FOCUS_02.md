---
title: AX_FOCUS_02
gistID: 773000cae29e38d9b8a6
layout: nots-devtools
tags:
- focus
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: span with onclick attribute has no tabindex -->
<span onclick="submitForm();">Submit</span>

<!-- Bad: anchor element without href is not focusable -->
<a onclick="showNextPage();">Next page</a>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}