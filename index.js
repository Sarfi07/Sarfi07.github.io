document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World!")
    document.getElementById("home-nav").addEventListener('click', () => {
        hideDivs();
        document.querySelector('#home').style.display = "block";
    })

    document.getElementById("about-nav").addEventListener('click', () => {
        hideDivs();
        document.querySelector('#about').style.display = "block";
    })

    document.getElementById("projects-nav").addEventListener('click', () => {
        hideDivs();
        document.querySelector('#projects').style.display = "block";
    })

    document.getElementById("contact-nav").addEventListener('click', () => {
        hideDivs();
        document.querySelector('#contactMe').style.display = "block";
    })
    
})

function hideDivs() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });
}