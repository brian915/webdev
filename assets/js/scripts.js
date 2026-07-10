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

// Offer modal: show once, then suppress for a cooldown window using
// localStorage (client-side only, never sent to a server -> no cookie banner).
(function() {
    var STORAGE_KEY = 'brw_offer_modal_seen';
    var SHOW_DELAY_MS = 1000;

    function showOfferModal() {
        var el = document.getElementById('offerModal');
        if (!el || !window.bootstrap || !window.bootstrap.Modal) {
            return;
        }

        var cooldownDays = parseInt(el.getAttribute('data-cooldown-days'), 10);
        if (isNaN(cooldownDays)) {
            cooldownDays = 7;
        }
        var cooldownMs = cooldownDays * 24 * 60 * 60 * 1000;

        // If we saw it recently, skip. localStorage may throw in private mode
        // or when disabled -> in that case just show it and don't persist.
        try {
            var seen = parseInt(window.localStorage.getItem(STORAGE_KEY), 10);
            if (!isNaN(seen) && (Date.now() - seen) < cooldownMs) {
                return;
            }
        } catch (e) {}

        window.setTimeout(function() {
            new window.bootstrap.Modal(el).show();
            try {
                window.localStorage.setItem(STORAGE_KEY, Date.now());
            } catch (e) {}
        }, SHOW_DELAY_MS);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showOfferModal);
    } else {
        showOfferModal();
    }
})();

