$(document).ready(function () {
 $(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: ".prev-btn",
  nextArrow: ".next-btn",
  accessibility: true,
 });
});
