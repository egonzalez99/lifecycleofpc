// Function to handle scroll events and fade in/out slides
let animationDone = false;

function handleScroll() {
    const slides = document.querySelectorAll('.slide1, .slide2, .slide3');
    let allSlidesFadedIn = true;

    slides.forEach((slide, index) => {
        const prevSlide = slides[index - 1];
        const distanceFromPrev = prevSlide ? Math.abs(prevSlide.getBoundingClientRect().top) : Infinity;
        const opacity = Math.max(0, 1 - (distanceFromPrev / window.innerHeight));
        slide.style.opacity = opacity;

        // Check if slide is fully faded in
        if (opacity < 0.1) {
            allSlidesFadedIn = false;
        }

        // Reset opacity after a short delay to avoid immediate fade-out when scrolling
        clearTimeout(slide.fadeTimeout);
        slide.fadeTimeout = setTimeout(() => {
            slide.style.opacity = 1;
        }, 10); // Adjust the delay as needed
    });

    // Check if all slides have faded in
    if (allSlidesFadedIn && !animationDone) {
        animationDone = true; // Animation done once
    }
}

// Add event listener for scroll events
document.addEventListener('scroll', handleScroll);

// Function to display a message when the page is loaded
function displayScrollMessage() {
    const scrollMessage = document.createElement('div');
    scrollMessage.textContent = 'Keep scrolling down';
    scrollMessage.style.position = 'fixed';
    scrollMessage.style.bottom = '20px';
    scrollMessage.style.left = '50%';
    scrollMessage.style.transform = 'translateX(-50%)';
    scrollMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    scrollMessage.style.color = 'white';
    scrollMessage.style.padding = '10px';
    scrollMessage.style.borderRadius = '5px';
    scrollMessage.style.zIndex = '10';
    document.body.appendChild(scrollMessage);

    setTimeout(function() {
        scrollMessage.remove();
    }, 9000 );
}

// Call the function to display the message when the page is loaded
window.addEventListener('load', displayScrollMessage);