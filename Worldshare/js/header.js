// submenu start
$(document).ready(function(){
    var bg=$('<div class="subbg"></div>')
    $('header').append(bg)
    $('.gnb > ul > li > a').on({
      mouseenter:function(){
        $(this).css({
          color:'#f47d29'
        })
        $(this).parent().find('.subwrap').css({
          backgroundColor:'#f47d29',
          color:'#fff'
        })
        $(this).next().show();
        $('.subwrap').show();
        $('.subbg').show();
      },
      mouseleave:function(){
        $(this).css({
          color:'#333'
        })
        $(this).parent().find('.subwrap').css({
          backgroundColor:''
        })
        $('.subwrap').hide();
        $('.subbg').hide();
      }
    })
  
    $('.subwrap').on({
      mouseenter:function(){
        $(this).parent().find('>a').css({
          color:'#f47d29'
        })
        $(this).parent().find('.subwrap')
        $(this).addClass('over')
        $(this).find('>li>a').css({
          color:'#fff'
        })
        $('.subwrap').show();
        $(this).prev().show();
        $('.subbg').show();
        },
        mouseleave:function(){
          $(this).parent().find('>a').css({
            color:'#333'
          })
          $(this).removeClass('over')
          $(this).find('>li>a').css({
            color:'#333'
          })
          $('.subwrap').hide();
          $('.subbg').hide();
        }
    })
  })
  // submenu end
  
  // toggle_btn start
  $(document).ready(function(){
    $('.toggle_btn').on('click', function(){
      $('.header > .inner').find('.responsive').toggleClass('on')
      $('.header').toggleClass('on');
    })
  })
  // toggle_btn end