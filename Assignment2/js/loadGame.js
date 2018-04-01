var loadGameSelection = function(){
    removeOverlay('selectedLevelOverlay');
    removeOverlay('loadGameNowNow');
    printOverlay('selectedLevelOverlay', this.childNodes, this.offsetWidth-100);
    printOverlay('loadGameNowNow', this.childNodes);
};

var loadGameScreen = function(){
    transitionScene('loadGame', 'charging', false, chargingBegin);    
};

document.getElementById('btnBackLoadGameMenu').addEventListener('click',function(){
    transitionScene('loadGame', 'menu');    
});

var loadGameControls = document.getElementsByClassName('levelContainer');
for(var lgc = 0; lgc < loadGameControls.length; lgc++){
    loadGameControls[lgc].addEventListener('click',loadGameSelection);
}

var loadGameRightNow = document.getElementsByClassName('loadGameScreenButton');
for(var lgrn = 0; lgrn < loadGameRightNow.length; lgrn++){
    loadGameRightNow[lgrn].addEventListener('click',loadGameScreen);
}
