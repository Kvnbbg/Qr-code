// Get the carousel items
const carouselItems = document.querySelectorAll(".carousel-item");

// Set the index of the active item
let activeIndex = 0;

// Set the interval for changing the active item
let carouselInterval = setInterval(() => {
    // Set the opacity of the current active item to 0
    carouselItems[activeIndex].style.opacity = 0;

    // Increment the active index
    activeIndex++;

    // If the active index is greater than or equal to the number of items, reset it to 0
    if (activeIndex >= carouselItems.length) {
        activeIndex = 0;
    }

    // Set the opacity of the new active item to 0.9
    carouselItems[activeIndex].style.opacity = 0.9;
}, 5000);

// Get the responsive button
const responsiveButton = document.querySelector(".responsive-button");

// Add a click event listener to the responsive button
responsiveButton.addEventListener("click", () => {
    // Toggle the class "shake" on the middle layer
    document.querySelector(".middle-layer").classList.toggle("shake");

    // Toggle the text of the responsive button
    responsiveButton.textContent = responsiveButton.textContent === "Switch to Mobile View" ? "Switch to Desktop View" : "Switch to Mobile View";
});

// Get the elapsed time element
const elapsedTime = document.querySelector(".elapsed-time");

// Set the initial time
let startTime = Date.now();

// Set the interval for updating the elapsed time
let elapsedInterval = setInterval(() => {
    // Calculate the elapsed time in seconds
    let elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

    // Calculate the elapsed hours, minutes, and seconds
    let elapsedHours = Math.floor(elapsedSeconds / 3600);
    let elapsedMinutes = Math.floor((elapsedSeconds % 3600) / 60);
    let elapsedSecondsRemainder = elapsedSeconds % 60;

    // Format the elapsed time as a string
    let elapsedTimeString = `${elapsedHours.toString().padStart(2, "0")}:${elapsedMinutes.toString().padStart(2, "0")}:${elapsedSecondsRemainder.toString().padStart(2, "0")}`;

    // Update the elapsed time text
    elapsedTime.textContent = elapsedTimeString;
}, 1000);

// Get the remaining time element
const remainingTime = document.querySelector(".remaining-time");

// Set the initial time
let remainingSeconds = 5;

// Set the interval for updating the remaining time
let remainingInterval = setInterval(() => {
    // Decrement the remaining time
    remainingSeconds--;

    // If the remaining time is less than or equal to 0, reset it to 5 and increment the active index
    if (remainingSeconds <= 0) {
        remainingSeconds = 5;
        activeIndex++;

        // If the active index is greater than or equal to the number of items, reset it to 0
        if (activeIndex >= carouselItems.length) {
            activeIndex = 0;
        }

        // Set the opacity of the new active item to 0.9
        carouselItems[activeIndex].style.opacity = 0.9;
    }

    // Update the remaining time text
    remainingTime.textContent = remainingSeconds;
}, 1000);

// Pause the carousel, elapsed, and remaining intervals when the window loses focus
window.addEventListener("blur", () => {
    clearInterval(carouselInterval);
    clearInterval(elapsedInterval);
    clearInterval(remainingInterval);
});

// Resume the carousel, elapsed, and remaining intervals when the window regains focus
window.addEventListener("focus", () => {
    carouselInterval = setInterval(() => {
        // Set the opacity of the current active item to 0
        carouselItems[activeIndex].style.opacity = 0;

        // Increment the active index
        activeIndex++;

        // If the active index is greater than or equal to the number of items, reset it to 0
        if (activeIndex >= carouselItems.length) {
            activeIndex = 0;
        }

        // Set the opacity of the new active item to 0.9
        carouselItems[activeIndex].style.opacity = 0.9;
    }, 5000);

    startTime = Date.now();

    elapsedInterval = setInterval(() => {
        // Calculate the elapsed time in seconds
        let elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

        // Calculate the elapsed hours, minutes, and seconds
        let elapsedHours = Math.floor(elapsedSeconds / 3600);
        let elapsedMinutes = Math.floor((elapsedSeconds % 3600) / 60);
        let elapsedSecondsRemainder = elapsedSeconds % 60;

        // Format the elapsed time as a string
        let elapsedTimeString = `${elapsedHours.toString().padStart(2, "0")}:${elapsedMinutes.toString().padStart(2, "0")}:${elapsedSecondsRemainder.toString().padStart(2, "0")}`;

        // Update the elapsed time text
        elapsedTime.textContent = elapsedTimeString;
    }, 1000);

    remainingSeconds = 5;

    remainingInterval = setInterval(() => {
        // Decrement the remaining time
        remainingSeconds--;

        // If the remaining time is less than or equal to 0, reset it to 5 and increment the active index
        if (remainingSeconds <= 0) {
            remainingSeconds = 5;
            activeIndex++;

            // If the active index is greater than or equal to the number of items, reset it to 0
            if (activeIndex >= carouselItems.length) {
                activeIndex = 0;
            }

            // Set the opacity of the new active item to 0.9
            carouselItems[activeIndex].style.opacity = 0.9;
        }

        // Update the remaining time text
        remainingTime.textContent = remainingSeconds;
    }, 1000);
});