((d, w) => {
  const accordions = document.querySelectorAll(".accordion__btn");

  accordions.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const panel = e.target.nextElementSibling;
      btn.classList.toggle("active");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
})(document, window);
