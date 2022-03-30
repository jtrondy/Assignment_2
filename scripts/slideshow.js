// N/A[Coding Journey].(2019, June 17). Simple-Auto-Playing Image Slideshow (HTML, CSS and JavaScript)[video].YouTube.
//     https://youtu.be/o_hRhTZORNY
const slides = document.querySelectorAll(".index_slide");
let currentImage = 0;

slides[currentImage].style.display = "block";

setInterval(nextImage, 3000);
function nextImage() {
    slides[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % slides.length;
    slides[currentImage].style.display = "block";
}
