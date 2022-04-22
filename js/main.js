const globalVars = {
	currentScrollPos: window.pageYOffset,
}

const triggers = {
	animateOnceCards: 0
	
}


//Scroll events
window.onscroll = function() {
	globalVars.currentScrollPos = window.pageYOffset;
	progressbarUpdate();

	animateNumCards();


}

//preloader
$(window).on('load', function(){
	setTimeout(function(){
		$('#preloadGif').fadeOut()
	$('#preload').delay(350).fadeOut('slow')
	$(':root').delay(350).css({'overflow-y': 'visible'})
	}, 1000)
 })

// Navbar
$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});

//progress-bar
function progressbarUpdate() {
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let progress = (globalVars.currentScrollPos * 100) / (height);
	document.getElementById('progressbar').style.width = progress+"%";
}

//header
$(document).ready(function(){
	$('.header').height($(window).height());

	$(document).on( "click", 'a[href^="#"]', function( e ) { 
		e.preventDefault(); 
		console.log("fodase")    
		var target = this.hash,         
		    $target = $(target);    
		$('html, body').stop().animate({ 
			scrollTop: $target.offset().top - $('#sticky-wrapper').height()
		}, 1000);
	});
})

//number animate
function animateNumCards() {
	if( ($(this).scrollTop() + window.innerHeight) >= $('#numCards').position().top && triggers.animateOnceCards != 1){
        let clientes = document.getElementById("numClientes");
		let anos = document.getElementById("numAnos");
		let tempo = document.getElementById("numTempo");

		animateValue(clientes, 0, 1700, 4500);
		animateValue(anos, 0, 17, 4000);
		animateValue(tempo, 0, 9, 4000);

		triggers.animateOnceCards = 1
    }
}

function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
	  if (!startTimestamp) startTimestamp = timestamp;
	  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
	  obj.innerHTML = Math.floor(progress * (end - start) + start);
	  if (progress < 1) {
		window.requestAnimationFrame(step);
	  }
	};
	window.requestAnimationFrame(step);
  }