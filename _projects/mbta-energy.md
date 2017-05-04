---
sortorder: 3
title: MBTA Energy
subtitle: Interactive Information
color: {r: 155, g: 212, b: 73}
fallbackcolor: '#040c0c'
links:
  Details: /projects/mbta-energy
  View_site: https://notwoods.github.io/mbta-energy/
  Code: https://github.com/NotWoods/mbta-energy
tech:
  - JavaScript
  - FileReader API
  - CSV Parsing
description: >
  An app I created to visualize data generated by electricity monitoring devices,
  transforming it into graphs. Data views could be changed,
  and custom data could be uploaded by users. With this program, students
  were able to identify odd electricity usage, such as a power spike from
  the refrigerator at 4am.
---
An energy monitor tool I volunteered to create in 2014.
It was designed to assist my teacher and class in aggregating data,
replacing the need to manually manipulate a spreadsheet.
Instead, the tool let them import data generated by Belkin WeMo Insight Switch
devices and The Energy Detective Electricity Monitor. The data was used
to automatically calculate reports, and chart electricity usage for the
class to analyze.

Using this tool, students found abnormal energy fluctuations, such as a spike
in power from the copy machine at 4am. The data could also be filtered to show
a single average line, or only data from weekdays.

The program implements the JavaScript **FileReader API** to import data,
and a custom **CSV parser** to read it.

___

![An energy chart](/images/mbta-energy/chart.png)