var goingPlaces = function(event){
    /*
     * from the readme.txt file:
     * d or D to go to the Death Screen
     * p or P to go to the Pause Menu
     * l or L to simulate Loading a new mission
     */
    switch (event.keyCode)
	{
        case 68:
        case 100: // DEATH SCREEN
            transitionScene('game', 'death');    
            window.removeEventListener('keydown');
            break;
        case 80:
		case 112: // PAUSE MENU
            transitionScene('game', 'pauseMenu');    
            window.removeEventListener('keydown');
            break;
        case 76:
		case 108: // RELOAD
            transitionScene('game', 'charging', false, chargingBegin);    
            window.removeEventListener('keydown');
            break;
	} 
}

var setGame = function(){
    window.addEventListener('keydown',goingPlaces);
};