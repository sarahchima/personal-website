window.addEventListener('scroll', function() {
    if (pageYOffset >= 42) {
        document.getElementById('navbar').classList.add('active');
    } else if (pageYOffset < 60 ) {
        document.getElementById('navbar').classList.remove('active');
    }
});


var $animation_elements = $('.box-animation');
var $window = $(window);

$window.on('scroll resize', check_if_in_view);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

$(".scroll").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top-70
    }, 800, function(){
    });
  } // End if
});


$('.nav-link').click(() => {
   $('.navbar-collapse').removeClass('show');
   $('.navbar-toggler').addClass('collapsed');
})


$('#contactForm').submit((e) => {
  const contactName = $('#contact-name');
  const contactEmail = $('#contact-email');
  const contactMessage = $('#contact-message');

  if (contactName == "" || contactEmail == "" || contactMessage == "") {
  }
    
})