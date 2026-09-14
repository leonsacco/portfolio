let targetScroll = window.scrollY;
let currentScroll = window.scrollY;

window.addEventListener("wheel", (e) => {
    e.preventDefault();

    targetScroll += e.deltaY;

    // Prevent scrolling beyond the page
    targetScroll = Math.max(
        0,
        Math.min(
            targetScroll,
            document.documentElement.scrollHeight - window.innerHeight
        )
    );
}, { passive: false });

function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * 0.08;

    window.scrollTo(0, currentScroll);

    requestAnimationFrame(smoothScroll);
}

smoothScroll();
