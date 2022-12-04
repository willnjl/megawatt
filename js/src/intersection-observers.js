((d, w) => {
  if (!window.IntersectionObserver) {
    console.log("observers not supported");
    const observedContent = d.querySelectorAll("fade");
    observedContent.forEach((elem) => {
      elem.classList.remove("fade");
      if (elem.classList.contains("fade-in")) {
        elem.classList.remove("fade-in");
      }

      if (elem.classList.contains("swipe-left")) {
        elem.classList.remove("swipe-left");
      }

      if (elem.classList.contains("swipe-right")) {
        elem.classList.remove("swipe-right");
      }

      if (elem.classList.contains("swipe-up")) {
        elem.classList.remove("swipe-up");
      }
    });
  }
  if (!!window.IntersectionObserver) {
    const appearOptions = {
      threshold: 0,
      rootMargin: `0px 0px -150px 0px`,
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            if (entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("appear");
            }
            if (entry.target.classList.contains("swipe-left")) {
              entry.target.classList.add("position");
            }
            if (entry.target.classList.contains("swipe-right")) {
              entry.target.classList.add("position");
            }
            if (entry.target.classList.contains("swipe-up")) {
              entry.target.classList.add("position");
            }
            if (entry.target.classList.contains("swipe-down")) {
              entry.target.classList.add("position");
            }
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );
    const faders = d.querySelectorAll(".fade");
    const staggers = d.querySelectorAll(".fade-stagger");

    const setDelay = (group, duration, i) => {
      const style = getComputedStyle(group);
      const isGrid = style.getPropertyValue("display") == "grid";

      if (isGrid) {
        let cols = style
          .getPropertyValue("grid-template-columns")
          .split(" ").length;

        return (i % cols) * duration;
      }

      return i * duration;
    };

    staggers.forEach((group) => {
      const duration = 0.25;

      group.querySelectorAll(".fade").forEach((elem, index) => {
        elem.style.transitionDelay = `${setDelay(group, duration, index)}s`;
      });
    });

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    const highlighterOptions = {
      threshold: 0.9,
    };

    const highlightOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.target.classList) {
            entry.target.classList.remove("highlight-active");
          } else {
            entry.target.classList.add("highlight-active");
          }
        });
      },
      highlighterOptions
    );

    const highlighters = d.querySelectorAll(".highlight");

    highlighters.forEach((elem) => {
      highlightOnScroll.observe(elem);
    });
  }
})(document, window);
