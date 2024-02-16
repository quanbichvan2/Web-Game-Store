// set the end time of the flash sale (e.g. 1 hour from now)
const endTime = new Date().getTime() + 43200000;

// update the timer every second
const timer = setInterval(() => {
    // get the current time
    const now = new Date().getTime();

    // calculate the time remaining
    const timeRemaining = endTime - now;

    // calculate the hours, minutes, and seconds remaining
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // update the timer element with the remaining time
    const timerElement = document.getElementById("flash-sale-timer");
    timerElement.innerHTML = `Time left: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // stop the timer when the sale ends
    if (timeRemaining < 0) {
        clearInterval(timer);
        timerElement.innerHTML = "Sale ended!";
    }
}, 1000);

//change color
const flashSale = document.querySelector('.flash-sale');

function updateFlashSaleColor() {
    if (flashSale.classList.contains('blue')) {
        flashSale.classList.remove('blue');
        flashSale.classList.add('green');
    } else if (flashSale.classList.contains('green')) {
        flashSale.classList.remove('green');
        flashSale.classList.add('yellow');
    } else {
        flashSale.classList.remove('yellow');
        flashSale.classList.add('blue');
    }
}
// blue green yellow
setInterval(updateFlashSaleColor, 2000); // Change color every 5 seconds
