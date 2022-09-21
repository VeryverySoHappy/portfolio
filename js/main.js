// menu start
$('.toggle_menu').click (function(){
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});
// menu end

// section start
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
      duration: 300,
      complete: function () {
      }
    });
  });
});
//section end

// scroll and work start
$(document).ready(function(){
  $('#scroll_btn').click(function(){
    var offset = $('#scroll_section').offset();
    $('html').animate({scrollTop : offset.top}, 300);
  })
  $('#portfolio').click(function(){
    var workoffset = $('#section03').offset();
    $('html').animate({scrollTop : workoffset.top}, 300);
  })
})
// scroll and work end

// study_wrap start
function fucAboutHover(i,a){
  $(`.list_0${i}`).hover(function(){
    $(`.study_wrap:eq(${a})`).css('display', 'block')
    $(`.study_wrap:not(:eq(${a}))`).css('display', 'none')
  })
}
fucAboutHover(1,0)
fucAboutHover(2,1)
fucAboutHover(3,2)
fucAboutHover(4,3)

// 위에 코드는 아래에 작성했던 코드를 리팩토링.
// $('.list_01').hover(function(){
//   $('.study_wrap:eq(0)').css('display', 'block')
//   $('.study_wrap:not(:eq(0))').css('display', 'none')
// })
// $('.list_02').hover(function() {
//   $('.study_wrap:eq(1)').css('display','block')
//   $('.study_wrap:not(:eq(1))').css('display', 'none')
// })
// $('.list_03').hover(function() {
//   $('.study_wrap:eq(2)').css('display', 'block')
//   $('.study_wrap:not(:eq(2))').css('display', 'none')
// })
// $('.list_04').hover(function() {
//   $('.study_wrap:eq(3)').css('display', 'block')
//   $('.study_wrap:not(:eq(3))').css('display', 'none')
// })

// study_wrap end