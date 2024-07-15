$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay: true,
      autoplayTimeout: 5000,
      navSpeed: true,
      checkVisible: true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:3,
          },
      },
  });
  })

  