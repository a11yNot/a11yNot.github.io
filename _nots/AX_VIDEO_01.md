---
title: AX_VIDEO_01
gistID: 81fc25a8de7476ae6cfc
source: devtools
tags:
- video
- devtools
---

<h2 aria-describedby="{{ page.gistID }}">Example Begin</h2>
<div class="rendered-not">
<!-- Bad: No accessible content -->
<video controls>
    <source src="video.webm" type="video/webm" />
</video>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Example End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Example</h3>
{% gist page.gistID %}