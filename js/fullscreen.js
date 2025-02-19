letSlide.fullscreen = function() {

  var letSlidefullscreen = letSlide.thisPlayer.controlBar.addChild('button', {
    text: 'Full screen'
  });
  letSlidefullscreen.addClass('letSlide-fullscreen-btn');

  var fullscreenon = false;

  letSlidefullscreen.on('click', function() {

    if (!fullscreenon) {

      fullscreenon = true;

      letSlide.letSlideContainer.classList.add('this-fixed');
      letSlide.letSlideContainer.classList.add('full-mobile');

      var fullScreen = document.createElement('div');
      fullScreen.setAttribute('id', 'letSlide-fullscreen');
      var fullScreenClose = document.createElement('div');
      fullScreenClose.setAttribute('id', 'letSlide-close-popup');
      fullScreenClose.innerHTML = 'x';
      letSlide.letSlideContainer.appendChild(fullScreen);
      letSlide.letSlideContainer.appendChild(fullScreenClose);

      letSlide.DOM.presentationNode.style.display = 'block';

      if (!letSlide.data.slideshare) {
        document.getElementById('letSlide-list-wrapper').style.display = 'block';
        letSlide.DOM.presentationNode.style.height = parseFloat(letSlide.letSlideContainer.style.height) + 'px';
        document.getElementById('letSlide-list-wrapper').style.bottom = - 75 + 'px';
      } else {
        letSlide.DOM.presentationNode.style.height = '100%';
      }

      if (letSlide.DOM.presentationNode) {
        letSlide.DOM.presentationNode.style.display = 'block';
        if (!letSlide.data.slideshare) {
          document.getElementById('letSlide-list-wrapper').style.display = 'block';
        }
      }


      var removeFullScr = function() {
        fullScreen.remove();
        fullScreenClose.remove();
        letSlide.letSlideContainer.classList.remove('this-fixed');
        letSlide.letSlideContainer.classList.remove('full-mobile');
        if (!letSlide.data.slideshare) {
          if (letSlide.letSlideContainer.parentNode.offsetWidth <= 770) {
              document.getElementById('letSlide-list-wrapper').style.display = 'none';
            } else {
              document.getElementById('letSlide-list-wrapper').style.display = 'block';
            }
          }
        letSlide.letSlideContainer.style.marginTop = 0 + 'px';
        letSlide.letSlideContainer.style.marginLeft = 'auto';

        fullscreenon = false;
        letSlide.setSize();
      };



      document.getElementById('letSlide-close-popup').addEventListener('click', removeFullScr, false);
      document.getElementById('letSlide-fullscreen').addEventListener('click', removeFullScr, false);

    }

  });

};
