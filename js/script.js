const lenis = new Lenis({
  autoRaf: true
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(anchor.getAttribute("href"));

    if (target) {
      lenis.scrollTo(target);
    }
  });
});
