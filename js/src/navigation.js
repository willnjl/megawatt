((d, w) => {
  const btn = d.getElementById("navicon");
  const body = d.querySelector("body");
  const overlay = d.querySelector(".overlay");
  const siteHeader = d.querySelector(".site-header");

  const openCssClass = "overlay-show";
  let isOpen = false;

  const showOverlay = () => {
    isOpen = true;
    body.classList.add(openCssClass);
    btn.classList.add("is-active");
  };

  const hideOverlay = () => {
    isOpen = false;
    body.classList.remove(openCssClass);
    btn.classList.remove("is-active");
  };

  const toggleMenu = () => {
    if (isOpen) {
      hideOverlay();
    } else {
      showOverlay();
    }
  };

  if (overlay) {
    d.addEventListener("click", function (event) {
      const isClickInside = siteHeader.contains(event.target);
      if (!isClickInside) {
        hideOverlay();
      }
    });

    d.addEventListener("keydown", (e) => {
      if (e.code === "Escape") hideOverlay();
    });

    btn.addEventListener("click", () => toggleMenu());
  }
})(document, window);
