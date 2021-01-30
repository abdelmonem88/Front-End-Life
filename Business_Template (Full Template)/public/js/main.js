//toggle navbar
const navtoggler = document.querySelector(".nav-toggle");
const listContainer = document.querySelector(".list-container");

navtoggler.addEventListener("click", () => {
 listContainer.classList.toggle("show");
});

//add fixed class to nav
const homeSection = document.querySelector(".home");
const nav = document.querySelector(".home nav");
let HomeHeight = homeSection.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
 if (window.pageYOffset > HomeHeight) {
  nav.classList.add("fixed");
 } else {
  nav.classList.remove("fixed");
 }
});

//libs
$(document).ready(function () {
 //banner slider
 $(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: ".prev-btn",
  nextArrow: ".next-btn",
 });

 //testimoinials carousel
 $(".testimonial-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  responsiveClass: true,
  responsive: {
   0: {
    items: 1,
   },
   1000: {
    items: 2,
   },
  },
 });

 //clients carousel
 $(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 50,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  responsiveClass: true,
  responsive: {
   0: {
    items: 1,
   },
   600: {
    items: 2,
   },
   1000: {
    items: 4,
   },
  },
 });

 //Count to
 function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = elemTop <= 500 || elemBottom <= window.innerHeight;
  return isVisible;
 }

 $(window).scroll(function () {
  if (isScrolledIntoView(document.getElementById("statistics"))) {
   $(".count").countTo({
    speed: 2000,
    refreshInterval: 30,
    onComplete: function (value) {
     console.debug(this);
    },
   });
   $(window).off("scroll");
  }
 });
});
