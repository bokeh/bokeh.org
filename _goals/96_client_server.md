---
description: Pluggable Client-Server Communications
---
Bokeh uses Tornado and WebSockets for communication between the server and client, and bespoke
code to serialize/deserialize messages.
It would be beneficial to decouple Bokeh functionality from the communication implementation and
allow others such as those based on Jupyter and ZeroMQ for example.
This would require a review and specification of the required communication and serialization
functionality, and at least two pluggable implementations, one of which would be the current one.