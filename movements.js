document.getElementById('nav-div').onclick = function(e) {
  move('.nav')
    .set('left', 0)
    .set('top', '15px')
    .set('margin-left', 0)
    .duration('.5s')
    .end();
};