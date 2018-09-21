$(document).ready(function() {

	/*----------------------------
				Preloader
	-----------------------------*/

	setTimeout(function() {	
		$('#preloader').fadeOut(); 
	}, 1000);

	/*----------------------------
				Hamburger Menu Toggle
	-----------------------------*/

	$('.hamburger').click(function() {
		$(this).toggleClass(' is-active');
		$('.navbar__links-container').fadeToggle(300);
	});

	/*----------------------------
				Navbar Fade On Scroll,
			  Top Button Fade
	-----------------------------*/

	$(window).scroll(function() {
		if( $(window).scrollTop() >= 100 ) {
			$('.navbar').addClass(' navbar-affix');
		} else {
			$('.navbar').removeClass(' navbar-affix');
		}
		if( $(window).scrollTop() >= $(window).height() ) {
			$('.top-button').addClass(' is-shown')
		} else {
			$('.top-button').removeClass(' is-shown')
		}
	});
	$('.top-button').click(function() {
		$('html, body').animate({ scrollTop: 0 }, "slow");
	});

	/*----------------------------
				Smooth Scroll
	-----------------------------*/

	$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
	});

	/*----------------------------
				Skills Section 
	-----------------------------*/
	
	$('.skill-section__skills-container__front-end .skills-section__charts-row__chart').easyPieChart({
		barColor: '#02A8F4',
		trackColor: '#a5a5a5',
		scaleColor: false,
		lineWidth: 6,
		trackWidth: 6,
		lineCap: 'butt'
	});
	$('.skill-section__skills-container__back-end .skills-section__charts-row__chart').easyPieChart({
		barColor: '#FEB729',
		trackColor: '#a5a5a5',
		scaleColor: false,
		lineWidth: 6,
		trackWidth: 6,
		lineCap: 'butt'
	});
	$('#skills-toggle').click(function() {
		if( $(this).is(':checked') ) {
			$('.skill-section__skills-container__back-end').css('opacity', '1');
			$('.skill-section__skills-container__front-end').css('opacity', '0');
		} else {
			$('.skill-section__skills-container__front-end').css('opacity', '1');
			$('.skill-section__skills-container__back-end').css('opacity', '0');
		}
	});

	/*----------------------------
				Brands Carousel
	-----------------------------*/

	$('.owl-carousel').owlCarousel({
		items: 10,
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		responsive : {
			// breakpoint from 0 up
			300 : {
				items: 4
			},
			400 : {
				items: 5
			},
			// breakpoint from 480 up
			600 : {
					items: 6
			},
			// breakpoint from 768 up
			800 : {
					items: 8
			}
		}
	});

});

	/*----------------------------
				Yandex Map Init
	-----------------------------*/

ymaps.ready(init);
var myMap, 
		myPlacemark;
function init(){ 
		myMap = new ymaps.Map("map", {
				center: [47.038190, 28.887499],
				zoom: 13
});
myPlacemark = new ymaps.Placemark([47.041300, 28.885783], { hintContent: 'Chisinau, Ciocana'});
		myMap.geoObjects.add(myPlacemark);
}
