
window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else if (window.scrollY > 100) {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Collapse the navbar when page is scrolled
    let prevScrollPos = window.pageYOffset;
    let navbarCollapse = document.body.querySelector('.navbar-collapse');
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        navbarCollapse.classList.remove('show');
        if (prevScrollPos > currentScrollPos) {
            document.body.querySelector('#mainNav').style.top = "0";
        } else {
            document.body.querySelector('#mainNav').style.top = "-100%";
        }
        prevScrollPos = currentScrollPos;
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    window.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }
});
