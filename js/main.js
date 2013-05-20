/* Background IMAGE */
(function(e){function r(t,n){var r=e(window).height();var i=e(window).width();e(t,n).each(function(){var t=e(this).attr("height");var n=e(this).attr("width");var s=i;var o=i/n*t;var u=(o-r)/2*-1;var a=0;if(o<r){var s=r/t*n;var o=r;var u=0;var a=(s-i)/2*-1}e(this).css({height:o+"px",width:s+"px",marginLeft:a+"px",marginTop:u+"px",display:"block"})})}var t="";var n={selector:"img",fillOnResize:true,defaultCss:true};e.fn.fullscreenBackground=function(i){if(i){e.extend(n,i)}this.each(function(){t=this;if(n.defaultCss==true){e("html,body").css({width:"100%",height:"100%"});e(t).css({height:"100%",width:"100%",overflow:"hidden",position:"fixed",top:"0px",left:"0px",zIndex:1})}if(n.fillOnResize==true){e(window).resize(function(){r(n.selector,t)})}r(n.selector,t)})}})(jQuery)

$(document).ready(function(){
    $("#background-image").fullscreenBackground();
    $('div.plus').click(function(){
        $(this).hide().next().show().addClass('expand');
    })


    // Align center Panel when scrolling
    function moveCenter(){
            var initTop = 205;
            var computeTop = initTop - ($(window).scrollTop());

            if(computeTop < 61)
                computeTop = 61;
            else if(computeTop > initTop)
                computeTop = initTop;

            $('#centerPanel').css({ paddingTop: computeTop+'px' });

    }
    $(window).scroll(moveCenter);
    moveCenter();

    // Open eXP details
    $('div.exp li').click(function(){
        $('div.exp li').removeClass('active');

        $(this).addClass('active');
        var ind = $('div.exp li').index($(this));
        $('#tips div.skill, #tips div.info').hide();
        tip = $('#tips div.skill').eq(ind);
        tip.show().next().show();

        var liPos = $(this).offset().top;
        liPos -= tip.outerHeight() - 59;
        tip.css({marginTop: liPos +'px'});
    });

    // Infobul on circles
    $('div.round img').hover(function(){
        var offset = $(this).offset();
        var offsetTop = offset.top + 60;

        $('#balloon').html('<span></span>'+$(this).attr('alt')).show();
        var midBallon = ($('#balloon').outerWidth() / 2);
        var offsetLeft = offset.left + 26 - midBallon;

        $('#balloon').css({top: offsetTop, left: offsetLeft});
        $('#balloon span').css({ left: (midBallon - 5)});
    }, function(){
        $('#balloon').hide();
    });

    $(document).imagesLoaded(function(){
        setTimeout(function(){
            $('#loading').fadeOut();
            $('div.plus').each(function(i){
                $('div.plus').fadeIn();
                setTimeout(function(){$('div.plus').eq(i).addClass('blink')}, 1000 * (i +1));
            });
        }, 1000);
    });
});
