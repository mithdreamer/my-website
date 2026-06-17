function initializeAnimations() {

  const fadeElements = document.querySelectorAll(".fade-in");

  if (!("IntersectionObserver" in window)) {

    fadeElements.forEach((element) => {

      element.classList.add("show");

    });

    return;

  }

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  };

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");
        observer.unobserve(entry.target);

      }

    });

  }, observerOptions);

  fadeElements.forEach((element) => {

    observer.observe(element);

  });

}

initializeAnimations();
