var goingUp = false;
var goingDown = false;
var goingLeft = false;
var goingRight = false;
var mapInterval = {};
var initialPosX = 10;
var initialPosY = 10;
var skip = 20;

var playerHealth = 100;
var playerMana = 100;
var playerOxygen = 100;
var playerCarArmor = 100;
var playerCarHealth = 100;
var playerCarTemperature = 0;
var playerMoney = 2000.00;
var playerXP = 10638;
var playerLevel = 0;
var XPLevels = [
    100000, 200000, 300000, 400000, 500000, 750000, 1000000
];

var capturePageTransitions = function(keyCode){
    switch(keyCode){
        case 68:
        case 100: // DRIVING
            if(currentScene != 'driving')
                transitionScene(currentScene, 'driving');
            return true;
        case 83:
        case 115: // SWIMMING
            if(currentScene != 'swimming')
                transitionScene(currentScene, 'swimming');
            return true;
        case 87:
        case 119: // WALKING
            if(currentScene != 'game')
                transitionScene(currentScene, 'game');
            return true;
        case 80:
        case 112: // PAUSE MENU
            unsetGame();
            transitionScene(currentScene, 'pauseMenu', false, setPauseBack);    
            return true;
        case 76:
        case 108: // RELOAD
            unsetGame();
            transitionScene(currentScene, 'charging', false, chargingBegin);
            return true;
    }
    return false;
}

var captureMapMove = function(keyCode){
    switch(keyCode){
        /* Setting up the variables that move the map */
        case 37: // GOING LEFT
            goingLeft = true;
            return true;
        case 38: // GOING UP
            goingUp = true;
            return true;
        case 39: // GOING RIGHT
            goingRight = true;
            return true;
        case 40: // GOING DOWN
            goingDown = true;
            return true;
    }
    return false;
}

var capturePlayerCommonActions = function(keyCode){
    /* Common actions which affect the player no matter what */
    switch(keyCode){
        case 69:
        case 101: 
            playerMoney += (Math.random() * 5000 + 5000);
            return true;
        case 88:
        case 120:
            playerXP += Math.floor(Math.random() * 50000 ) + 50000;
            return true;        
    }
}

var redrawControls = function(){

}

var goingPlaces = function(event){
    if(capturePageTransitions(event.keyCode))
        return;
    if(captureMapMove(event.keyCode))
        return;
    if(capturePlayerCommonActions(event.keyCode))
        return;
    /* Actions that depend on the game scene */
    if(currentScene == 'game'){
        capturePlayerWalkingActions();
    }
    else if(currentScene == 'swimming'){
        capturePlayerSwimmingActions();
    }
    else{
        capturePlayerDrivingActions();
    }
    redrawControls();
    event.stopPropagation();
}

var stopMovingMap = function(event){
    switch (event.keyCode)
	{
        /* Setting up the variables that move the map */
        case 37: // GOING LEFT
            goingLeft = false;
            break;
        case 38: // GOING UP
            goingUp = false;
            break;
        case 39: // GOING RIGHT
            goingRight = false;
            break;
        case 40: // GOING DOWN
            goingDown = false;
            break;
        
    }
    event.stopPropagation();
};

var unsetGame = function(){
    window.removeEventListener('keydown',goingPlaces);
    window.addEventListener('keyup',stopMovingMap);
    clearInterval(mapInterval);
    if(currentScene == 'game'){
        unsetWalking();
    }
    else if(currentScene == 'swimming'){
        unsetSwimming();
    }
    else{
        unsetDriving();
    }
};


var setGame = function(){
    window.addEventListener('keydown',goingPlaces, true);
    window.addEventListener('keyup',stopMovingMap, true);
    if(currentScene == 'game'){
        setWalking();
    }
    else if(currentScene == 'swimming'){
        setSwimming();
    }
    else{
        setDriving();
    }
    var mapArray = document.getElementsByClassName('HUDMap');
    for(var mp = 0; mp < mapArray.length; mp++){
        mapArray[mp].style.top = (window.innerHeight-200) + 'px';
        mapArray[mp].style.left = '20px';
    }
    var myCurrentMap = document.getElementById(currentScene + 'Map');
    myCurrentMap.style.backgroundPosition = (initialPosX)+'px ' + initialPosY + 'px';
    mapInterval = setInterval(moveMap, 100);
};

var moveMap = function(){
    if(goingUp)
    {
        initialPosY+=skip;
    }
    if(goingDown){
        initialPosY-=skip;
    }
    if(goingLeft){
        initialPosX+=skip;
    }
    if(goingRight){
        initialPosX-=skip;
    }
    var myCurrentMap = document.getElementById(currentScene + 'Map');
    myCurrentMap.style.backgroundPosition = (initialPosX)+'px ' + initialPosY + 'px';
};

currentScene='swimming';
setGame();
