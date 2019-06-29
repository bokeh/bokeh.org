---
description: Use WebGL Consistently
---
Bokeh currently can use WebGL to accelerate plotting for larger datasets in some limited situations.
In addition to not fully supporting some use-cases, the internal cost is having to maintain two separate code paths.
It would be desirable to convert Bokeh’s rendering to always use WebGL whenever possible, so that better performance for larger data sets is always available, and to streamline maintenance for the future.