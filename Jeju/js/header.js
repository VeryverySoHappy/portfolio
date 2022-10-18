var bgi
$(document).ready(function(){
  $('.gnbList > li > a').on({
    mouseenter:function(){
      bgi=$(this).parent().index()+1;
      $(this).parent().find('.gnb2_bg').css({
        background:'url(../img/header/gnb2d_bg'+bgi+'.png) no-repeat center 0',
        height:'500px',
        display:'block',
        boxShadow: "rgb(0,0,0,0.25) 0px 5px 5px"
      })
      $(this).parent().find('.gnb2').show()
      $(this).css('color','#ffd562')
    },
    mouseleave:function(){
      $(this).parent().find('.gnb2').hide()
      $(this).parent().find('.gnb2_bg').css({
        display:'none'
      })
      $(this).css('color','#222')
    }
  })
  $('.gnb2_bg').on({
    mouseenter:function(){
      $(this).children('.gnb2').show();
      $(this).css({
        background:'url(../img/header/gnb2d_bg'+bgi+'.png) no-repeat center 0',
        height:'500px',
        display:'block'
      })
      $(this).parent().find('>a').css('color','#ffd562')
    },
    mouseleave:function(){
      $(this).children('.gnb2').hide();
      $('.gnb2_bg').hide();
      $(this).parent().find('>a').css('color','#333')
    }
  })
})