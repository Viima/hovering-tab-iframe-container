function initiateViima(viimaId, tabImgUrl, heightFactor, widthFactor, tabOffsetFromBottom, customClassForTab, borderColor, tabOpacity){

  //Initializing variables
  if(!viimaId){
    viimaId = 'viima'
  }

  if(!tabImgUrl){
    tabImgUrl = 'https://app.viima.com/static/img/feedback.png'
  }

  if(!heightFactor){
    heightFactor = 0.8;
  }

  if(!widthFactor){
    widthFactor = 0.8;
  }

  if(!tabOffsetFromBottom){
    //Calculated based on the actual visible screen size, just applying a percentage for bottom doesn't do the trick
    tabOffsetFromBottom = 0.3;
  }

  //Calculate width and height for container based on visible screen size
  var height = heightFactor * window.innerHeight;
  var width = widthFactor * window.innerWidth;
  var containerOffset = (1-heightFactor)/2 * window.innerHeight;
  var tabOffset = tabOffsetFromBottom * window.innerHeight;

  //Appending tab to body
  $('body').append('<div id="feedback-tab"><img src="'+ tabImgUrl +'" alt="Feedback"/><div id="feedback-inner"><iframe src="https://app.viima.com/' + viimaId + '"></iframe></div></div>');

  //Setting CSS
	$('#feedback-tab').css({
          'position': 'fixed',
           'bottom':  tabOffset + 'px',
           'left': '0',
           'cursor': 'pointer',
           '-webkit-transition-duration': '0.3s',
           '-moz-transition-duration': '0.3s',
           '-o-transition-duration': '0.3s',
           'transition-duration': '0.3s',
           'z-index': '10000'
  });


  $('#feedback-inner').css({
          'position': 'fixed',
          'bottom': containerOffset + 'px',
          'left': '-' + width + 'px',
          '-webkit-transition-duration': '0.3s',
          '-moz-transition-duration': '0.3s',
          '-o-transition-duration': '0.3s',
          'transition-duration': '0.3s',
          'height': height + 'px',
          'width': width + 'px',
          'overflow': 'hidden',
          'z-index': '10000'
  });

  $('#feedback-inner iframe').css({
          'height': '100%',
          'width': '100%',
          'z-index': '10001'
  });

  //Extra style settings
  if(borderColor){
    $('#feedback-inner iframe').css('border', '3px solid ' + borderColor);
  };

  if(tabOpacity){
    $('#feedback-tab img').css('opacity', tabOpacity);
  }

  if(customClassForTab){
    $('#feedback-tab').addClass(customClassForTab);
  }

  $('#feedback-tab').click(toggleViima);

  function toggleViima(){
    //If the feedback tab is hidden, show it, otherwise hide it
    if($('#feedback-inner').css('left').indexOf('-') != -1){
      $('#feedback-tab').css('left', width + 'px');
      $('#feedback-tab #feedback-inner').css('left', '0px');
      $('#feedback-tab #feedback-inner').css('bottom', containerOffset + 'px');
    } else {
      $('#feedback-tab').css('left', '0px');
      $('#feedback-tab #feedback-inner').css('left', '-' + width + 'px');
    }
  }

  //Hide the feedback widget on clicks outside the container
  $(document).mouseup(function (e)
  {
      var container = $('#feedback-tab');

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $('#feedback-tab').css('left', '0px');
          $('#feedback-tab #feedback-inner').css('left', '-' + width + 'px');
      }
  });
}