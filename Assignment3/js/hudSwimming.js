var swimmingInterval = {};
var setSwimming = function(){
    swimmingInterval = setInterval(decreaseOxygen, 1000);
};
var decreaseOxygen = function(){
    playerOxygen -= (Math.floor(Math.random() * 5 )+1);
    if(playerOxygen <= 0){
        playerOxygen = 0;
        unsetGame();
        transitionScene(currentScene, 'death');
    }
}

var unsetSwimming = function(){
    clearInterval(swimmingInterval);
};

var captureOverlaySwimmingLetGo = function(keyCode){
    switch(keyCode){
        case 86:
        case 118:
            powerSelectionActive = false;
            window.removeEventListener('mousewheel',mouseWheelWalkingHandler);    
            var selectionAreas = document.getElementById('weaponOvershadow');
            selectionAreas.style.display = 'none';
            var powerSelectionArea = document.getElementById('powerPopUp');
            powerSelectionArea.style.display = 'none';            
            return true;
    }
}

var capturePlayerSwimmingActions = function(keyCode){
    switch(keyCode){
        case 66:
        case 98:
            playerOxygen = 100;
            break;
        case 72:
        case 104:
            /* Harm the Player randomly */
            playerHealth -= Math.floor(Math.random() * 9 + 1);
            if(playerHealth <= 0)
            {
                unsetGame();
                transitionScene(currentScene, 'death');
            }
            return true;
        case 79:
        case 111:
            playerHealth += 10; // Always fixed value for health packs
            if(playerHealth > 100){
                playerHealth = 100;
            }
            return true;
        case 67:
        case 99:
            if (playerMana >= 10){
                playerMana -= 10; // Always fixed value for mana usage
                showPopUp('Power Deployed');
            }
            else{
                console.log('where is this pop-up!');
                showPopUp('No more mana - fail');
            }
            return true;
        case 90:
        case 122:
            playerMana += 10; // Always fixed value for mana replenishment
            if(playerMana > 100){
                playerMana = 100;
            }
            return true;
        case 86:
        case 118:
            powerSelectionActive = true;
            window.addEventListener('mousewheel',mouseWheelWalkingHandler, true);    
            var selectionAreas = document.getElementById('weaponOvershadow');
            selectionAreas.style.display = 'block';
            var powerSelectionArea = document.getElementById('powerPopUp');
            powerSelectionArea.style.display = 'block';            
            return true;
    }
}
