$(document).ready(function(){
    $(window).scroll(function(){
      var body = $("body");
      body.toggleClass("sticky", $(window).scrollTop() > 0 );
    });
  });
  

  $(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
    });

    $(".closed-menu").click(function(e){
        e.preventDefault();
        $("body").removeClass("toggle");
      });
  });


  $(document).ready(function(){
    $(".site-nav-mobile .menu-item-has-children > a").click(function(e){
       e.preventDefault(); // Prevents default link action
       $(this).next(".sub-menu").slideToggle();
    });
 });
 


 $(document).ready(function(){
    $(".acc-head").click(function(){
        $(this).next().slideToggle().parent().siblings().find(".acc-content").slideUp();
    });
    $(".acc-head").click(function(){
        $(this).toggleClass("active").parent().siblings().find(".acc-head").removeClass("active");
    });
});



$('.testimonial-slider').slick({
  centerMode: true,
  dots: true,
  centerPadding: '250px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});