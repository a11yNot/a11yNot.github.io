---
title: AX_VIDEO_01
gistID: 81fc25a8de7476ae6cfc
layout: nots-devtools
tags:
- video
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: No accessible content -->
<video controls>
    <source src="video.webm" type="video/webm" />
</video>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}