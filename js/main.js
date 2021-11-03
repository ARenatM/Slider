new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  
  slidesPerView: 1.1,
  spaceBetween:5,
  breakpoints: {
    1200:{
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1012:{
      slidesPerView: 4,
    },
    768:{
      slidesPerView: 3,
    },
    710:{
      slidesPerView: 2.8
    },
    576:{
      slidesPerView: 2.3,
    },
    430:{
      slidesPerView: 1.7,
    }
  },
  loop: true,
});
