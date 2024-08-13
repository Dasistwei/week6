//swiper
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  modules: [Navigation, Pagination],

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 2,
      spaceBetween: 48
    }
  }
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  modules: [Navigation],
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  // Default parameters
  slidesPerView: 3,
  spaceBetween: 24,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    992: {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
