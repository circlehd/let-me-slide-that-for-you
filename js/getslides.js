slideMe.getSlides = function () {

  slideMe.presentationNode = document.createElement('div');
  slideMe.presentationNode.setAttribute('id', 'slideme-container');
  slideMeContainer.appendChild(slideMe.presentationNode);

  var createImgContainer = document.createElement('div');
  createImgContainer.setAttribute('id', 'slideme-list');


  var createImgContainerWrapper = document.createElement('div');
  createImgContainerWrapper.setAttribute('id', 'slideme-list-wrapper');

  slideMeContainer.appendChild(createImgContainerWrapper);

  if (slideMe.data.videoslidestype === 'images') {

    var createButtons = '<div id="slideme-btn-prev"><i class="icon-prevslide"><</i></div><div id="slideme-btn-next"><i class="icon-nextslide">></i></div>';
    createImgContainerWrapper.innerHTML = createButtons;

    slideMeContainer.setAttribute('class', 'slideme-images');

    slideMe.loadImages();

  } else {

    createImgContainerWrapper.setAttribute('class', 'slideme-text');

    var createHtmlPresentationNav = document.createElement('div');
    createHtmlPresentationNav.setAttribute('id', 'slideme-html-nav');
    createHtmlPresentationNav.innerHTML = '<div id="slideme-html-nav-left"><</div><div id="slideme-html-nav-right">></div>';
    createImgContainerWrapper.appendChild(createHtmlPresentationNav);

    slideMeContainer.setAttribute('class', 'slideme-html');

  }

};