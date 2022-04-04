//Styles provided by David A. thank you
let timer;

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

//Form submitBtn animation
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
