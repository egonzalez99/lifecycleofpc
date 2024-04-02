// Function to handle scroll events and fade in/out slides
let animationDone = false;

function handleScroll() {
    const slides = document.querySelectorAll('.slide1, .slide2, .slide3');
    let allSlidesFadedIn = true;
    //checks that the slides are collected and apply a opacity in the array
    slides.forEach((slide, index) => {
        const prevSlide = slides[index - 1];//slides are collected while still having access to previous slide
        const distanceFromPrev = prevSlide ? Math.abs(prevSlide.getBoundingClientRect().top) : Infinity;//calculate prevous and current slides
        const opacity = Math.max(0, 1 - (distanceFromPrev / window.innerHeight));//calculate current slide's opacity from the previous slide by the window heigh(0-1)
        slide.style.opacity = opacity;

        // Check if slide is fully faded in. The slides opacity are set invisible at the start unless scroll is met
        if (opacity < 1) {
            allSlidesFadedIn = false;
        }

        /* Reset opacity after a short delay to avoid immediate fade-out when scrolling.
        After completing the scroll the slides will fade in to the users screen.
        */
        clearTimeout(slide.fadeTimeout);
        slide.fadeTimeout = setTimeout(() => {
            slide.style.opacity = 1;
        }, 10); //10 sec delay
    });

    // Check if all slides have faded in
    if (allSlidesFadedIn && !animationDone) {
        animationDone = true; // Animation loads once its finished
    }
}

// event listener for scroll events
document.addEventListener('scroll', handleScroll);

// display a message when the page is loaded
function displayScrollMessage() {
    //creation of the scroll down message
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
    }, 9000 );//9 sec delay so user can see instruction to scroll down
}

// Call the function to display the message when the page is loaded in
window.addEventListener('load', displayScrollMessage);