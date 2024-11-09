const nav = document.querySelector(".nav-bar");
const homeLogo = document.querySelector(".home-text");
const navTop = nav.offsetTop;
console.log(nav.offsetHeight);
function FixNav() {
    if (window.scrollY > navTop) {
        document.body.style.paddingTop = 10 + 'px';// nav.offsetHeight + 'px';
        nav.classList.add("update-nav-bar");
        homeLogo.classList.add("update-home-text");
    }
    else {
        document.body.style.paddingTop = 0;
        homeLogo.classList.remove("update-home-text");
        nav.classList.remove("update-nav-bar");
    }
}

window.addEventListener('scroll', FixNav);

