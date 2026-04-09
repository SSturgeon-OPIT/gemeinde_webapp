// debugging...
btnRight.addEventListener("click", () => {
    console.log("RIGHT CLICKED");});

// Wait until DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function()
{
    // Select carousel track
    const track = document.querySelector(".carousel-track");

    // Select images in the carousel
    const image = document.querySelectorAll(".carousel-track img");

    // Select navigation buttons
    const btnLeft = document.querySelector("carousel-btn.left");
    const btnRight = document.querySelector(".carousel-btn.right");

    //Current index would be leftmost image in sight
    let index = 0;

    // Number of images visible at one time
    const visibleImages = 5;

    // Updates carousel position thrugh translation of track, where amount pics shift depends on index/width
    function updateCarousel()
    {
        // Get width of single image
        const imageWidth = images[0].offsetWidth;

        // Move the track horizontally using CSS
        track.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    // Move carousel one step to the righrt
    btnRight.addEventListener("click", () =>
    {
        // prevent scrolling beyond last position
        if ( index < this.images.length - visibleImages)
        {
            index++ // move forward
            updateCarousel(); // apply movement
        }
    });

    // Move carousel to the left
    btnLeft.addEventListener("click", () =>
    {
        //prevent scrolling beyond first image
        if (index > 0)
        {
            index--; // move back
            updateCarousel(); // apply movement
        }
    });

    // recalculate position when window is resized
    window.addEventListener("resize", updateCarousel);
});
