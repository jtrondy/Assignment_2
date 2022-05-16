let slideIndex = 1;  // creates variable slideIndex and sets it to 1

showSlides(slideIndex); // calls showSlides function to display the  first image

function plusSlides(n){  // function to increase/decrease slideIndex when user click buttons
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}


function showSlides(n){
    //declare variables
    let i;
    let slides = document.getElementsByClassName("service_slide");
    let dots = document.getElementsByClassName("dot");


    if (n > slides.length) {slideIndex = 1}
    if (n < 1){slideIndex = slides.length}

// This section hides all elements with class "service_slide".
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}