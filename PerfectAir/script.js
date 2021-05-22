$(document).ready(function () {
  $(".one-time").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<span class="pArrow"><i class="fas fa-angle-left"></i></span>`,
    nextArrow: `<span class="nArrow"><i class="fas fa-angle-right"></i></span>`,
  });
});
