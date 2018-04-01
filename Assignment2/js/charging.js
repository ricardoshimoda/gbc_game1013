
var chargingBar = function(){
    var filler = document.getElementById('chargingProgress');
    if(Math.random() > .2){
        filler.style.width = (currentFill++) + '%';
    }
    if(currentFill > 100){
        clearInterval(inter);
        transitionScene('charging', 'game', false, setGame);
    }
};

var chargingBegin = function(){
    currentFill=0;
    var chargingEnsemble = document.getElementById('chargingEnsemble');
    chargingEnsemble.visibility='visible';
    inter =  this.setInterval(chargingBar,100);

};

//chargingBegin();
