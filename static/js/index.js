window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  // Mobile navbar toggle
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Weather-Cyclone style multi-item carousel options
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,          // Shows 2 side-by-side videos on desktop
    loop: true,
    infinite: true,
    autoplay: true,           // Slides automatically transition
    autoplaySpeed: 5000,
    pagination: true,
    breakpoints: [
      { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
      { changePoint: 768, slidesToShow: 2, slidesToScroll: 1 }
    ]
  };

  // Initialize carousel
  var carousels = bulmaCarousel.attach('.carousel', options);

  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }
});