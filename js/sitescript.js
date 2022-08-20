//JS file created on August 7, 2022, by David Ding

//Scroll to Top
//Get the button:
scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button and hide navigation.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
        navShowContents.style.display = "block";
        btnShowNavigation.innerHTML = "Hide<br>Menu"; 
    }   
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//Dropdown menu
//when button is selected, show navigation.
function showNav() {

    //NAV variables
    const navShowContents = document.querySelector("nav");
    const btnShowNavigation = document.getElementById("navBtn");

    if (navShowContents.style.display === "block") {
        navShowContents.style.display = "none";
        btnShowNavigation.innerHTML = "Show<br>Menu"; 
        topFunction();      
    } else {
        navShowContents.style.display = "block"
        btnShowNavigation.innerHTML = "Hide<br>Menu";
    }
}