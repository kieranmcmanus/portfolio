$('#hamburger').on('click', function() {
    $('.nav2 ul').toggle();
    $('.nav2').toggleClass('block');
});

$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	// Find out how far they've scrolled
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

  var w = window.innerWidth;

  if (distanceScrolled > 662 && distanceScrolled < 1000) {
  	// $('.skill img').css({'-webkit-transform': 'rotateY(' + 360 + 'deg)'});
    $('.skill img').addClass('rotateY_effect').delay(1000).queue(function(next){
    $(this).removeClass('rotateY_effect');
    next();
});
    // $('.skill img').removeClass('rotateY_effect');
  }
  // if (distanceScrolled > 1370) {
  //   $('.project').fadeIn(2000);
  // }
  if (distanceScrolled < 30 && w > 870) {
    $('.main_nav').hide();
  } else if (distanceScrolled > 30 && w > 870) {
    $('.main_nav').fadeIn(350);
  }
});

$(function() {

  $(window).on('load resize', function() {
    if ($(window).width() < 870) {
      $('.project_desktop').hide();
      $('.project_mobile').show();
    } else {
      $('.project_mobile').hide();
      $('.project_desktop').show();
    }
  });

});

// $(".skill img").mouseover(function() {
//   $('.skill img').css({'-webkit-transform': 'rotateY(' + 360 + 'deg)'});
//   $('.skill img').css({'transform': 'rotateY(' + 360 + 'deg)'});
// });
