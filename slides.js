

let slideIndex = 0;
carousel();

function carousel() {

    let slides = document.getElementsByClassName("mySlide");


  
    //Hide slides

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    //Show next slide

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 1;
    }
    //Show the current slide

    slides[slideIndex-1].classList.add("active");
    setTimeout(carousel, 10000); 
}