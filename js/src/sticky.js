class Sticky {
  POSITIONS = {
    INSIDE: "INSIDE",
    BELOW: "BELOW",
    ABOVE: "ABOVE",
  };

  constructor(element) {
    this.element = element;
    this.container = element.parentElement;
    this.isMinumumWindowSize = false;

    this.stickyActive;
    this.containerDims;

    this.handleWindowResizeEvent();
    this.setPosition();
  }

  update() {
    const isSticky = this.stickyActive;
    this.setContainerDims();

    if (isSticky && !this.isMinumumWindowSize) {
      this.release();
      return;
    }

    const position = this.setPosition();
    if (position === this.POSITIONS.INSIDE) this.stick();
    if (position === this.POSITIONS.BELOW) this.unStick();
    if (position === this.POSITIONS.ABOVE) this.release();
  }

  setPosition() {
    const belowTop = this.isBelowTop();
    const belowBottom = this.isBelowBottom();
    if (belowTop && !belowBottom) this.scrollPosition = this.POSITIONS.INSIDE;
    if (belowTop && belowBottom) this.scrollPosition = this.POSITIONS.BELOW;
    if (!belowTop) this.scrollPosition = this.POSITIONS.ABOVE;
    return this.scrollPosition;
  }

  release() {
    if (!this.stickyActive) return;

    const el = this.element;
    el.style.position = "relative";
    el.style.top = null;
    el.style.left = null;
    el.style.right = null;
    el.style.bottom = null;
    el.style.width = null;
    this.stickyActive = false;
  }
  stick() {
    const el = this.element;
    this.stickyActive = true;
    el.style.position = "fixed";
    el.style.top = `${this.offsetTop}px`;
    el.style.left = `${this.elementDims.left}px`;
    el.style.width = `${this.elementDims.width}px`;
    el.style.bottom = null;
  }

  unStick() {
    if (!this.stickyActive) return;

    const el = this.element;
    this.stickyActive = true;
    el.style.position = "absolute";
    el.style.top = null;
    el.style.bottom = 0;
    el.style.left = 0;
  }

  isBelowTop() {
    return this.containerDims.top - this.offsetTop < 0;
  }
  isBelowBottom() {
    const { bottom } = this.containerDims;
    return bottom - this.element.getBoundingClientRect().height < 0;
  }

  setContainerDims() {
    this.containerDims = this.container.getBoundingClientRect();
    return this.containerDims;
  }
  setElementDims() {
    this.elementDims = this.element.getBoundingClientRect();
    return this.elementDims;
  }

  handleWindowResizeEvent() {
    const fallbackSize = "1024px";
    const minWindowWidth =
      this.element.getAttribute("data-sticky-width") || fallbackSize;

    this.isMinumumWindowSize = window.matchMedia(
      `(min-width: ${minWindowWidth})`
    ).matches;

    this.offsetTop = this.element.offsetTop;
    this.offsetLeft = this.element.offsetLeft;
    this.setElementDims();
    this.setContainerDims();
  }
}

((d, w) => {
  const handleScroll = (collection) => {
    collection.forEach((sticky) => sticky.update());
  };
  const handleResize = (collection) => {
    collection.forEach((sticky) => {
      sticky.handleWindowResizeEvent();
      sticky.update();
    });
  };

  const selector = ".sticky";
  const collection = Array.from(d.querySelectorAll(selector)).map(
    (elem) => new Sticky(elem)
  );

  w.addEventListener("load", () => handleScroll(collection));
  w.addEventListener("scroll", () => handleScroll(collection));
  w.addEventListener("resize", () => handleResize(collection));
})(document, window);
