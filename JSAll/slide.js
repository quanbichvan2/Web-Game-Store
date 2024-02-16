var currentSlide = 0;
// query thành mảng với div .popular-slide--group--image chứa 4 hình ( tưởng tượng 4 hình nằm theo từng vị trí tại mảng)
var slides = document.querySelectorAll(".popular-slide--group--image");

function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);

// set tự động chảy slide ảnh, 2000 tức 2s
setInterval(() => {
    nextSlide();
}, 3000)


