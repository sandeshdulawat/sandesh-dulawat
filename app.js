window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});




const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});



// =====projects===== //

const projectsModals = document.querySelectorAll(".projects-modal");
const imgCards = document.querySelectorAll(".img-card");
const projectsCloseBtns = document.querySelectorAll(".projects-close-btn");

var projectsModal = function(modalClick){
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectsModal(i);
    });
});

projectsCloseBtns.forEach((projectsCloseBtn) => {
    projectsCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((projectsModalView) => {
            projectsModalView.classList.remove("active");
        });
    });
});



// ====scroll to top button====

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});



// ====navbar-menu active====


window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});



// dark theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";


const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme")
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}



// responsive navbar


const menuBtn = document.querySelector(".nav-menu-btn")
const closeBtn = document.querySelector(".nav-close-btn")
const navigation = document.querySelector(".navigation")
const navItems = document.querySelectorAll(".nav-items a")

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});


ScrollReveal({ 
    reset: true, 
    distance: '20px',
    duration: 2500,
    delay: 100
});


ScrollReveal().reveal('.section-title-01', { delay: 20, origin: 'top', distance: '10px'});

ScrollReveal().reveal('.home .info h2, .skills-description', { delay: 250, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p', { delay: 250, origin: 'left'});
ScrollReveal().reveal('.home .info .btn, .about-info', { delay: 250, origin: 'left'});
ScrollReveal().reveal('.home .home-img', { delay: 250});
ScrollReveal().reveal('.home .media-icons', { delay: 200, origin: 'left'});
ScrollReveal().reveal('.education', { interval: 200});

ScrollReveal().reveal('.service-card', { interval: 200 });