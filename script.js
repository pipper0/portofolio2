$('.page-scroll').on('click', function(e){
var ambil = $(this).attr('href');
var elemenambil = $(ambil);
$("html, body").animate({
    scrollTop: elemenambil.offset().top -50
 },1000, "easeOutBounce");
e.preventDefault();
});

//paralax
$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    $('.jumbotron img').css({
            'transform' : 'translate(0px, '+ scroll/4.5 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ scroll/3.5 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ scroll/2.8 +'%)'
    });
    //thumbnail
    if ( scroll > $('.portofolio').offset().top - 350 ){
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('show');
            }, 400 * (i+1));
        });
    }
});
//about
$(window).on('load', function(){
    $('.p1').addClass('pshow');
    $('.p2').addClass('pshow');
});