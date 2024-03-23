// Function to handle scroll events and fade in/out slides
function handleScroll() {
    const slides = document.querySelectorAll('.slide1, .slide2, .slide3');
    slides.forEach((slide, index) => {
        const prevSlide = slides[index - 1];
        const distanceFromPrev = prevSlide ? Math.abs(prevSlide.getBoundingClientRect().top) : Infinity;
        const opacity = Math.max(0, 1 - (distanceFromPrev / window.innerHeight));
        slide.style.opacity = opacity;

        // Reset opacity after a short delay to avoid immediate fade-out when scrolling
        clearTimeout(slide.fadeTimeout);
        slide.fadeTimeout = setTimeout(() => {
            slide.style.opacity = 1;
        }, 10); // Adjust the delay as needed
    });
}

// Add event listener for scroll events
document.addEventListener('scroll', handleScroll);