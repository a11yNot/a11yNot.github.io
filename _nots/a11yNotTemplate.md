---
# 1. Set the title
# 2. Set the gistID
# 3. Set the tags
# 4. Copy/Paste the gist code between "Not Begin" and "Not End"
#
# Thanks for your contribution!
#
title: Plain Text Description Of The Issue
# set gistID to the ID of your gist
# Example Gist: https://gist.github.com/garcialo/702d0281365dc808613b
gistID: 702d0281365dc808613b
tags:
- create
- tags
- like
- this
# Please include tags for appropriate WCAG or Section 508 rules
# For WCAG Level, use wcaga, wcagaa, or wcagaaa
# For WCAG Guideline, use something like wcag111, wcag121, wcag 122, etc.
# For Section 508, use 508
# For Section 508 paragraph, use 508a, 508b, 508c, etc.
---

<h2 aria-describedby="{{ page.gistID }}">Not Begin</h2>
<!-- Replace this comment with the code from the gist -->
<h2 aria-describedby="{{ page.gistID }}">Not End</h2>

<h3 aria-describedby="{{ page.gistID }}">Code for Example</h3>
{% gist page.gistID %}