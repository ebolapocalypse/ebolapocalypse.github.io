document.getElementById('nav-div').onclick = function(e) {
    move('.nav')
        .set('left', 0)
        .set('top', '15px')
        .set('margin-left', 0)
        .set('text-align','left')
        .set('width','20%')
        .set('height','400px')
        .set('font-size','30px')
        .duration('.5s')
        .end();
    move('.content').set('background-color','rgba(255,255,255,0.8').end();
};