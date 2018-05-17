var slide_current_index = 0;
show_slide();
var slides, dot_control;

function show_slide() {
    var i;
    //retrieve dot and slide element
    slides = document.getElementsByClassName("slide_images"); 
    dot_control = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slide_current_index++; //increment index
    if (slide_current_index> slides.length) {slide_current_index = 1}    
    for (i = 0; i < dot_control.length; i++) {
        dot_control[i].className = dot_control[i].className.replace(" active", ""); //remove the active in class
    }
    slides[slide_current_index-1].style.display = "block";  
    dot_control[slide_current_index-1].className += " active";
    setTimeout(show_slide, 3000); // Change image every 3 seconds

}

function slide_arrow_control(given_index) { //controls arrows when clicked
    slide_current_index += given_index;
    if (slide_current_index> slides.length) {slide_current_index = 1}
    else if(slide_current_index<1){slide_current_index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dot_control.length; i++) {
        dot_control[i].className = dot_control[i].className.replace(" active", "");
    }
    slides[slide_current_index-1].style.display = "block";  
    dot_control[slide_current_index-1].className += " active";

}

function slide_dot_control(index) { //controls the dots when clicked
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dot_control.length; i++) {
        dot_control[i].className = dot_control[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dot_control[index-1].className += " active";

}