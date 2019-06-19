---
description: Selection and Hover
---
Bokeh supports various sorts of hit testing for selection and hover on a per-glyph basis.
It would be good to make support more uniform by adding the requisite hit testing wherever it is currently missing.
Additionally Bokeh needs a policy-based mechanism for dealing with “multiple hits” i.e. if the mouse hovers over 50 points, a way to show just one, or just the top N, or even some aggregation or summary as the hover.