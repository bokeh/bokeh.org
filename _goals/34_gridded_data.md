---
description: Improve Handling of Gridded Data
---
Bokeh has good basic support for any type of data, but does not
include any special optimizations for the common case of scalar,
linear, or image data sampled on a regular timebase. Gridded 0D/1D/2D
timeseries data of this type arises often in scientific or engineering
data-acquisition and analysis contexts involving point, line, or image
sensors, such as microphones or temperature probes, electrode arrays,
camera or microscope images, and so on. Bokeh's performance, ease of
use, and ease of application can be greatly improved to cover these
cases well, building on the existing efficient binary transport mechanisms
while improving performance, adding user interface elements to
work with streaming data, and showing examples for researchers to follow.
