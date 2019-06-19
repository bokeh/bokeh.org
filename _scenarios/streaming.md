---
title: Streaming
short: stream
description: Visualize Streaming Data
image: streaming.gif
---
Whether you are streaming data from financial markets, IOT telemetry, or physical sensors, Bokeh has efficient streaming APIs to help you keep on top of things. In a Bokeh server application, it is as simple as passing your new data values to a `stream` method:
```python
source.stream({'x': new_xs, 'y': new_ys})
```

But standalone Bokeh output can handle streaming data too, using either the `AjaxDataSource` or the `ServerSentDataSource`.