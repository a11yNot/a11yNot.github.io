---
title: AX_FOCUS_02
gistID: 773000cae29e38d9b8a6
source: devtools
tags:
- ainspector
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: span with onclick attribute has no tabindex -->
<span onclick="submitForm();">Submit</span>

<!-- Bad: anchor element without href is not focusable -->
<a onclick="showNextPage();">Next page</a>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}
