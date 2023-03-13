  // Menu-toggle button
  $(document).ready(function () {
    $(".menu-icon").on("click", function () {
      $("nav ul").toggleClass("show"),
      $("#menu-icon").toggleClass( "rotate");
    });
  });
  $(".menu a").on("click", function () {
    $("nav ul").toggleClass("show"),
      $("#menu-icon").toggleClass( "rotate");
  });

  $(document).ready(function(){
      $('nav ul li').click(function(){
        $('li').removeClass("active");
        $(this).addClass("active");
    });
    });

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionHeight / 4)) {
      current = section.getAttribute('id');
    }
  })

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active')
    }
  })

})



 //scroll - CSS trics
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to

    var target = $(this.hash );
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        // if ($target.is(":focus")) { // Checking if the target was focused
        //   return false;
        // } else {
        //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        //   $target.focus(); // Set focus again
        // };
      });
    }
  }
});


// counter
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');



//slider

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex =  0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
})

})
