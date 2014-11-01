document.getElementById('nav-div').onclick = function(e) {
    move('.nav')
        .set('left', 0)
        .set('top', '15px')
        .set('margin-left', 0)
        .set('text-align','left')
        .duration('.5s')
        .end();
    move('.content').set('background-color','rgba(255,255,255,0.8').end();
};
// function toggle_visibility('learn-div') {
//    var e = document.getElementById('learn-div');
//    if(e.style.display == 'block')
//       e.style.display = 'none';
//    else
//       e.style.display = 'block';
// }