var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

function syncScrollLock() {
    var menuOpen = menuTrigger && menuTrigger.classList.contains('is-active');
    var galleryOpen = body && body.dataset.galleryOpen === 'true';

    if (body) {
        body.classList.toggle('lock-scroll', menuOpen || galleryOpen);
    }
}

if (menuTrigger && menuContainer) {
    menuTrigger.onclick = function() {
        menuContainer.classList.toggle('open');
        menuTrigger.classList.toggle('is-active');
        syncScrollLock();
    };
}

