$(window).on('load', function () {
    
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
$(document).ready(function() {
		// Scroll Disable on Menupart
		$('.menuPart').hover(function() {
	$("body").css("overflow","hidden");
}, function() {
     $("body").css("overflow","auto");
});
	//End script for scroll disable	
		
		
		$('.inavigation a[href*=#].link, .cbtn, .navbar-brand').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior
				var target = $(this).attr("href"); // Set the target as variable
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
		
$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.inavigation a.active').removeClass('active');
						$('.inavigation a').eq(i).addClass('active');
				}
		});
}).scroll();
		
		
});


if ($(this).width() >= 992) {
  // do your stuff
	$('body').addClass('smallScreen');
	$(function () {
    $(".oProducts > div").slice(0, 12).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".oProducts > div:hidden").slice(0, 8).slideDown();
        if ($(".oProducts > div:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
			//$('#loadMore').text("Load Less");
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top-300
        }, 1500);
		
    });	
	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').removeClass('show');
});
	
});
}
if ($(window).width() <= 992) {
  // do your stuff
	$('body').addClass('smallScreen');
	$(function () {
    $(".oProducts > div").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".oProducts > div:hidden").slice(0, 3).slideDown();
        if ($(".oProducts > div:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
			//$('#loadMore').text("Load Less");
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top-300
        }, 1500);
		
    });	
	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').removeClass('show');
});
	
});
}


$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});


//$('#blogCarousel').carousel({
//interval: 5000
//});

