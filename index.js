const mobileNavBtn = document.querySelector('.mobile-navbar-btn');
const navHeader = document.querySelector('.header');


const toggleBar = () =>{
    navHeader.classList.toggle("active");
};

mobileNavBtn.addEventListener("click", () => toggleBar());