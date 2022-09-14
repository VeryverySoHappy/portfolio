$(".section").each(function () {
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;
    var moveTop = null;
    if (delta < 0) {
      if ($(this).next() != undefined) {
        moveTop = $(this).next().offset().top;
      }
    } else {
      if ($(this).prev() != undefined) {
        moveTop = $(this).prev().offset().top;
      }
    }
    $("html,body").stop().animate({
      scrollTop: moveTop + 'px'
    }, {
      duration: 800,
      complete: function () {
      }
    });
  });
});

// study_wrap start
$('.list_01').hover(function(){
  $('.study_wrap:eq(0)').css('display', 'block')
  $('.study_wrap:not(:eq(0))').css('display', 'none')
})
$('.list_02').hover(function() {
  $('.study_wrap:eq(1)').css('display','block')
  $('.study_wrap:not(:eq(1))').css('display', 'none')
})
$('.list_03').hover(function() {
  $('.study_wrap:eq(2)').css('display', 'block')
  $('.study_wrap:not(:eq(2))').css('display', 'none')
})
$('.list_04').hover(function() {
  $('.study_wrap:eq(3)').css('display', 'block')
  $('.study_wrap:not(:eq(3))').css('display', 'none')
})
// study_wrap end