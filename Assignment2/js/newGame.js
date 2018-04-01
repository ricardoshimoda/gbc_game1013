var heroSelected = false;
var powerOneSelected = false;
var powerTwoSelected = false;

var enablingGameButton = function(){
    if(heroSelected && powerOneSelected && powerTwoSelected){
        document.getElementById('btnNewGameLoading').disabled = '';
    }
};

var heroSelection = function(){
    heroSelected = true;
    enablingGameButton();
    var heroName = this.getAttribute('hero');
    document.getElementById('chosenCharacter').src='img/'+heroName+'.png';
    removeOverlay('selectedHeroOverlay');
    printOverlay('selectedHeroOverlay', this.childNodes);
};

var powerOneSelection = function(){
    powerOneSelected = true;
    enablingGameButton();
    removeOverlay('selectedPowerOneOverlay');
    printOverlay('selectedPowerOneOverlay', this.childNodes);
};
var powerTwoSelection = function(){
    powerTwoSelected = true;
    enablingGameButton();
    removeOverlay('selectedPowerTwoOverlay');
    printOverlay('selectedPowerTwoOverlay', this.childNodes);
};

var heroControls = document.getElementsByClassName('hero');
for(var hcs = 0; hcs < heroControls.length; hcs++){
    heroControls[hcs].addEventListener('click',heroSelection);
}

var powerOneControls = document.getElementsByClassName('powerOne');
for(var poc = 0; poc < powerOneControls.length; poc++){
    powerOneControls[poc].addEventListener('click',powerOneSelection);
}

var powerTwoControls = document.getElementsByClassName('powerTwo');
for(var ptc = 0; ptc < powerTwoControls.length; ptc++){
    powerTwoControls[ptc].addEventListener('click',powerTwoSelection);
}

document.getElementById('btnBackNewGameMenu').addEventListener('click',function(){
    transitionScene('newGame', 'menu');
});

document.getElementById('btnNewGameLoading').addEventListener('click', function(){
    transitionScene('newGame', 'charging', false, chargingBegin);
});