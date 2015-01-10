Viima Feedback Widget
===============

This is the home of the Viima Feedback Widget. It's a javascript library that adds a hovering tab that expands to show an iframe for the user. It was originally created to be used with the [Viima App](https://www.viima.com).

**A live preview can be seen on the project page: http://viima.github.io/feedback-widget/**


###Basic usage

**1) Download and include the library in the head of your HTML document**

```<script src="viima-feedback-widget.js"></script>```

**2) Initiate the widget**
```
<script type=text/javascript>
  initiateViima('https://app.viima.com/viima/');
</script>
```
We recommend to do the initiation either at the end of your body or once the page has been loaded.

###Settings
**The library currently supports 9 settings**
- These settings are given as arguments to the initiateViima() function
- The order of the arguments is relevant. They have to be given in the same order as listed in the table below.
- If an argument is undefined, the default value is used.

|Parameter | Usage     | Accepted values | Default value |
|----------|-----------|---------------|-----------------|
|**iframeUrl** | The URL of the content you want to show in the iframe | A valid, absolute URL | https://app.viima.com/viima/ |
|**tabImgUrl** | The URL of the image you want to use as a trigger for the feedback tab | A valid, either relative or absolute URL | https://www.viima.com/wp-content/uploads/2014/08/feedback-tab.png |
| **heightFactor** | The height of the feedback tool once the tab has been opened. Expressed as a percentage of the height of the window | Floating point numbers between 0 and 1 | 0.8 |
| **widthFactor** | The width of the feedback tool once the tab has been opened. Expressed as a percentage of the width of the window | Floating point numbers between 0 and 1 | 0.8 |
| **side** | Which side of the page should the tab be located on? | String with a value of either 'left' or 'right'| 'left' |
| **tabOffsetFromBottom** | How far from the bottom of the page should the tab be located? Expressed as a percentage of the height of the window | Floating point numbers between 0 and 1 | 0.4 |
| **headerText** | If this parameter is defined, a header wih the specified string is added to the top of the feedback tool | String | null |
| **smallScreenTreshold** | The minimum resolution with which the tool can be used. When the width of the screen is smaller than this value, the widget remains hidden in order to not take up the majority of the screen estate | Integer | 600 |
|**tabOpacity**| If you'd like to make the image you're using a little less prominent, you can set an opacity value for it | Floating point numbers between 0 and 1 ( Smaller values are more transparent) | null |

###Browser Support
- **IE9+ and all modern browsers**
- As of version 1.0 the widget is no longer dependent on jQuery or any other external library
