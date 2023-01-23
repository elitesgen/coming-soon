// const toggleBtn = document.querySelector(".toggle-button");
// const sideBar = document.querySelector(".side-bar");
// const backdrop = document.querySelector(".backdrop");
// const closeMenuBtn = document.querySelector(".menu-close-btn");

// console.log(toggleBtn);
// console.log(sideBar);

// const openSideBar = (e) => {
//   toggleBtn.style.display = "none";
//   closeMenuBtn.style.display = "inline-block";

//   sideBar.classList.remove("remove-side-bar");
//   backdrop.classList.remove("remove-side-bar");
//   sideBar.classList.add("open");
//   backdrop.classList.add("open");
// };

// const closeSideBar = (e) => {
//   toggleBtn.style.display = "block";
//   closeMenuBtn.style.display = "none";

//   sideBar.classList.add("remove-side-bar");
//   backdrop.classList.add("remove-side-bar");
//   sideBar.classList.remove("open");
//   backdrop.classList.remove("open");
// };

// toggleBtn.addEventListener("click", openSideBar);
// backdrop.addEventListener("click", closeSideBar);
// closeMenuBtn.addEventListener("click", closeSideBar);


// Volunteer Swipper
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

const navigation = document.querySelector(".navbar");
const navbarNav = document.querySelector('#navbarNav');
const bodyWrapper = document.querySelector('.wrapper');
const navToggle = document.querySelector('.navbar-toggler');

// Resize event handler to display appropriate navbar type
// window.addEventListener('resize', () => {
//   if (bodyWrapper.clientWidth >= '550') {
//     navbarNav.classList.add('navbar-expand');
//     navbarNav.classList.remove('navbar-collapse');
//   } else {
//     navbarNav.classList.add('navbar-collapse');
//     navbarNav.classList.remove('navbar-expand');
//   }
// })

// Set Navbar height to --scroll-padding variable
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

// Mobile nav toggle button  event handler
navToggle.addEventListener('click', () => {
  if (navToggle.attributes.src.value == './images/menu-open.svg') {
    navToggle.attributes.src.value = './images/menu-close.svg';

    navbarNav.classList.replace('collapse', 'expand');
    bodyWrapper.style.setProperty('filter', 'blur(5px)');
  } else {
    navToggle.attributes.src.value = "./images/menu-open.svg";
    
    navbarNav.classList.replace('expand', 'collapse');
    bodyWrapper.style.setProperty('filter', 'none');
  }

})

// change active nav element on click
navbarNav.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nav-link')) return;
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(el => {
    if (el.classList.contains('active')) el.classList.remove('active');
  })

  e.target.classList.add('active');
});

