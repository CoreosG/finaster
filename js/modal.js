
document.addEventListener('input', e => {
	const el = e.target;
	
	if( el.matches('[data-color]') ) {
	  clearTimeout(timer);
	  timer = setTimeout(() => {
		document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
	  }, 100)
	}
  })
  
  document.addEventListener('textarea', e => {
	const el = e.target;
	
	if( el.matches('[data-color]') ) {
	  clearTimeout(timer);
	  timer = setTimeout(() => {
		document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
	  }, 100)
	}
  })
  
  //Modal submitBtn animation
  document.addEventListener('DOMContentLoaded', function () {
	var btn = document.querySelector('.submitBtn'),
		loader = document.querySelector('.loader'),
		check = document.querySelector('.check');
	
	btn.addEventListener('click', function () {
	  loader.classList.remove('hidden');
	  btn.classList.add('hidden');
	  loader.classList.add('active');    
	});
   
	loader.addEventListener('animationend', function() {
	  check.classList.add('active');
	  setTimeout(function(){
		loader.classList.remove('active') ;
		check.classList.remove('active');
		btn.classList.remove('hidden');
	  }, 2000);
	  setTimeout(function(){
		loader.classList.add('hidden');
	  }, 2000);
	});
  });


$(document).ready(function(){
    $('#email').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
          pastedValue = pastedValue.toLowerCase();
          return pastedValue.replace("mailto:", "");
        },
        definitions: {
          '*': {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
            casing: "lower"
          }
        },
        showMaskOnHover: false
      });
    $('#CNPJ').inputmask({
        mask: "99.999.999/9999-99",
        showMaskOnHover: false
    })
    $('#telefone').inputmask({
        mask: ["(99) 9999-9999", "(99) 9 9999-9999"],
        keepStatic: true,
        showMaskOnHover: false
    })
})