((d, w) => {
  // Clickable divs
  [].forEach.call(d.querySelectorAll(".clickable"), (item) => {
    const target = item.querySelector(".link-click") || item.querySelector("a");
    item.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() != "a") {
        e.preventDefault();
        target.click();
      }
    });
  });

  // Scroll Down Buttons
  [].forEach.call(d.querySelectorAll(".link-scroll, .btn-scroll"), (item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      let destination =
        href && href != "#"
          ? document.querySelector(href)
          : item.closest("section").nextElementSibling;

      destination && destination.scrollIntoView({ behavior: "smooth" });
    });
  });

  //lazy loading

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  const iframeObserver = lozad(d.querySelectorAll("iframe[data-src]")); //Lazy load iframes with lazyEmbed php function
  iframeObserver.observe();

  // Parallax init
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.1,
    zIndex: -100,
  });
})(document, window);
