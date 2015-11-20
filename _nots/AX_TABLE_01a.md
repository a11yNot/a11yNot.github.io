---
title: AX_TABLE_01a
gistID: 42a9cd1ae7125e0b1e75
layout: nots-devtools
tags:
- table
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<div class="rendered-not">
<!-- Bad: Table has incomplete header row -->
<table> 
  <tr>
    <th>Header</th>
    <th>Header</th>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>

<!-- Good: Table has incomplete header column -->
<table> 
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <th>Header</th>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>

<!-- Bad: Table has no headers -->
<table> 
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>
</div> <!-- rendered-not -->

<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for this Not</h3>
{% gist page.gistID %}