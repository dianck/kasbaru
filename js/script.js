//(function(){
//
//})();

//event pd saat ling di klik
$('.page-scroll').on('click', function(e){
    
    //ambil isi href
    var href=$(this).attr('href');
    
    //tangkap element ybs
    var elementHref=$(href);
    
    //pindahkan scroll
    $("html,body").animate({
        scrollTop: elementHref.offset().top - 50
    }, 1250, 'easeInOutExpo');
    
    
    e.preventDefault();
});


//parallax

//about
$(window).on('load', function(){
    $('.pkiri').addClass('pMuncul');
    $('.pkanan').addClass('pMuncul');
});

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
 
 
    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/4 +'%)'
    });
 
    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    //portfolio
    if(wScroll>$('.portfolio').offset().top-250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300* (i+1));
        });
        
    }
   
});