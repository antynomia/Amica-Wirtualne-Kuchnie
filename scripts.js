// Initialize animations
const animations = [
    { id: 'sprzety', path: 'https://antynomia.github.io/Amica-Wirtualne-Kuchnie/ico-anim/sprzet.json' },
    { id: '3d', path: 'https://antynomia.github.io/Amica-Wirtualne-Kuchnie/ico-anim/3d.json' },
    { id: 'pomysly', path: 'https://antynomia.github.io/Amica-Wirtualne-Kuchnie/ico-anim/pomysly.json' },

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