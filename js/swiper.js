var swiper2 = new Swiper('.mySwiper', {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  watchOverflow : true,
  on: {
      slideChange: function() {
          setTimeout(function () {
            swiper2.params.touchReleaseOnEdges = false;  
            swiper2.params.mousewheel.releaseOnEdges = false;
          });
      },
      reachEnd: function() {
          setTimeout(function () {
              swiper2.params.touchReleaseOnEdges = true;
              swiper2.params.mousewheel.releaseOnEdges = true;
          }, 500);
      },
      reachBeginning: function() {
          setTimeout(function () {
              swiper2.params.touchReleaseOnEdges = true;
              swiper2.params.mousewheel.releaseOnEdges = true;
          }, 500);
      }
  }
});