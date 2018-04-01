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

var removeOverlay = function(overlayName){
    var affectedOverlays = document.getElementsByClassName(overlayName);
    for(var ovl = 0; ovl < affectedOverlays.length; ovl++){
        affectedOverlays[ovl].style.display='none';
    }
}
var printOverlay = function(overlayName, nodes){
    for(var nds = 0; nds < nodes.length; nds++){
        if(nodes[nds] != undefined && nodes[nds].className == overlayName){
            nodes[nds].style.display='block';
            break;
        }
    }
}

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
    console.log(poc);
    powerOneControls[poc].addEventListener('click',powerOneSelection);
}

var powerTwoControls = document.getElementsByClassName('powerTwo');
for(var ptc = 0; ptc < powerTwoControls.length; ptc++){
    console.log(ptc);
    powerTwoControls[ptc].addEventListener('click',powerTwoSelection);
}

document.getElementById('btnBackNewGameMenu').addEventListener('click',function(){
    transitionScene('newGame', 'menu');
});