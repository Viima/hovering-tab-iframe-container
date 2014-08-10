function initiateViima(viimaId, tabImgUrl, heightFactor, widthFactor, side, tabOffsetFromBottom, headerText, smallScreenTreshold, tabOpacity){

  //Initializing variables
  if(!viimaId){
    viimaId = 'viima'
  }

  if(!tabImgUrl){
    tabImgUrl = 'https://www.viima.com/wp-content/uploads/2014/08/feedback-tab.png'
  }

  if(side !== 'right'){
    side = 'left';
  }

  if(!heightFactor){
    heightFactor = 0.8;
  }

  if(!widthFactor){
    widthFactor = 0.8;
  }

  if(!tabOffsetFromBottom){
    tabOffsetFromBottom = 0.4;
  }

  if(!smallScreenTreshold){
    smallScreenTreshold = 600;
  }

  //If visible window size is smaller than the specified treshold, don't show the tool at all
  if(window.innerWidth < smallScreenTreshold){
    return false;
  }

  //Calculate width, height and offsets based on visible screen size
  var height = heightFactor * window.innerHeight;
  var width = widthFactor * window.innerWidth;
  var containerOffset = (1-heightFactor)/2 * window.innerHeight;
  var tabOffset = tabOffsetFromBottom * window.innerHeight;

  //Appending tab to body
  document.body.insertAdjacentHTML('beforeend', '<div id="feedback-tab"><img src="'+ tabImgUrl +'" alt="Feedback"/><div id="feedback-inner"><iframe src="https://app.viima.com/' + viimaId + '"></iframe></div></div>');

  //Append header text if it was input
  if(headerText) {
    document.getElementById('feedback-inner').insertAdjacentHTML('afterbegin', '<h3 id="feedback-header" style="color: #eeeeee; text-align: center; cursor: default;">'+ headerText +'</h3>');
    document.getElementById('feedback-header').addEventListener('click', (function (e){
      e.stopPropagation();
      return false;
    }));
  }

  //Setting Basic CSS
  document.getElementById("feedback-tab").style.cssText = 'position: fixed; bottom: ' + tabOffset + 'px; ' + side + ': 0; cursor: pointer; -webkit-transition-duration: 0.3s; -moz-transition-duration: 0.3s; -o-transition-duration: 0.3s; transition-duration: 0.3s; z-index: 100000;';
  document.getElementById("feedback-inner").style.cssText = 'position: fixed; bottom: ' + containerOffset + 'px; ' + side + ': -' + width + 'px; -webkit-transition-duration: 0.3s; -moz-transition-duration: 0.3s; -o-transition-duration: 0.3s; transition-duration: 0.3s;  height: ' + height + 'px; width: ' + width +'px; overflow: hidden; z-index: 100000;';
  document.getElementById("feedback-inner").getElementsByTagName('iframe')[0].style.cssText = 'height: 100%; width: 100%; z-index: 100001;';

  if(tabOpacity){
     document.getElementById('feedback-tab').getElementsByTagName('img')[0].style.opacity = tabOpacity;
  }

  document.getElementById('feedback-tab').addEventListener('click', toggleViima);

  function toggleViima(){
    //If the feedback tab is hidden, show it, otherwise hide it
    if(side === 'left' && document.getElementById('feedback-inner').style.left.indexOf('-') != -1){
      document.getElementById('feedback-tab').style.left = width + 'px';
      document.getElementById('feedback-tab').style.bottom = containerOffset + 'px';
      document.getElementById('feedback-inner').style.left = '0px';
      document.getElementById('feedback-inner').style.bottom = containerOffset + 'px';
      document.body.insertAdjacentHTML('beforeend', '<div id="feedback-backdrop" style="position: fixed; top: 0; bottom: 0; right: 0; left: 0; z-index: 99999; background-color: #000; opacity: 0.7;"></div>');
    } else if (side === 'right' && document.getElementById('feedback-inner').style.right.indexOf('-') != -1){
      document.getElementById('feedback-tab').style.right = width + 'px';
      document.getElementById('feedback-tab').style.bottom = containerOffset + 'px';
      document.getElementById('feedback-inner').style.right = '0px';
      document.getElementById('feedback-inner').style.bottom = containerOffset + 'px';
      document.body.insertAdjacentHTML('beforeend', '<div id="feedback-backdrop" style="position: fixed; top: 0; bottom: 0; right: 0; left: 0; z-index: 99999; background-color: #000; opacity: 0.7;"></div>');
    } else {
      closeViima();
    }
  }

  function closeViima() {
    if(side === 'left' && document.getElementById('feedback-inner').style.left.indexOf('-') == -1){
      document.getElementById('feedback-tab').style.left =  '0px';
      document.getElementById('feedback-inner').style.left = '-' + width + 'px';
    } else if(side === 'right' && document.getElementById('feedback-inner').style.right.indexOf('-') == -1){
      document.getElementById('feedback-tab').style.right =  '0px';
      document.getElementById('feedback-inner').style.right = '-' + width + 'px';
    }
    var backdrop = document.getElementById('feedback-backdrop');
    document.body.removeChild(backdrop);
    document.getElementById('feedback-tab').style.bottom = tabOffset + 'px';
  }

  //Hide the feedback widget on clicks outside the container
  document.addEventListener('click', (function (e)
  {
      var backdrop = document.getElementById('feedback-backdrop');
       // if the target of the click is outside the container, it has to be the backdrop..
      if (e.target === backdrop){
          closeViima();
      }
  }));
}