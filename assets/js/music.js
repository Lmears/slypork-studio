function updateKeithImage() {
    const keithLogo = document.getElementById('keith-logo');
    if (typeof isDarkReaderActive === 'function' && isDarkReaderActive()) {
        keithLogo.src = "../assets/images/project-logos/keith_white.png";
    } else {
        keithLogo.src = "../assets/images/project-logos/keith.png";
    }
}

updateKeithImage();

const observer = new MutationObserver(updateKeithImage);
observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-darkreader-mode']
});