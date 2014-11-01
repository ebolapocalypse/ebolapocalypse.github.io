// (Location operations)
var region = 'Northeast';
document.getElementById('yo').innerHTML = '<h2>Want to be notified when there\'s Ebola news in the ' + region + '? *Yo* us at Ebola' + region + '!</h2><p style="font-size=10px;">(Click to close.)</p>';
move('.popup')
    .set('height','auto')
    .set('top','0px')
    .duration('1s')
    .end();
document.getElementById('yo').onclick = function(e) {
    move('.popup')
        .set('top','-250px')
        .duration('1s')
        .end();
};