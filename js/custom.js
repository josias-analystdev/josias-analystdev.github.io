
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

document.addEventListener("DOMContentLoaded", function () {

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzXvTTCc-Wk0xn8gEdYU2lmTHGgFWPdADUtz-Q43328ca43AznM3Wb6eF75pJEx61_P/exec'

  const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Obrigado! Seu formulário foi enviado." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  })

  form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('Form submitted!')
})

})

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/microsoft-edge-FAaz8lkinzs-unsplash.jpg", 
      "images/slide/surface-1x5jnhtlp3Y-unsplash.jpg",
      "images/slide/surface-71_s6RDJpGc-unsplash.jpg"
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);

  


