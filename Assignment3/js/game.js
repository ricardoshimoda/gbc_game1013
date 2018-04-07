var goingUp = false;
var goingDown = false;
var goingLeft = false;
var goingRight = false;
var mapInterval = {};
var initialPosX = 10;
var initialPosY = 10;
var skip = 20;

var goingPlaces = function(event){
    switch (event.keyCode)
	{
        case 68:
        case 100: // DRIVING
            if(currentScene != 'driving')
                transitionScene(currentScene, 'driving');
            break;
        case 83:
        case 115: // SWIMMING
            if(currentScene != 'swimming')
                transitionScene(currentScene, 'swimming');
            break;
        case 87:
        case 119: // WALKING
            if(currentScene != 'game')
                transitionScene(currentScene, 'game');
            break;
        case 80:
		case 112: // PAUSE MENU
            transitionScene(currentScene, 'pauseMenu', false, setPauseBack);    
            break;
        case 76:
		case 108: // RELOAD
            transitionScene(currentScene, 'charging', false, chargingBegin);
            break;
        /* Setting up the variables that move the map */
        case 37: // GOING LEFT
            goingLeft = true;
            break;
        case 38: // GOING UP
            goingUp = true;
            break;
        case 39: // GOING RIGHT
            goingRight = true;
            break;
        case 40: // GOING DOWN
            goingDown = true;
            break;
        
    }
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
        
    }    event.stopPropagation();
};

var unsetGame = function(){
    window.removeEventListener('keydown',goingPlaces);
    if(currentScene == 'game' || currentScene == 'swimming'){
        window.removeEventListener('mousewheel',MouseWheelHandler);
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
