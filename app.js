const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    //toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
    //burger animation
    burger.classList.toggle('toggle');
    }); 

}
navslide();