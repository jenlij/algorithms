var slideshow;
(function (remark) {
  'use strict';

  slideshow = remark.create({
    sourceUrl: 'slides.md',
    navigation: {
      scroll: false
    },
    highlightLines: true,
    ratio: '16:9',
    // highlightStyle: 'tomorrow'
    highlightStyle: 'tomorrow'
      // highlightStyle: 'vs' // no css highlighting
      // highlightStyle: 'googlecode'
      // highlightStyle: 'idea'
      // highlightStyle: 'tomorrow-night-bright' // dark, bold
  });

  var jsbinScript = document.createElement("script");
  jsbinScript.setAttribute('src', 'http://static.jsbin.com/js/embed.js');
  document.querySelector('body').appendChild(jsbinScript);

  var cps = document.createElement("script");
  cps.setAttribute('src', '//codepen.io/assets/embed/ei.js');
  document.querySelector('body').appendChild(cps);



  var lastHiddenSlideIndex;
  var container = document.querySelector('.remark-slides-area');

  slideshow.on('hideSlide', function (slide) {
    var slideIndex = slide.getSlideIndex();
    // Remove classes used for forward and back transitions
    container.querySelectorAll('.remark-slides-area > div').forEach(function(slide) {
      slide.classList.remove(
          'remark-navigating-forwards',
          'remark-navigating-backwards');
    });

    // Set last hidden slide index to help determine which way the user is browsing
    lastHiddenSlideIndex = slideIndex;
  });

  slideshow.on('showSlide', function (slide) {
    var slideIndex = slide.getSlideIndex();
    if(typeof lastHiddenSlideIndex !== 'undefined') {
      var next = container.children[slideIndex];
      var prev = container.children[lastHiddenSlideIndex];

      var dir = slideIndex > lastHiddenSlideIndex ? 'forwards' : 'backwards';

      if (next) { next.classList.add('remark-navigating-' + dir); }
      if (prev) { prev.classList.add('remark-navigating-' + dir); }
    }
  });
})(window.remark);
