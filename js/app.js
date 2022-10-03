let myImagesSlider = new Swiper('.image-slider', {

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   grabCursor: true,
   keyboard: {
   enabled: true,
   onlyInViewport: true,
   pageUpDown: true,
   },
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerColumn: 1,
   loop: true,
   speed: 800,
   mousewheel: {
      sensitivity: 3,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      640: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      }
   },
});

let mySecondSlider = new Swiper('.second-slider', {
   grabCursor: true,
   keyboard: {
   enabled: true,
   onlyInViewport: true,
   pageUpDown: true,
   },
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerColumn: 1,
   loop: true,
   speed: 800,
   mousewheel: {
      sensitivity: 3,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      640: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      }
   },
});
myImagesSlider.controller.control = mySecondSlider;
mySecondSlider.controller.control = myImagesSlide;