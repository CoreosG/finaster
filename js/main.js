const globalVars = {
	currentScrollPos: window.pageYOffset,
}

//Scroll events
window.onscroll = function() {
	globalVars.currentScrollPos = window.pageYOffset;
	progressbarUpdate();
}

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
})

//modal
const inputField = document.querySelectorAll('.inputField')

      inputField.forEach(el => {
        el.addEventListener('click', () => {
          el.classList.toggle('--js-inputActive')
        })
      })

    //   =====================================
    //   Evento de fechar
    //   const modalClose = document.querySelector('.buttonClose')
    //   const cancelEvent = el => el.preventDefault()
    //   modalClose.addEventListener('click', cancelEvent)

    //   modalClose.addEventListener('click', () => {
    //     let verification = confirm(
    //       'Você deseja mesmo fechar o formulário de cadastro?'
    //     )
	// 	if(!verification) return;

	// 	$('#modal').modal('hide');
    //     // remover a classe que torna o modal ativo
    //   })