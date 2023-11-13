$(document).ready(function(){
    
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#myBtn').fadeIn();
      } else {
          $('#myBtn').fadeOut();
      }
  });
  
  
  $('#myBtn').click(function(){
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
  });

  
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    } 
  });
});
document.addEventListener('DOMContentLoaded', function(){
    const botaoNav = document.getElementById('botaoNav');
    const navBar = $('#navBar'); 
    navBar.hide(); 
    botaoNav.addEventListener('click', function() {
        if (navBar.css('max-height') == '0px') {
            navBar.css('max-height', '1000px'); 
        } else {
            navBar.css('max-height', '0px'); 
        }
        navBar.slideToggle(600); 
    })
    window.addEventListener("resize", function () {
        if (window.innerWidth > 999) {
            navBar.hide();
            navBar.css('max-height', '0px'); 
        }
    });
})
