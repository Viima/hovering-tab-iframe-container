function initiateViima(viimaId, imgUrl, borderColor, tabOpacity){

  //Initializing variables
  if(!viimaId){
    viimaId = 'viima'
  }

  if(!imgUrl){
    imgUrl = ' https://app.viima.com/static/img/feedback.png'
  }

  //Appending tab to body
  $('body').append('<div id="feedback-tab"><img src="'+ imgUrl +'" alt="Feedback"/><div id="feedback-inner"><iframe src="https://app.viima.com/' + viimaId + '"></iframe></div></div>');

  //Setting CSS
	$('#feedback-tab').css({
          'position': 'fixed',
           'top': '30%',
           'left': '0',
           'cursor': 'pointer',
           '-webkit-transition-duration': '0.3s',
           '-moz-transition-duration': '0.3s',
           '-o-transition-duration': '0.3s',
           'transition-duration': '0.3s',
  });


  $('#feedback-inner').css({
          'position': 'fixed',
          'top': '30%',
          'left': '-1000px',
          '-webkit-transition-duration': '0.3s',
          '-moz-transition-duration': '0.3s',
          '-o-transition-duration': '0.3s',
          'transition-duration': '0.3s',
          'height': '400px',
          'width': '700px',
          'overflow': 'hidden',
  });

  $('#feedback-inner iframe').css({
          'height': '100%',
          'width': '100%',
  });

  //Settings
  if(borderColor){
    $('#feedback-inner iframe').css('border', '2px solid ' + borderColor);
  };

  if(tabOpacity){
    $('#feedback-tab img').css('opacity', tabOpacity);
  }

  $('#feedback-tab').click(toggleViima);
}

function toggleViima(){
  //If the feedback tab is hidden, show it, otherwise hide it
  if($('#feedback-inner').css('left').indexOf('-') != -1){
    $('#feedback-tab').css('left', '700px');
    $('#feedback-tab #feedback-inner').css('left', '0px');
  } else {
    $('#feedback-tab').css('left', '0px');
    $('#feedback-tab #feedback-inner').css('left', '-700px');
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
        $('#feedback-tab #feedback-inner').css('left', '-700px');
    }
});