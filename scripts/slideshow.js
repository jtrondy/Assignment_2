// N/A[Coding Journey].(2019, June 17). Simple-Auto-Playing Image Slideshow (HTML, CSS and JavaScript)[video].YouTube.
//     https://youtu.be/o_hRhTZORNY


const slides = document.querySelectorAll(".index_slide");
let currentImage = 0;

//repeatedly calls function nextImage every 3 seconds
setInterval(nextImage, 3000);

/*
function is setting currentImage to 0, 1 and 2 and hiding/displaying each picture
1 % 3 = 1, 2 % 3 = 2, 3 % 3 = 0
*/
function nextImage() {
    slides[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % slides.length;
    slides[currentImage].style.display = "block";
}
