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

  if (distanceScrolled > 662) {
  	$('.skill img').css({'-webkit-transform': 'rotateY(' + 360 + 'deg)'});
    $('.skill img').css({'transform': 'rotateY(' + 360 + 'deg)'});
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
