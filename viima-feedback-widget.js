function initiateViima(viimaId, tabImgUrl, heightFactor, widthFactor, tabOffsetFromBottom, customClassForTab, borderColor, tabOpacity){

  //Initializing variables
  if(!viimaId){
    viimaId = 'viima'
  }

  if(!tabImgUrl){
    tabImgUrl = 'https://new.viima.com/wp-content/uploads/2014/08/feedback-tab.png'
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
  document.body.insertAdjacentHTML('beforeend', '<div id="feedback-tab"><img src="'+ tabImgUrl +'" alt="Feedback"/><div id="feedback-inner"><iframe src="https://app.viima.com/' + viimaId + '"></iframe></div></div>');

  //Setting Basic CSS
  document.getElementById("feedback-tab").style.cssText = 'position: fixed; bottom: ' + tabOffset + 'px; left: 0; cursor: pointer; -webkit-transition-duration: 0.3s; -moz-transition-duration: 0.3s; -o-transition-duration: 0.3s; transition-duration: 0.3s; z-index: 10000;';
  document.getElementById("feedback-inner").style.cssText = 'position: fixed; bottom: ' + containerOffset + 'px; left: -' + width + 'px; -webkit-transition-duration: 0.3s; -moz-transition-duration: 0.3s; -o-transition-duration: 0.3s; transition-duration: 0.3s;  height: ' + height + 'px; width: ' + width +'px; overflow: hidden; z-index: 10000;';
  document.getElementById("feedback-inner").getElementsByTagName('iframe')[0].style.cssText = 'height: 100%; width: 100%; z-index: 10001;';

  //Extra style settings
  if(borderColor){
    document.getElementById('feedback-inner').getElementsByTagName('iframe')[0].style.border = '3px solid ' + borderColor;
  };

  if(tabOpacity){
     document.getElementById('feedback-tab').getElementsByTagName('img')[0].style.opacity = tabOpacity;
  }

  if(customClassForTab){
    document.getElementById('feedback-tab').classList.add(customClassForTab);
  }

  document.getElementById('feedback-tab').addEventListener('click', toggleViima);

  function toggleViima(){
    //If the feedback tab is hidden, show it, otherwise hide it
    if(document.getElementById('feedback-inner').style.left.indexOf('-') != -1){
      document.getElementById('feedback-tab').style.left = width + 'px';
      document.getElementById('feedback-tab').style.bottom = containerOffset + 'px';
      document.getElementById('feedback-inner').style.left = '0px';
      document.getElementById('feedback-inner').style.bottom = containerOffset + 'px';
      document.body.insertAdjacentHTML('beforeend', '<div id="feedback-backdrop" style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; z-index: 9999; background-color: #000; opacity: 0.7;"></div>');
    } else {
      closeViima();
    }
  }

  function closeViima() {
    if(document.getElementById('feedback-inner').style.left.indexOf('-') == -1){
      document.getElementById('feedback-tab').style.left =  '0px';
      document.getElementById('feedback-inner').style.left = '-' + width + 'px';
      var backdrop = document.getElementById('feedback-backdrop');
      document.body.removeChild(backdrop);
    }
  }

  //Hide the feedback widget on clicks outside the container
  document.addEventListener('mouseup', (function (e)
  {
      var backdrop = document.getElementById('feedback-backdrop');
       // if the target of the click is outside the container, it has to be the backdrop..
      if (e.target === backdrop){
          closeViima();
      }
  }));
}