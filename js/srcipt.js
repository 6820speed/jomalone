$(document).ready(function(){

var fstLiHt = $('.top_menu > li:first').find(".dp2 > li:first").outerHeight();
    
function gnbHover() { 
    var s1 = $('.top_menu > li').eq(0).find(".dp2 > li").length;
    var s2 = $('.top_menu > li').eq(1).find(".dp2 > li").length;
    var s3 = $('.top_menu > li').eq(2).find(".dp2 > li").length;
    var s4 = $('.top_menu > li').eq(3).find(".dp2 > li").length;
    var maxS = Math.max(s1,s2,s3,s4);
    
    $('.gnb_bg').stop().animate({"height" : (fstLiHt * maxS) + 100}, { 
        duration : 500
    });    
    
    $('.top_menu .dp2').css('visibility','visible').stop().animate({"height" : (fstLiHt * maxS)}, { 
        duration : 500
    }).addClass("on");    
}    
    
function gnbOut() { 
    $('.gnb_bg').stop().animate({"height" : 0}, { 
        duration : 500
    });    
    
    $('.top_menu .dp2').stop().animate({"height" : 0}, { 
        complete : function() { 
            $('.top_menu .dp2').css('visibility', 'hidden');
        }
    }).removeClass("on"); 

}  
    
    $(".top_menu").hover(
        function(){
            gnbHover();
        },
        function(){
           
        }
    );
    
    $('header').on("mouseleave", function() { 
        gnbOut();
    });

    
    
    
    
    
});/*end*/

