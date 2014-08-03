feedback-widget
===============

Repository for the feedback tab widget of the Viima App. Please note that you'll need a working Viima account to use the library. Contact us if you'd like to have one ;)


Basic usage:

1) Download and include the library in the head of your HTML document:

```<script src="/js/libs/viima-feedback-widget.js"></script>```

2) Initiate the library once your page has loaded:
```
<script type=text/javascript>
  initiateViima('viima', '/static/img/feedback.png');
</script>
```

The library currently supports 4 settings:

- viimaId: This is the id of your Viima instance and is the final part of the URL for your environment, e.g. app.viima.com/**viima**. Defaults to 'viima'
- imgUrl: The url of the image you want to use as a trigger for the feedback tab. Defaults to our generic Feedback tab image.
- borderColor: If you'd like the iframe to have a border, you can specify a color for that. Any valid css color selector should do. So you can use 'black' or '#000000' or 'rgb(0, 0, 0)'. Defaults to no border.
- tabOpacity: If you'd like to make the image you're using a little less prominent, you can set the opacity value for that. Use floating point numbers between 0 and 1, separated with a dot. Defaults to no opacity.

* Please note that currently the library is dependent on jQuery so you'll have to download and include that as well if you're not using it already! *
