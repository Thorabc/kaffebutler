//import Glide from '@glidejs/glide'
//import baguetteBox from 'baguettebox.js';

const glideElement = document.querySelector('.glide');
if (glideElement) {
    new Glide(glideElement).mount()
}

const galleryElement = document.querySelector('.gallery');
if (galleryElement) {
    window.onload = function() {
        baguetteBox.run('.gallery');
    };
}

const bars = document.querySelector('.bars');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');


bars.addEventListener('click', (e) => {
    e.preventDefault();

    menu.style.display = 'block';
    bars.style.display = 'none';
    close.style.display = 'block';

});

close.addEventListener('click', (e) => {
    e.preventDefault();

    menu.style.display = 'none';
    bars.style.display = 'block';
    close.style.display = 'none';

});


function resizeMenu() {
    if((window.innerWidth>959)&&(window.getComputedStyle(menu).display === 'none')){
        menu.style.display = '';
        bars.style.display = '';
        close.style.display = '';
    }
}

window.addEventListener('resize', resizeMenu);


(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}