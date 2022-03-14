window.addEventListener("resize", hideNav);

function hideNav(){
    console.log(window.innerWidth);
    const x = document.getElementById("nav");
    if(window.innerWidth < 1203){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}