// Initialize animations
const animations = [
    { id: 'sprzety', path: 'ico-anim/sprzet.json' },

];

animations.forEach(animation => {
    lottie.loadAnimation({
        container: document.getElementById(animation.id),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animation.path
    });
});