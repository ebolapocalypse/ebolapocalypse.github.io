document.getElementById('nav-div').onclick = function(e) {
    move('.nav')
        .set('left', 0)
        .set('top', '15px')
        .set('margin-left', 0)
        .set('text-align','left')
        .set('width','20%')
        .set('font-size','20px')
        .duration('.5s')
        .end();
    move('.wrapper').set('background-color','rgba(255,255,255,0.8').end();
};
document.getElementById('learn').onclick = function(e) {
    document.getElementById("main").innerHTML = '<object type="text/html" class="content" data="learn.html" ></object>';
}
document.getElementById('survive').onclick = function(e) {
    document.getElementById("main").innerHTML = '<object type="text/html" class="content" data="survive.html" ></object>';
}
document.getElementById('avoid').onclick = function(e) {
    document.getElementById("main").innerHTML = '<object type="text/html" class="content" data="avoid.html" ></object>';
}
document.getElementById('rogue').onclick = function(e) {
    document.getElementById("main").innerHTML = '<object type="text/html" class="content" data="rogue.html" ></object>';
}