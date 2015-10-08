---
title: Pagination Links with Visual Cues
gistID: e8297271d5679c31a442
tags:
- link
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<ul>
  <li style="display: inline;"><a href="">First</a></li>
  <li style="display: inline;"><a href="">&lt;</a></li>
  <li style="display: inline;"><a href="">1</a></li>
  <li style="display: inline;"><a href="">2</a></li>
  <li style="display: inline;"><a href="">3</a></li>
  <li style="display: inline;">4</li>
  <li style="display: inline;"><a href="">5</a></li>
  <li style="display: inline;"><a href="">6</a></li>
  <li style="display: inline;"><a href="">&gt;</a></li>
  <li style="display: inline;"><a href="">Last</a></li>
</ul>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}
