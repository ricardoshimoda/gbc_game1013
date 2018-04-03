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
            window.removeEventListener('keydown',goingPlaces);
            break;
        case 76:
		case 108: // RELOAD
            transitionScene(currentScene, 'charging', false, chargingBegin);    
            window.removeEventListener('keydown',goingPlaces);
            break;
	} 
}

var setGame = function(){
    window.addEventListener('keydown',goingPlaces);
};

setGame();
currentScene='game';
