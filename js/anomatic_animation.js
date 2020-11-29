var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/data.json' // the path to the animation json
};

lottie.loadAnimation(params);

