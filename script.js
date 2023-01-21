const toggleBtn = document.querySelector(".toggle-button");
const sideBar = document.querySelector(".side-bar");
const backdrop = document.querySelector(".backdrop");
const closeMenuBtn = document.querySelector(".menu-close-btn");

console.log(toggleBtn);
console.log(sideBar);

const openSideBar = (e) => {
  toggleBtn.style.display = "none";
  closeMenuBtn.style.display = "inline-block";

  sideBar.classList.remove("remove-side-bar");
  backdrop.classList.remove("remove-side-bar");
  sideBar.classList.add("open");
  backdrop.classList.add("open");
};

const closeSideBar = (e) => {
  toggleBtn.style.display = "block";
  closeMenuBtn.style.display = "none";

  sideBar.classList.add("remove-side-bar");
  backdrop.classList.add("remove-side-bar");
  sideBar.classList.remove("open");
  backdrop.classList.remove("open");
};

toggleBtn.addEventListener("click", openSideBar);
backdrop.addEventListener("click", closeSideBar);
closeMenuBtn.addEventListener("click", closeSideBar);

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
  });

// const navigation = document.querySelector(".primary-navigation");
// const navigationHeight = navigation.offsetHeight;

// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navigationHeight + "px"
// );

// const heroHeight = document.querySelector('#hero');
// console.log(heroHeight.scrollHeight);
// const heroBg = document.querySelector('.hero-bg');
// heroBg.style.height = heroHeight.scrollHeight + 'px';

// console.log(heroBg.style);
