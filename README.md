Viima Feedback Widget
===============

This is the home of the Feedback Widget for the Viima App. Please note that you'll need a working Viima account to use the widget. Contact us if you'd like to have one ;)


**Basic usage:**

1) Download and include the library in the head of your HTML document:

```<script src="viima-feedback-widget.js"></script>```

2) Initiate the library:
```
<script type=text/javascript>
  initiateViima('viima', '/img/feedback.png');
</script>
```
We recommend to do the initiation either at the end of your body or once the page has been otherwise loaded.

**The library currently supports 9 parameter settings:**

- These parameters have to be given to the initiation function in the right order (=same as below)
- Any parameter can be left undefined

|Parameter | Usage     | Accepted values | Default value |
|----------|-----------|---------------|-----------------|
|**viimaId** | Your viimaId, i.e. the last part of the URL to access your Viima app | A valid, either relative or absolute URL | viima |
|**tabImgUrl** | The URL of the image you want to use as a trigger for the feedback tab | A valid, either relative or absolute URL | https://new.viima.com/wp-content/uploads/2014/08/feedback-tab.png |
| **heightFactor** | The height of the feedback tool once the tab has been opened. A relative percentage of the height of the entire web page | Floating point numbers between 0 and 1 | 0.8 |
| **widthFactor** | The width of the feedback tool once the tab has been opened. A relative percentage of the width of the entire web page | Floating point numbers between 0 and 1 | 0.8 |
| **side** | Which side of the page should the tab be located on? | String with a value of either 'left' or 'right'| 'left' |
| **tabOffsetFromBottom** | How far from the bottom of the page should the tab be? | Floating point numbers between 0 and 1 | 0.4 |
| **headerText** | If this parameter isn't an empty string, a header wih the same words is added to the feedback tool. | String | null |
| **smallScreenTreshold** | The minimum resolution with which the tool can be used. When screen is samller, it remains hidden in order to not take the majority of the screen | Integer | 600 |
|**tabOpacity**| If you'd like to make the image you're using a little less prominent, you can set the opacity value for that. | Floating point numbers between 0 and 1 ( Smaller values are more transparent) | null |


*As of version 1.0 the widget is no longer dependent on jQuery or any other external library.*
