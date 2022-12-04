((d, w) => {
  [].forEach.call(d.querySelectorAll(".swiper-cards"), (node) => {
    let swiper = new Swiper(node, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        550: {
          slidesPerView: "auto",
          loop: false,
        },
      },
    });
  });

  const stem = new Swiper(".swiper-stem", {
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      600: {
        slidesPerView: "auto",
        centeredSlides: false,
        loop: false,
      },
    },
  });

  const testimonial = new Swiper(".swiper-testimonial", {
    navigation: {
      nextEl: ".swiper-testimonial .btn-next",
      prevEl: ".swiper-testimonial .btn-prev",
    },
  });
})(document, window);
