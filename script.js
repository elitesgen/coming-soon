

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    resistance: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Breakpoints
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 800px
        900: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        // when window width is >= 120px
        1200: {
            slidesPerView: 7,
            // spaceBetween: 10
        }
      },

    //   cssMode: true,
    //   height: 100,
    //   centeredSlidesBounds: true,

  });


//   containerModifierClass	string	'swiper-'	
// The beginning of the modifier CSS class that can be added to swiper container depending on different parameters
  